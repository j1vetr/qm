import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Check, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Validation Schemas for Steps
const step1Schema = z.object({
  fromZip: z.string().min(4, "Zip code required"),
  toZip: z.string().min(4, "Zip code required"),
  date: z.date({ required_error: "Date is required" }),
});

const step2Schema = z.object({
  rooms: z.number().min(1),
  floorFrom: z.string(),
  floorTo: z.string(),
  elevatorFrom: z.enum(["yes", "no"]),
  elevatorTo: z.enum(["yes", "no"]),
});

const step3Schema = z.object({
  packing: z.enum(["full", "partial", "none"]),
  storage: z.boolean(),
  cleaning: z.boolean(),
  specialItems: z.string().optional(),
});

const step4Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data & Step4Data>>({
    rooms: 2,
    floorFrom: "1",
    floorTo: "1",
    elevatorFrom: "no",
    elevatorTo: "no",
    packing: "none",
    storage: false,
    cleaning: false,
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleFinalSubmit = () => {
    toast({
      title: "Quote Request Received",
      description: "We are calculating your estimate. You will hear from us within 24 hours.",
    });
    console.log("Full Submission:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase italic mb-4">
              Get A <span className="text-primary">Quote</span>
            </h1>
            <p className="text-muted-foreground">
              Detailed information allows us to provide an accurate estimate.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12 relative h-1 bg-white/10 w-full rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: "25%" }}
              animate={{ width: `${step * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="bg-card border border-white/10 p-8 md:p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1 
                  key="step1" 
                  data={formData as Step1Data} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                />
              )}
              {step === 2 && (
                <Step2 
                  key="step2" 
                  data={formData as Step2Data} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                  onPrev={prevStep}
                />
              )}
              {step === 3 && (
                <Step3 
                  key="step3" 
                  data={formData as Step3Data} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                  onPrev={prevStep}
                />
              )}
              {step === 4 && (
                <Step4 
                  key="step4" 
                  data={formData as Step4Data} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onSubmit={handleFinalSubmit} 
                  onPrev={prevStep}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// ------------------- SUB-COMPONENTS -------------------

function Step1({ data, update, onNext }: { data: Step1Data, update: (d: any) => void, onNext: () => void }) {
  const [localDate, setLocalDate] = useState<Date | undefined>(data.date);

  const handleNext = () => {
    // Basic validation
    const fromZip = (document.getElementById("fromZip") as HTMLInputElement).value;
    const toZip = (document.getElementById("toZip") as HTMLInputElement).value;
    
    if (!fromZip || !toZip || !localDate) {
      alert("Please fill all fields");
      return;
    }

    update({ fromZip, toZip, date: localDate });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-display uppercase italic">Where are we going?</h3>
        <p className="text-muted-foreground text-sm">Locations and timeline.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label htmlFor="fromZip">Moving From (Postcode)</Label>
          <Input id="fromZip" defaultValue={data.fromZip} placeholder="e.g. 8001" className="bg-background/50 border-white/10 h-12" />
        </div>
        <div className="space-y-4">
          <Label htmlFor="toZip">Moving To (Postcode)</Label>
          <Input id="toZip" defaultValue={data.toZip} placeholder="e.g. 1201" className="bg-background/50 border-white/10 h-12" />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Preferred Moving Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal h-12 border-white/10 bg-background/50",
                !localDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {localDate ? format(localDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={localDate}
              onSelect={setLocalDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex justify-end pt-8">
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Next Step <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step2({ data, update, onNext, onPrev }: { data: Step2Data, update: (d: any) => void, onNext: () => void, onPrev: () => void }) {
  const [rooms, setRooms] = useState([data.rooms || 2]);
  
  const handleNext = () => {
    update({ rooms: rooms[0] });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-display uppercase italic">Property Details</h3>
        <p className="text-muted-foreground text-sm">Tell us about access and size.</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
           <Label>Number of Rooms: <span className="text-primary font-bold text-lg">{rooms[0]}</span></Label>
        </div>
        <Slider
          defaultValue={[data.rooms || 2]}
          max={10}
          step={0.5}
          onValueChange={setRooms}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
           <span>Studio</span>
           <span>Villa</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <div className="space-y-4 p-4 border border-white/5 rounded bg-background/30">
          <Label className="text-primary font-bold">Origin Access</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs">Floor</Label>
               <Input defaultValue={data.floorFrom} onChange={(e) => update({ floorFrom: e.target.value })} type="number" className="bg-transparent" />
             </div>
             <div className="space-y-2">
               <Label className="text-xs">Elevator</Label>
               <select 
                 className="w-full h-9 bg-transparent border border-input rounded-md px-3 text-sm"
                 defaultValue={data.elevatorFrom}
                 onChange={(e) => update({ elevatorFrom: e.target.value })}
               >
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
               </select>
             </div>
          </div>
        </div>

        <div className="space-y-4 p-4 border border-white/5 rounded bg-background/30">
          <Label className="text-primary font-bold">Destination Access</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs">Floor</Label>
               <Input defaultValue={data.floorTo} onChange={(e) => update({ floorTo: e.target.value })} type="number" className="bg-transparent" />
             </div>
             <div className="space-y-2">
               <Label className="text-xs">Elevator</Label>
               <select 
                 className="w-full h-9 bg-transparent border border-input rounded-md px-3 text-sm"
                 defaultValue={data.elevatorTo}
                 onChange={(e) => update({ elevatorTo: e.target.value })}
               >
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
               </select>
             </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Next Step <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step3({ data, update, onNext, onPrev }: { data: Step3Data, update: (d: any) => void, onNext: () => void, onPrev: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
       <div className="mb-6">
        <h3 className="text-2xl font-bold font-display uppercase italic">Extra Services</h3>
        <p className="text-muted-foreground text-sm">Customize your move.</p>
      </div>

      <div className="space-y-6">
        <Label>Packing Service</Label>
        <RadioGroup defaultValue={data.packing} onValueChange={(val) => update({ packing: val })} className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 border border-white/10 p-4 rounded hover:border-primary/50 transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none" className="cursor-pointer">Self Pack</Label>
          </div>
          <div className="flex items-center space-x-2 border border-white/10 p-4 rounded hover:border-primary/50 transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10">
            <RadioGroupItem value="partial" id="partial" />
            <Label htmlFor="partial" className="cursor-pointer">Fragile Only</Label>
          </div>
          <div className="flex items-center space-x-2 border border-white/10 p-4 rounded hover:border-primary/50 transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10">
            <RadioGroupItem value="full" id="full" />
            <Label htmlFor="full" className="cursor-pointer">Full Service</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div 
          onClick={() => update({ storage: !data.storage })}
          className={cn(
            "p-6 border rounded cursor-pointer transition-all",
            data.storage ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30"
          )}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Temporary Storage</span>
            {data.storage && <Check className="w-4 h-4 text-primary" />}
          </div>
          <p className="text-xs text-muted-foreground">I need storage between moves.</p>
        </div>

        <div 
          onClick={() => update({ cleaning: !data.cleaning })}
          className={cn(
            "p-6 border rounded cursor-pointer transition-all",
            data.cleaning ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30"
          )}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Final Cleaning</span>
            {data.cleaning && <Check className="w-4 h-4 text-primary" />}
          </div>
          <p className="text-xs text-muted-foreground">Cleaning with handover guarantee.</p>
        </div>
      </div>

      <div className="space-y-4">
        <Label htmlFor="special">Special Items (Piano, Safe, Art...)</Label>
        <Textarea 
          id="special" 
          placeholder="Describe any heavy or valuable items..." 
          className="bg-background/50 border-white/10 min-h-[100px]"
          defaultValue={data.specialItems}
          onChange={(e) => update({ specialItems: e.target.value })}
        />
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Next Step <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step4({ data, update, onSubmit, onPrev }: { data: Step4Data, update: (d: any) => void, onSubmit: () => void, onPrev: () => void }) {
  const handleSubmit = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    if(!name || !email || !phone) {
      alert("Please provide contact details");
      return;
    }
    
    update({ name, email, phone });
    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
       <div className="mb-6">
        <h3 className="text-2xl font-bold font-display uppercase italic">Final Details</h3>
        <p className="text-muted-foreground text-sm">Where should we send the quote?</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue={data.name} className="bg-background/50 border-white/10 h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue={data.email} className="bg-background/50 border-white/10 h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" defaultValue={data.phone} className="bg-background/50 border-white/10 h-12" />
        </div>
      </div>

      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary/80">
        By submitting this form, you agree to our privacy policy. We treat your data with Swiss banking-level confidentiality.
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8 font-bold uppercase tracking-widest">
          Submit Request
        </Button>
      </div>
    </motion.div>
  );
}

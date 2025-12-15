import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Check, Upload, CalendarIcon, Box, Ruler, Truck, ShieldCheck, Home } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

// --- Validation Schemas ---

const step1Schema = z.object({
  moveType: z.enum(["private", "business"]),
  fromZip: z.string().min(4, "Required"),
  fromCity: z.string().min(2, "Required"),
  toZip: z.string().min(4, "Required"),
  toCity: z.string().min(2, "Required"),
  date: z.date({ required_error: "Date required" }),
  flexibility: z.enum(["fixed", "flexible_3_days", "flexible_week"]),
});

const step2Schema = z.object({
  surfaceArea: z.number().min(10),
  rooms: z.number().min(1),
  people: z.number().min(1),
  floorFrom: z.string(),
  floorTo: z.string(),
  elevatorFrom: z.enum(["yes", "no", "lift_needed"]),
  elevatorTo: z.enum(["yes", "no", "lift_needed"]),
  parkingFrom: z.enum(["driveway", "street", "permit_needed"]),
  parkingTo: z.enum(["driveway", "street", "permit_needed"]),
});

const step3Schema = z.object({
  inventory: z.array(z.string()), // e.g. ["bed", "sofa"] - simplified for mockup
  specialItems: z.string().optional(),
  disassembly: z.boolean(),
  assembly: z.boolean(),
  packingLevel: z.enum(["none", "fragile", "full", "vip"]),
  cleaning: z.boolean(),
  storage: z.boolean(),
  insuranceValue: z.string(),
});

const step4Schema = z.object({
  salutation: z.enum(["mr", "ms", "mx"]),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  contactPreference: z.enum(["email", "phone", "whatsapp"]),
  remarks: z.string().optional(),
});

// --- Types ---
type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  // Initialize with some defaults
  const [formData, setFormData] = useState<any>({
    moveType: "private",
    flexibility: "fixed",
    surfaceArea: 50,
    rooms: 2.5,
    people: 2,
    elevatorFrom: "no",
    elevatorTo: "no",
    parkingFrom: "street",
    parkingTo: "street",
    disassembly: false,
    assembly: false,
    packingLevel: "none",
    cleaning: false,
    storage: false,
    insuranceValue: "standard",
    salutation: "mr",
    contactPreference: "email",
  });

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((s) => Math.min(s + 1, 4));
  };
  
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleFinalSubmit = () => {
    toast({
      title: "Premium Quote Request Received",
      description: `Thank you ${formData.firstName}. Your detailed request ID is #QM-${Math.floor(Math.random() * 10000)}. We are analyzing your logistics now.`,
      duration: 5000,
    });
    console.log("Full Submission:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Start Your Journey</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase italic mb-4">
              Request <span className="text-primary">Proposal</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This isn't just a form. It's the beginning of a meticulously planned operation. The more details you provide, the more precise our logistical planning will be.
            </p>
          </motion.div>

          {/* Advanced Progress Bar */}
          <div className="mb-12 relative">
            <div className="flex justify-between mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className={step >= 1 ? "text-primary" : ""}>01. Logistics</span>
              <span className={step >= 2 ? "text-primary" : ""}>02. Property</span>
              <span className={step >= 3 ? "text-primary" : ""}>03. Services</span>
              <span className={step >= 4 ? "text-primary" : ""}>04. Personal</span>
            </div>
            <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-6 left-0 h-1 bg-primary"
                initial={{ width: "25%" }}
                animate={{ width: `${step * 25}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="bg-card border border-white/10 p-8 md:p-12 min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1 
                  key="step1" 
                  data={formData} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                />
              )}
              {step === 2 && (
                <Step2 
                  key="step2" 
                  data={formData} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                  onPrev={prevStep}
                />
              )}
              {step === 3 && (
                <Step3 
                  key="step3" 
                  data={formData} 
                  update={(d) => setFormData({ ...formData, ...d })} 
                  onNext={nextStep} 
                  onPrev={prevStep}
                />
              )}
              {step === 4 && (
                <Step4 
                  key="step4" 
                  data={formData} 
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

function Step1({ data, update, onNext }: { data: any, update: (d: any) => void, onNext: () => void }) {
  const [localDate, setLocalDate] = useState<Date | undefined>(data.date);

  const handleNext = () => {
    // Basic validation for mockup
    const fromZip = (document.getElementById("fromZip") as HTMLInputElement)?.value;
    const toZip = (document.getElementById("toZip") as HTMLInputElement)?.value;
    
    if (fromZip && toZip) {
       update({ fromZip, toZip, date: localDate });
       onNext();
    } else {
       alert("Please enter zip codes");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-primary/10 rounded text-primary"><Truck /></div>
        <div>
          <h3 className="text-2xl font-bold font-display uppercase italic">The Route</h3>
          <p className="text-muted-foreground text-sm">Defining the trajectory of your move.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
           <Label>Move Type</Label>
           <RadioGroup defaultValue={data.moveType} onValueChange={(v) => update({ moveType: v })} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Private</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business</Label>
              </div>
           </RadioGroup>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card border border-white/20 rounded-full z-10 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white/50" />
        </div>

        <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/5">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs">Origin</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Input id="fromZip" defaultValue={data.fromZip} placeholder="ZIP" className="bg-background/50" onChange={(e) => update({ fromZip: e.target.value })} />
            </div>
            <div className="col-span-2">
              <Input id="fromCity" defaultValue={data.fromCity} placeholder="City" className="bg-background/50" onChange={(e) => update({ fromCity: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/5">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs">Destination</Label>
           <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Input id="toZip" defaultValue={data.toZip} placeholder="ZIP" className="bg-background/50" onChange={(e) => update({ toZip: e.target.value })} />
            </div>
            <div className="col-span-2">
              <Input id="toCity" defaultValue={data.toCity} placeholder="City" className="bg-background/50" onChange={(e) => update({ toCity: e.target.value })} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label>Desired Date</Label>
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
                onSelect={(d) => { setLocalDate(d); update({ date: d }); }}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-4">
          <Label>Flexibility</Label>
          <Select defaultValue={data.flexibility} onValueChange={(v) => update({ flexibility: v })}>
            <SelectTrigger className="h-12 bg-background/50 border-white/10">
              <SelectValue placeholder="Select flexibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixed">Fixed Date (Strict)</SelectItem>
              <SelectItem value="flexible_3_days">+/- 3 Days</SelectItem>
              <SelectItem value="flexible_week">+/- 1 Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex-grow" />
      
      <div className="flex justify-end pt-4">
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Continue to Property <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step2({ data, update, onNext, onPrev }: { data: any, update: (d: any) => void, onNext: () => void, onPrev: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
       <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-primary/10 rounded text-primary"><Home /></div>
        <div>
          <h3 className="text-2xl font-bold font-display uppercase italic">Property Scope</h3>
          <p className="text-muted-foreground text-sm">Volume and access assessment.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4 p-4 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2"><Ruler className="w-4 h-4" /> Surface Area (m²)</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.surfaceArea]} max={300} step={5} 
               onValueChange={(v) => update({ surfaceArea: v[0] })}
            />
            <span className="font-bold font-display text-xl w-12 text-right">{data.surfaceArea}</span>
          </div>
        </div>
        <div className="space-y-4 p-4 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2"><Box className="w-4 h-4" /> Rooms</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.rooms]} max={10} step={0.5} 
               onValueChange={(v) => update({ rooms: v[0] })}
            />
            <span className="font-bold font-display text-xl w-12 text-right">{data.rooms}</span>
          </div>
        </div>
         <div className="space-y-4 p-4 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2">Residents</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.people]} max={10} step={1} 
               onValueChange={(v) => update({ people: v[0] })}
            />
            <span className="font-bold font-display text-xl w-12 text-right">{data.people}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-4">
        {/* Origin Access */}
        <div className="space-y-4 p-6 border border-white/5 rounded bg-background/30">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-2 block mb-4">Origin Access Conditions</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs">Floor</Label>
               <Input defaultValue={data.floorFrom} onChange={(e) => update({ floorFrom: e.target.value })} type="number" className="bg-transparent" />
             </div>
             <div className="space-y-2">
               <Label className="text-xs">Elevator</Label>
               <Select defaultValue={data.elevatorFrom} onValueChange={(v) => update({ elevatorFrom: v })}>
                 <SelectTrigger className="h-9 bg-transparent"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">Yes, Large</SelectItem>
                   <SelectItem value="small">Yes, Small</SelectItem>
                   <SelectItem value="no">No Elevator</SelectItem>
                   <SelectItem value="lift_needed">External Lift Needed</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs">Parking Distance</Label>
               <Select defaultValue={data.parkingFrom} onValueChange={(v) => update({ parkingFrom: v })}>
                 <SelectTrigger className="h-9 bg-transparent"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="driveway">Driveway / Private</SelectItem>
                   <SelectItem value="street">Street (&lt; 20m)</SelectItem>
                   <SelectItem value="far">Street (&gt; 20m)</SelectItem>
                   <SelectItem value="permit_needed">Permit Required</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          </div>
        </div>

        {/* Destination Access */}
        <div className="space-y-4 p-6 border border-white/5 rounded bg-background/30">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-2 block mb-4">Destination Access Conditions</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs">Floor</Label>
               <Input defaultValue={data.floorTo} onChange={(e) => update({ floorTo: e.target.value })} type="number" className="bg-transparent" />
             </div>
             <div className="space-y-2">
               <Label className="text-xs">Elevator</Label>
                <Select defaultValue={data.elevatorTo} onValueChange={(v) => update({ elevatorTo: v })}>
                 <SelectTrigger className="h-9 bg-transparent"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">Yes, Large</SelectItem>
                   <SelectItem value="small">Yes, Small</SelectItem>
                   <SelectItem value="no">No Elevator</SelectItem>
                   <SelectItem value="lift_needed">External Lift Needed</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs">Parking Distance</Label>
               <Select defaultValue={data.parkingTo} onValueChange={(v) => update({ parkingTo: v })}>
                 <SelectTrigger className="h-9 bg-transparent"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="driveway">Driveway / Private</SelectItem>
                   <SelectItem value="street">Street (&lt; 20m)</SelectItem>
                   <SelectItem value="far">Street (&gt; 20m)</SelectItem>
                   <SelectItem value="permit_needed">Permit Required</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          </div>
        </div>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Continue to Services <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step3({ data, update, onNext, onPrev }: { data: any, update: (d: any) => void, onNext: () => void, onPrev: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-primary/10 rounded text-primary"><ShieldCheck /></div>
        <div>
          <h3 className="text-2xl font-bold font-display uppercase italic">Premium Services</h3>
          <p className="text-muted-foreground text-sm">Customize your white-glove experience.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Label className="text-lg font-bold block mb-4">Packing & Handling</Label>
          
          <div className="space-y-3">
             <div onClick={() => update({ packingLevel: "none" })} className={cn("cursor-pointer p-4 border rounded-lg transition-all", data.packingLevel === "none" ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold"><span>Self Pack</span> <span>Standard</span></div>
               <p className="text-xs text-muted-foreground">You pack everything. We transport boxes and furniture.</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "fragile" })} className={cn("cursor-pointer p-4 border rounded-lg transition-all", data.packingLevel === "fragile" ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold"><span>Fragile Only</span> <span>+ CHF 350</span></div>
               <p className="text-xs text-muted-foreground">We pack glassware, art, and electronics. You pack clothes/books.</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "full" })} className={cn("cursor-pointer p-4 border rounded-lg transition-all", data.packingLevel === "full" ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold"><span>Full Service</span> <span>Recommended</span></div>
               <p className="text-xs text-muted-foreground">We bring materials and pack absolutely everything.</p>
             </div>

             <div onClick={() => update({ packingLevel: "vip" })} className={cn("cursor-pointer p-4 border rounded-lg transition-all", data.packingLevel === "vip" ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold"><span className="text-primary">VIP White Glove</span> <span>Premium</span></div>
               <p className="text-xs text-muted-foreground">Full pack + Unpack + Organization service.</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <Label className="text-lg font-bold block mb-4">Add-ons</Label>
           
           <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                 <div>
                    <Label className="font-bold">Furniture Disassembly</Label>
                    <p className="text-xs text-muted-foreground">Professional tool service</p>
                 </div>
                 <Switch checked={data.disassembly} onCheckedChange={(v) => update({ disassembly: v })} />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                 <div>
                    <Label className="font-bold">Furniture Assembly</Label>
                    <p className="text-xs text-muted-foreground">Re-assembly at destination</p>
                 </div>
                 <Switch checked={data.assembly} onCheckedChange={(v) => update({ assembly: v })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                 <div>
                    <Label className="font-bold">Final Cleaning</Label>
                    <p className="text-xs text-muted-foreground">With handover guarantee</p>
                 </div>
                 <Switch checked={data.cleaning} onCheckedChange={(v) => update({ cleaning: v })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                 <div>
                    <Label className="font-bold">Temporary Storage</Label>
                    <p className="text-xs text-muted-foreground">Secure, climate controlled</p>
                 </div>
                 <Switch checked={data.storage} onCheckedChange={(v) => update({ storage: v })} />
              </div>
           </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Special Items or Remarks</Label>
        <Textarea 
          placeholder="E.g., Grand Piano, Heavy Safe, Marble Table, Valuable Art..."
          className="bg-background/50 border-white/10"
          value={data.specialItems}
          onChange={(e) => update({ specialItems: e.target.value })}
        />
      </div>

      <div className="flex-grow" />

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8">
          Final Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step4({ data, update, onSubmit, onPrev }: { data: any, update: (d: any) => void, onSubmit: () => void, onPrev: () => void }) {
  const handleSubmit = () => {
    // Simple validation
    if (!data.firstName || !data.lastName || !data.email) {
      alert("Please complete required fields");
      return;
    }
    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-primary/10 rounded text-primary"><ShieldCheck /></div>
        <div>
          <h3 className="text-2xl font-bold font-display uppercase italic">Contact Details</h3>
          <p className="text-muted-foreground text-sm">Where should we send your custom offer?</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
           <Label>Salutation</Label>
           <Select defaultValue={data.salutation} onValueChange={(v) => update({ salutation: v })}>
              <SelectTrigger className="bg-background/50 border-white/10"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr.</SelectItem>
                <SelectItem value="ms">Ms.</SelectItem>
                <SelectItem value="mx">Mx.</SelectItem>
              </SelectContent>
           </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
           <Label>First Name <span className="text-primary">*</span></Label>
           <Input value={data.firstName} onChange={(e) => update({ firstName: e.target.value })} className="bg-background/50 border-white/10" />
        </div>
        <div className="space-y-2">
           <Label>Last Name <span className="text-primary">*</span></Label>
           <Input value={data.lastName} onChange={(e) => update({ lastName: e.target.value })} className="bg-background/50 border-white/10" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
           <Label>Email Address <span className="text-primary">*</span></Label>
           <Input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })} className="bg-background/50 border-white/10" />
        </div>
        <div className="space-y-2">
           <Label>Phone Number <span className="text-primary">*</span></Label>
           <Input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })} className="bg-background/50 border-white/10" />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Preferred Contact Method</Label>
        <RadioGroup defaultValue={data.contactPreference} onValueChange={(v) => update({ contactPreference: v })} className="flex gap-6">
           <div className="flex items-center space-x-2">
             <RadioGroupItem value="email" id="c_email" />
             <Label htmlFor="c_email">Email</Label>
           </div>
           <div className="flex items-center space-x-2">
             <RadioGroupItem value="phone" id="c_phone" />
             <Label htmlFor="c_phone">Phone Call</Label>
           </div>
           <div className="flex items-center space-x-2">
             <RadioGroupItem value="whatsapp" id="c_whatsapp" />
             <Label htmlFor="c_whatsapp">WhatsApp</Label>
           </div>
        </RadioGroup>
      </div>

      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary/90 flex gap-4 items-start">
        <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold mb-1">Data Privacy Guarantee</p>
          <p className="opacity-80">We store your data on secure Swiss servers. It is never shared with third parties.</p>
        </div>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-between pt-8">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto h-12 px-8 font-bold uppercase tracking-widest text-lg">
          Request Quote
        </Button>
      </div>
    </motion.div>
  );
}

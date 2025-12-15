import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Truck, ShieldCheck, Home, CheckCircle2, User, MapPin, Calendar as CalendarIcon, Package, Layers } from "lucide-react";
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

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const topRef = useRef<HTMLDivElement>(null);
  
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
    fromZip: "",
    fromCity: "",
    toZip: "",
    toCity: "",
  });

  const nextStep = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
    setStep((s) => Math.min(s + 1, 4));
  };
  
  const prevStep = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleFinalSubmit = () => {
    toast({
      title: "Premium Quote Request Received",
      description: `Thank you ${formData.firstName || 'Customer'}. Your detailed request ID is #QM-${Math.floor(Math.random() * 10000)}. We are analyzing your logistics now.`,
      duration: 5000,
    });
    console.log("Full Submission:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-6" ref={topRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Start Your Journey</span>
            <h1 className="text-4xl md:text-7xl font-display font-bold uppercase italic mb-4 leading-tight">
              Request <span className="text-primary">Proposal</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              This isn't just a form. It's the beginning of a meticulously planned operation. The more details you provide, the more precise our logistical planning will be.
            </p>
          </motion.div>

          {/* Advanced Progress Bar */}
          <div className="mb-8 md:mb-12 relative">
            <div className="flex justify-between mb-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className={cn("transition-colors duration-300", step >= 1 ? "text-primary" : "")}>01. Logistics</span>
              <span className={cn("transition-colors duration-300", step >= 2 ? "text-primary" : "")}>02. Property</span>
              <span className={cn("transition-colors duration-300", step >= 3 ? "text-primary" : "")}>03. Services</span>
              <span className={cn("transition-colors duration-300", step >= 4 ? "text-primary" : "")}>04. Personal</span>
            </div>
            <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "25%" }}
                animate={{ width: `${step * 25}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-2xl relative min-h-[500px] flex flex-col">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="p-6 md:p-12 relative z-10 flex-grow flex flex-col">
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
      </div>
      
      <Footer />
    </div>
  );
}

// ------------------- SUB-COMPONENTS -------------------

function StepHeader({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
      <div className="p-3 bg-primary/10 rounded-lg text-primary shadow-[0_0_15px_-3px_rgba(220,38,38,0.3)]">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold font-display uppercase italic text-white">{title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Step1({ data, update, onNext }: { data: any, update: (d: any) => void, onNext: () => void }) {
  const [localDate, setLocalDate] = useState<Date | undefined>(data.date);

  const handleNext = () => {
    if (data.fromZip && data.toZip && data.fromCity && data.toCity) {
       onNext();
    } else {
       // Simple alert for mockup, in production use form validation
       alert("Please fill in at least the ZIP codes and Cities.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <StepHeader icon={Truck} title="The Route" desc="Defining the trajectory of your move." />

      <div className="space-y-4">
         <Label className="text-base font-semibold">Move Type</Label>
         <div className="grid grid-cols-2 gap-4">
            <div 
              onClick={() => update({ moveType: "private" })}
              className={cn(
                "cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/5",
                data.moveType === "private" ? "border-primary bg-primary/5 text-primary" : "border-white/10 text-muted-foreground"
              )}
            >
              <User className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider text-sm">Private</span>
            </div>
            <div 
              onClick={() => update({ moveType: "business" })}
              className={cn(
                "cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/5",
                data.moveType === "business" ? "border-primary bg-primary/5 text-primary" : "border-white/10 text-muted-foreground"
              )}
            >
              <Briefcase className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider text-sm">Business</span>
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-primary/30 rounded-full z-10 items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>

        {/* Origin */}
        <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <Label className="text-primary font-bold uppercase tracking-wider text-xs">Origin</Label>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <Input 
                value={data.fromZip} 
                placeholder="ZIP" 
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ fromZip: e.target.value })} 
              />
            </div>
            <div className="col-span-2">
              <Input 
                value={data.fromCity} 
                placeholder="City" 
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ fromCity: e.target.value })} 
              />
            </div>
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full border border-primary" />
            <Label className="text-primary font-bold uppercase tracking-wider text-xs">Destination</Label>
          </div>
           <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <Input 
                value={data.toZip} 
                placeholder="ZIP" 
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ toZip: e.target.value })} 
              />
            </div>
            <div className="col-span-2">
              <Input 
                value={data.toCity} 
                placeholder="City" 
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ toCity: e.target.value })} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label className="text-base font-semibold">Desired Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal h-12 border-white/10 bg-background/50 hover:bg-white/5 hover:text-white",
                  !localDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
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
          <Label className="text-base font-semibold">Flexibility</Label>
          <Select defaultValue={data.flexibility} onValueChange={(v) => update({ flexibility: v })}>
            <SelectTrigger className="h-12 bg-background/50 border-white/10 hover:bg-white/5">
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

      <div className="flex-grow min-h-[20px]" />
      
      <div className="flex justify-end pt-4">
        <Button onClick={handleNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8 font-bold tracking-wide">
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
       <StepHeader icon={Home} title="Property Scope" desc="Volume and access assessment." />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4 p-5 border border-white/10 rounded-xl bg-white/5 hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2 text-primary font-bold"><Layers className="w-4 h-4" /> Surface (m²)</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.surfaceArea]} max={300} step={5} 
               onValueChange={(v) => update({ surfaceArea: v[0] })}
               className="flex-grow"
            />
            <span className="font-bold font-display text-2xl w-14 text-right">{data.surfaceArea}</span>
          </div>
        </div>
        <div className="space-y-4 p-5 border border-white/10 rounded-xl bg-white/5 hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2 text-primary font-bold"><Package className="w-4 h-4" /> Rooms</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.rooms]} max={10} step={0.5} 
               onValueChange={(v) => update({ rooms: v[0] })}
               className="flex-grow"
            />
            <span className="font-bold font-display text-2xl w-14 text-right">{data.rooms}</span>
          </div>
        </div>
         <div className="space-y-4 p-5 border border-white/10 rounded-xl bg-white/5 hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2 text-primary font-bold"><User className="w-4 h-4" /> People</Label>
          <div className="flex items-center gap-4">
            <Slider 
               defaultValue={[data.people]} max={10} step={1} 
               onValueChange={(v) => update({ people: v[0] })}
               className="flex-grow"
            />
            <span className="font-bold font-display text-2xl w-14 text-right">{data.people}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-4">
        {/* Origin Access */}
        <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-background/30">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-3 block mb-4">Origin Access</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Floor</Label>
               <Input 
                 value={data.floorFrom} 
                 onChange={(e) => update({ floorFrom: e.target.value })} 
                 type="number" 
                 placeholder="0"
                 className="bg-white/5 border-white/10" 
               />
             </div>
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Elevator</Label>
               <Select defaultValue={data.elevatorFrom} onValueChange={(v) => update({ elevatorFrom: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">Yes, Large</SelectItem>
                   <SelectItem value="small">Yes, Small</SelectItem>
                   <SelectItem value="no">No Elevator</SelectItem>
                   <SelectItem value="lift_needed">External Lift Needed</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs text-muted-foreground">Parking Distance</Label>
               <Select defaultValue={data.parkingFrom} onValueChange={(v) => update({ parkingFrom: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
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
        <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-background/30">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-3 block mb-4">Destination Access</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Floor</Label>
               <Input 
                 value={data.floorTo} 
                 onChange={(e) => update({ floorTo: e.target.value })} 
                 type="number" 
                 placeholder="0"
                 className="bg-white/5 border-white/10" 
               />
             </div>
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Elevator</Label>
                <Select defaultValue={data.elevatorTo} onValueChange={(v) => update({ elevatorTo: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">Yes, Large</SelectItem>
                   <SelectItem value="small">Yes, Small</SelectItem>
                   <SelectItem value="no">No Elevator</SelectItem>
                   <SelectItem value="lift_needed">External Lift Needed</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs text-muted-foreground">Parking Distance</Label>
               <Select defaultValue={data.parkingTo} onValueChange={(v) => update({ parkingTo: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
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

      <div className="flex-grow min-h-[20px]" />

      <div className="flex justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8">
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
      <StepHeader icon={ShieldCheck} title="Premium Services" desc="Customize your white-glove experience." />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Label className="text-lg font-bold block mb-4 border-b border-white/10 pb-2">Packing & Handling</Label>
          
          <div className="space-y-3">
             <div onClick={() => update({ packingLevel: "none" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "none" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>Self Pack</span> <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">Standard</span></div>
               <p className="text-xs text-muted-foreground mt-1">You pack everything. We transport boxes and furniture.</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "fragile" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "fragile" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>Fragile Only</span> <span className="text-primary font-bold text-xs">+ CHF 350</span></div>
               <p className="text-xs text-muted-foreground mt-1">We pack glassware, art, and electronics. You pack clothes/books.</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "full" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "full" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>Full Service</span> <span className="text-primary font-bold text-xs uppercase tracking-wider">Recommended</span></div>
               <p className="text-xs text-muted-foreground mt-1">We bring materials and pack absolutely everything.</p>
             </div>

             <div onClick={() => update({ packingLevel: "vip" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1 shadow-[0_0_15px_-5px_transparent] hover:shadow-[0_0_15px_-5px_rgba(220,38,38,0.3)]", data.packingLevel === "vip" ? "border-primary bg-primary/10 shadow-[0_0_15px_-5px_rgba(220,38,38,0.5)]" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span className="text-primary">VIP White Glove</span> <span className="text-primary font-bold text-xs uppercase tracking-wider">Premium</span></div>
               <p className="text-xs text-muted-foreground mt-1">Full pack + Unpack + Organization service.</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <Label className="text-lg font-bold block mb-4 border-b border-white/10 pb-2">Add-ons</Label>
           
           <div className="grid gap-3">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">Furniture Disassembly</Label>
                  <p className="text-xs text-muted-foreground">Beds, Wardrobes, Tables</p>
                </div>
                <Switch checked={data.disassembly} onCheckedChange={(c) => update({ disassembly: c })} />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">Furniture Assembly</Label>
                  <p className="text-xs text-muted-foreground">Re-assembly at destination</p>
                </div>
                <Switch checked={data.assembly} onCheckedChange={(c) => update({ assembly: c })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">Final Cleaning</Label>
                  <p className="text-xs text-muted-foreground">With handover guarantee</p>
                </div>
                <Switch checked={data.cleaning} onCheckedChange={(c) => update({ cleaning: c })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">Temporary Storage</Label>
                  <p className="text-xs text-muted-foreground">Secure, climate-controlled</p>
                </div>
                <Switch checked={data.storage} onCheckedChange={(c) => update({ storage: c })} />
              </div>
           </div>

           <div className="pt-4">
              <Label className="mb-2 block">Insurance Value</Label>
              <Select defaultValue={data.insuranceValue} onValueChange={(v) => update({ insuranceValue: v })}>
                <SelectTrigger className="h-12 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (CHF 20,000)</SelectItem>
                  <SelectItem value="medium">Enhanced (CHF 50,000)</SelectItem>
                  <SelectItem value="high">Premium (CHF 100,000+)</SelectItem>
                </SelectContent>
              </Select>
           </div>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      <div className="flex justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8">
          Final Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step4({ data, update, onSubmit, onPrev }: { data: any, update: (d: any) => void, onSubmit: () => void, onPrev: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <StepHeader icon={User} title="Personal Details" desc="Where should we send your quote?" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
             <div className="col-span-1">
               <Label>Title</Label>
               <Select defaultValue={data.salutation} onValueChange={(v) => update({ salutation: v })}>
                <SelectTrigger className="bg-white/5 border-white/10 mt-2"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="mx">Mx.</SelectItem>
                </SelectContent>
              </Select>
             </div>
             <div className="col-span-3">
               <Label>First Name</Label>
               <Input 
                 value={data.firstName} 
                 onChange={(e) => update({ firstName: e.target.value })} 
                 className="bg-white/5 border-white/10 mt-2" 
               />
             </div>
          </div>

          <div>
             <Label>Last Name</Label>
             <Input 
               value={data.lastName} 
               onChange={(e) => update({ lastName: e.target.value })} 
               className="bg-white/5 border-white/10 mt-2" 
             />
          </div>

          <div>
             <Label>Email Address</Label>
             <Input 
               value={data.email} 
               onChange={(e) => update({ email: e.target.value })} 
               type="email" 
               className="bg-white/5 border-white/10 mt-2" 
             />
          </div>

          <div>
             <Label>Phone Number</Label>
             <Input 
               value={data.phone} 
               onChange={(e) => update({ phone: e.target.value })} 
               type="tel" 
               className="bg-white/5 border-white/10 mt-2" 
             />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Preferred Contact Method</Label>
            <RadioGroup defaultValue={data.contactPreference} onValueChange={(v) => update({ contactPreference: v })} className="flex flex-col gap-3 mt-2">
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email" className="flex-grow cursor-pointer">Email me the quote</Label>
              </div>
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone" className="flex-grow cursor-pointer">Call me to discuss details</Label>
              </div>
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="whatsapp" id="whatsapp" />
                <Label htmlFor="whatsapp" className="flex-grow cursor-pointer">Send via WhatsApp</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Additional Remarks / Special Items</Label>
            <Textarea 
              placeholder="E.g., Piano, Heavy Safe, Artwork, Narrow Staircase..." 
              className="bg-white/5 border-white/10 min-h-[120px]"
              value={data.remarks}
              onChange={(e) => update({ remarks: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      <div className="flex justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white" disabled={isSubmitting}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleSubmit} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-12 text-lg font-bold shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-all" disabled={isSubmitting}>
          {isSubmitting ? (
             <span className="flex items-center gap-2">Processing...</span>
          ) : (
             <span className="flex items-center gap-2">Submit Request <CheckCircle2 className="w-5 h-5" /></span>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

// Simple icon component for Briefcase since it was missing in imports
function Briefcase(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

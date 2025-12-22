import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Truck, ShieldCheck, Home, CheckCircle2, User, MapPin, Calendar as CalendarIcon, Package, Layers, AlertCircle } from "lucide-react";
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
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const topRef = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  
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

  const handleFinalSubmit = async () => {
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Premium Quote Request Received",
          description: `Thank you ${formData.firstName || 'Customer'}. Your detailed request ID is ${result.quoteId}. Check your email for confirmation.`,
          duration: 7000,
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please try again or contact us directly.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-4 md:px-6" ref={topRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">{dict.contact.subtitle}</span>
            <h1 className="text-4xl md:text-7xl font-display font-bold uppercase italic mb-4 leading-tight">
              {dict.contact.title.split(' ')[0]} <span className="text-primary">{dict.contact.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              {dict.contact.description}
            </p>
          </motion.div>

          {/* Advanced Progress Bar */}
          <div className="mb-8 md:mb-12 relative">
            <div className="flex justify-between mb-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {dict.contact.steps_nav.map((label, index) => (
                <span key={index} className={cn("transition-colors duration-300", step >= index + 1 ? "text-primary" : "")}>{label}</span>
              ))}
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
                    dict={dict}
                  />
                )}
                {step === 2 && (
                  <Step2 
                    key="step2" 
                    data={formData} 
                    update={(d) => setFormData({ ...formData, ...d })} 
                    onNext={nextStep} 
                    onPrev={prevStep}
                    dict={dict}
                  />
                )}
                {step === 3 && (
                  <Step3 
                    key="step3" 
                    data={formData} 
                    update={(d) => setFormData({ ...formData, ...d })} 
                    onNext={nextStep} 
                    onPrev={prevStep}
                    dict={dict}
                  />
                )}
                {step === 4 && (
                  <Step4 
                    key="step4" 
                    data={formData} 
                    update={(d) => setFormData({ ...formData, ...d })} 
                    onSubmit={handleFinalSubmit} 
                    onPrev={prevStep}
                    dict={dict}
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
        <h3 className="text-xl md:text-2xl font-bold font-display uppercase italic text-foreground">{title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Step1({ data, update, onNext, dict }: { data: any, update: (d: any) => void, onNext: () => void, dict: any }) {
  const [localDate, setLocalDate] = useState<Date | undefined>(data.date);
  const [error, setError] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (data.fromZip && data.toZip && data.fromCity && data.toCity) {
       setError(null);
       onNext();
    } else {
       setError("Please fill in at least the ZIP codes and Cities.");
       setTimeout(() => {
         errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
       }, 100);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <StepHeader icon={Truck} title={dict.contact.step1.title} desc={dict.contact.step1.desc} />

      <div className="space-y-4">
         <Label className="text-base font-semibold">{dict.contact.step1.move_type}</Label>
         <div className="grid grid-cols-2 gap-4">
            <div 
              onClick={() => update({ moveType: "private" })}
              className={cn(
                "cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/5",
                data.moveType === "private" ? "border-primary bg-primary/5 text-primary" : "border-white/10 text-muted-foreground"
              )}
            >
              <User className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider text-sm">{dict.contact.step1.private}</span>
            </div>
            <div 
              onClick={() => update({ moveType: "business" })}
              className={cn(
                "cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/5",
                data.moveType === "business" ? "border-primary bg-primary/5 text-primary" : "border-white/10 text-muted-foreground"
              )}
            >
              <Briefcase className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider text-sm">{dict.contact.step1.business}</span>
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
            <Label className="text-primary font-bold uppercase tracking-wider text-xs">{dict.contact.step1.origin}</Label>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <Input 
                value={data.fromZip} 
                placeholder={dict.contact.step1.zip}
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ fromZip: e.target.value })} 
              />
            </div>
            <div className="col-span-2">
              <Input 
                value={data.fromCity} 
                placeholder={dict.contact.step1.city}
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
            <Label className="text-primary font-bold uppercase tracking-wider text-xs">{dict.contact.step1.destination}</Label>
          </div>
           <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <Input 
                value={data.toZip} 
                placeholder={dict.contact.step1.zip}
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ toZip: e.target.value })} 
              />
            </div>
            <div className="col-span-2">
              <Input 
                value={data.toCity} 
                placeholder={dict.contact.step1.city}
                className="bg-background/50 border-white/10 focus:border-primary/50 transition-all" 
                onChange={(e) => update({ toCity: e.target.value })} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label className="text-base font-semibold">{dict.contact.step1.date}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal h-12 border-white/10 bg-background/50 hover:bg-primary/5 hover:text-primary dark:hover:bg-white/5 dark:hover:text-white",
                  !localDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                {localDate ? format(localDate, "PPP") : <span>{dict.contact.step1.pick_date}</span>}
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
          <Label className="text-base font-semibold">{dict.contact.step1.flexibility}</Label>
          <Select defaultValue={data.flexibility} onValueChange={(v) => update({ flexibility: v })}>
            <SelectTrigger className="h-12 bg-background/50 border-white/10 hover:bg-white/5">
              <SelectValue placeholder="Select flexibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixed">{dict.contact.step1.flex_fixed}</SelectItem>
              <SelectItem value="flexible_3_days">{dict.contact.step1.flex_3days}</SelectItem>
              <SelectItem value="flexible_week">{dict.contact.step1.flex_week}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-500"
          ref={errorRef}
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </motion.div>
      )}
      
      <div className="flex justify-end pt-4">
        <Button onClick={handleNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8 font-bold tracking-wide">
          {dict.contact.buttons.continue_property} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step2({ data, update, onNext, onPrev, dict }: { data: any, update: (d: any) => void, onNext: () => void, onPrev: () => void, dict: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
       <StepHeader icon={Home} title={dict.contact.step2.title} desc={dict.contact.step2.desc} />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4 p-5 border border-white/10 rounded-xl bg-white/5 hover:border-primary/50 transition-colors">
          <Label className="flex items-center gap-2 text-primary font-bold"><Layers className="w-4 h-4" /> {dict.contact.step2.surface}</Label>
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
          <Label className="flex items-center gap-2 text-primary font-bold"><Package className="w-4 h-4" /> {dict.contact.step2.rooms}</Label>
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
          <Label className="flex items-center gap-2 text-primary font-bold"><User className="w-4 h-4" /> {dict.contact.step2.people}</Label>
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
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-3 block mb-4">{dict.contact.step2.origin_access}</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.floor}</Label>
               <Input 
                 value={data.floorFrom} 
                 onChange={(e) => update({ floorFrom: e.target.value })} 
                 type="number" 
                 placeholder="0"
                 className="bg-white/5 border-white/10" 
               />
             </div>
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.elevator}</Label>
               <Select defaultValue={data.elevatorFrom} onValueChange={(v) => update({ elevatorFrom: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">{dict.contact.step2.lift_yes_large}</SelectItem>
                   <SelectItem value="small">{dict.contact.step2.lift_yes_small}</SelectItem>
                   <SelectItem value="no">{dict.contact.step2.lift_no}</SelectItem>
                   <SelectItem value="lift_needed">{dict.contact.step2.lift_needed}</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.parking}</Label>
               <Select defaultValue={data.parkingFrom} onValueChange={(v) => update({ parkingFrom: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="driveway">{dict.contact.step2.parking_driveway}</SelectItem>
                   <SelectItem value="street">{dict.contact.step2.parking_street}</SelectItem>
                   <SelectItem value="far">{dict.contact.step2.parking_far}</SelectItem>
                   <SelectItem value="permit_needed">{dict.contact.step2.parking_permit}</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          </div>
        </div>

        {/* Destination Access */}
        <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-background/30">
          <Label className="text-primary font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-3 block mb-4">{dict.contact.step2.dest_access}</Label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.floor}</Label>
               <Input 
                 value={data.floorTo} 
                 onChange={(e) => update({ floorTo: e.target.value })} 
                 type="number" 
                 placeholder="0"
                 className="bg-white/5 border-white/10" 
               />
             </div>
             <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.elevator}</Label>
                <Select defaultValue={data.elevatorTo} onValueChange={(v) => update({ elevatorTo: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="yes">{dict.contact.step2.lift_yes_large}</SelectItem>
                   <SelectItem value="small">{dict.contact.step2.lift_yes_small}</SelectItem>
                   <SelectItem value="no">{dict.contact.step2.lift_no}</SelectItem>
                   <SelectItem value="lift_needed">{dict.contact.step2.lift_needed}</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <div className="space-y-2 col-span-2">
               <Label className="text-xs text-muted-foreground">{dict.contact.step2.parking}</Label>
               <Select defaultValue={data.parkingTo} onValueChange={(v) => update({ parkingTo: v })}>
                 <SelectTrigger className="h-10 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                 <SelectContent>
                   <SelectItem value="driveway">{dict.contact.step2.parking_driveway}</SelectItem>
                   <SelectItem value="street">{dict.contact.step2.parking_street}</SelectItem>
                   <SelectItem value="far">{dict.contact.step2.parking_far}</SelectItem>
                   <SelectItem value="permit_needed">{dict.contact.step2.parking_permit}</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          </div>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white w-full md:w-auto">
          <ArrowLeft className="mr-2 w-4 h-4" /> {dict.contact.buttons.back}
        </Button>
        <Button onClick={onNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8">
          {dict.contact.buttons.continue_services} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step3({ data, update, onNext, onPrev, dict }: { data: any, update: (d: any) => void, onNext: () => void, onPrev: () => void, dict: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 h-full flex flex-col"
    >
      <StepHeader icon={ShieldCheck} title={dict.contact.step3.title} desc={dict.contact.step3.desc} />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Label className="text-lg font-bold block mb-4 border-b border-white/10 pb-2">{dict.contact.step3.packing_handling}</Label>
          
          <div className="space-y-3">
             <div onClick={() => update({ packingLevel: "none" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "none" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>{dict.contact.step3.pack_self}</span> <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">{dict.contact.step3.pack_self_sub}</span></div>
               <p className="text-xs text-muted-foreground mt-1">{dict.contact.step3.pack_self_desc}</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "fragile" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "fragile" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>{dict.contact.step3.pack_fragile}</span> <span className="text-primary font-bold text-xs uppercase tracking-wider">{dict.contact.step3.pack_fragile_sub}</span></div>
               <p className="text-xs text-muted-foreground mt-1">{dict.contact.step3.pack_fragile_desc}</p>
             </div>
             
             <div onClick={() => update({ packingLevel: "full" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1", data.packingLevel === "full" ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span>{dict.contact.step3.pack_full}</span> <span className="text-primary font-bold text-xs uppercase tracking-wider">{dict.contact.step3.pack_full_sub}</span></div>
               <p className="text-xs text-muted-foreground mt-1">{dict.contact.step3.pack_full_desc}</p>
             </div>

             <div onClick={() => update({ packingLevel: "vip" })} className={cn("cursor-pointer p-4 border rounded-xl transition-all hover:translate-x-1 shadow-[0_0_15px_-5px_transparent] hover:shadow-[0_0_15px_-5px_rgba(220,38,38,0.3)]", data.packingLevel === "vip" ? "border-primary bg-primary/10 shadow-[0_0_15px_-5px_rgba(220,38,38,0.5)]" : "border-white/10 hover:border-white/30")}>
               <div className="flex justify-between font-bold text-sm md:text-base"><span className="text-primary">{dict.contact.step3.pack_vip}</span> <span className="text-primary font-bold text-xs uppercase tracking-wider">{dict.contact.step3.pack_vip_sub}</span></div>
               <p className="text-xs text-muted-foreground mt-1">{dict.contact.step3.pack_vip_desc}</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <Label className="text-lg font-bold block mb-4 border-b border-white/10 pb-2">{dict.contact.step3.addons}</Label>
           
           <div className="grid gap-3">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">{dict.contact.step3.disassembly}</Label>
                  <p className="text-xs text-muted-foreground">{dict.contact.step3.disassembly_desc}</p>
                </div>
                <Switch checked={data.disassembly} onCheckedChange={(c) => update({ disassembly: c })} />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">{dict.contact.step3.assembly}</Label>
                  <p className="text-xs text-muted-foreground">{dict.contact.step3.assembly_desc}</p>
                </div>
                <Switch checked={data.assembly} onCheckedChange={(c) => update({ assembly: c })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">{dict.contact.step3.cleaning}</Label>
                  <p className="text-xs text-muted-foreground">{dict.contact.step3.cleaning_desc}</p>
                </div>
                <Switch checked={data.cleaning} onCheckedChange={(c) => update({ cleaning: c })} />
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="space-y-0.5">
                  <Label className="text-base">{dict.contact.step3.storage}</Label>
                  <p className="text-xs text-muted-foreground">{dict.contact.step3.storage_desc}</p>
                </div>
                <Switch checked={data.storage} onCheckedChange={(c) => update({ storage: c })} />
              </div>
           </div>

           <div className="pt-4">
              <Label className="mb-2 block">{dict.contact.step3.insurance}</Label>
              <Select defaultValue={data.insuranceValue} onValueChange={(v) => update({ insuranceValue: v })}>
                <SelectTrigger className="h-12 bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">{dict.contact.step3.ins_standard}</SelectItem>
                  <SelectItem value="medium">{dict.contact.step3.ins_medium}</SelectItem>
                  <SelectItem value="high">{dict.contact.step3.ins_high}</SelectItem>
                </SelectContent>
              </Select>
           </div>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white w-full md:w-auto">
          <ArrowLeft className="mr-2 w-4 h-4" /> {dict.contact.buttons.back}
        </Button>
        <Button onClick={onNext} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8">
          {dict.contact.buttons.final_details} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step4({ data, update, onSubmit, onPrev, dict }: { data: any, update: (d: any) => void, onSubmit: () => void, onPrev: () => void, dict: any }) {
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
      <StepHeader icon={User} title={dict.contact.step4.title} desc={dict.contact.step4.desc} />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
             <div className="col-span-1">
               <Label>{dict.contact.step4.salutation}</Label>
               <Select defaultValue={data.salutation} onValueChange={(v) => update({ salutation: v })}>
                <SelectTrigger className="bg-white/5 border-white/10 mt-2"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">{dict.contact.step4.mr}</SelectItem>
                  <SelectItem value="ms">{dict.contact.step4.ms}</SelectItem>
                  <SelectItem value="mx">{dict.contact.step4.mx}</SelectItem>
                </SelectContent>
              </Select>
             </div>
             <div className="col-span-3">
               <Label>{dict.contact.step4.firstname}</Label>
               <Input 
                 value={data.firstName} 
                 onChange={(e) => update({ firstName: e.target.value })} 
                 className="bg-white/5 border-white/10 mt-2" 
               />
             </div>
          </div>

          <div>
             <Label>{dict.contact.step4.lastname}</Label>
             <Input 
               value={data.lastName} 
               onChange={(e) => update({ lastName: e.target.value })} 
               className="bg-white/5 border-white/10 mt-2" 
             />
          </div>

          <div>
             <Label>{dict.contact.step4.email}</Label>
             <Input 
               value={data.email} 
               onChange={(e) => update({ email: e.target.value })} 
               type="email" 
               className="bg-white/5 border-white/10 mt-2" 
             />
          </div>

          <div>
             <Label>{dict.contact.step4.phone}</Label>
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
            <Label>{dict.contact.step4.preferred_contact}</Label>
            <RadioGroup defaultValue={data.contactPreference} onValueChange={(v) => update({ contactPreference: v })} className="flex flex-col gap-3 mt-2">
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email" className="flex-grow cursor-pointer">{dict.contact.step4.contact_email}</Label>
              </div>
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone" className="flex-grow cursor-pointer">{dict.contact.step4.contact_phone}</Label>
              </div>
              <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem value="whatsapp" id="whatsapp" />
                <Label htmlFor="whatsapp" className="flex-grow cursor-pointer">{dict.contact.step4.contact_whatsapp}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>{dict.contact.step4.remarks}</Label>
            <Textarea 
              placeholder={dict.contact.step4.remarks_placeholder}
              className="bg-white/5 border-white/10 min-h-[120px]"
              value={data.remarks}
              onChange={(e) => update({ remarks: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow min-h-[20px]" />

      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between pt-8 border-t border-white/5">
        <Button variant="ghost" onClick={onPrev} className="text-muted-foreground hover:text-white w-full md:w-auto" disabled={isSubmitting}>
          <ArrowLeft className="mr-2 w-4 h-4" /> {dict.contact.buttons.back}
        </Button>
        <Button onClick={handleSubmit} size="lg" className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8 md:px-12 text-lg font-bold shadow-[0_0_20px_hsl(215,100%,50%,0.5)] hover:shadow-[0_0_30px_hsl(215,100%,50%,0.7)] transition-all" disabled={isSubmitting}>
          {isSubmitting ? (
             <span className="flex items-center gap-2">{dict.contact.buttons.processing}</span>
          ) : (
             <span className="flex items-center gap-2">{dict.contact.buttons.submit} <CheckCircle2 className="w-5 h-5" /></span>
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

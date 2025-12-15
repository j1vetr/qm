import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is too short." }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Request Sent",
      description: "We will contact you shortly to discuss your move.",
    });
    console.log(values);
  }

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Get Started</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic mb-8">
              Ready to <br />
              <span className="text-primary">Move?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Fill out the form to receive a personalized quote. Our team is available 24/7 to assist with your relocation needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-white/10" />
                <span className="font-display text-xl">hello@quickmove.ch</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-white/10" />
                <span className="font-display text-xl">+41 44 123 45 67</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-wider font-bold text-xs text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-transparent border-white/10 focus:border-primary h-12 rounded-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-wider font-bold text-xs text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-transparent border-white/10 focus:border-primary h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-wider font-bold text-xs text-muted-foreground">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+41 79 ..." {...field} className="bg-transparent border-white/10 focus:border-primary h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-wider font-bold text-xs text-muted-foreground">Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your move..." {...field} className="bg-transparent border-white/10 focus:border-primary min-h-[120px] rounded-none resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-none uppercase tracking-widest text-lg">
                  Request Quote
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

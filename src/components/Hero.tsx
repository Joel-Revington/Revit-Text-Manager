import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }
  
    const normalizedEmail = email.trim().toLowerCase();
    setLoading(true);
  
    const { data: existing, error: fetchError } = await supabase
      .from("revit-text-manager-email")
      .select("id")
      .eq("email", normalizedEmail)
      .limit(1)
      .maybeSingle();
  
    if (fetchError) {
      setLoading(false);
      toast({
        title: "Something went wrong!",
        description: fetchError.message,
        variant: "destructive",
      });
      return;
    }
  
    if (existing) {
      setLoading(false);
      toast({
        title: "You're already on the waitlist!",
        description: "Thanks for signing up earlier — we’ll be in touch soon.",
      });
      setEmail(""); // 👈 Clear input if already exists
      return;
    }
  
    const { error: insertError } = await supabase
      .from("revit-text-manager-email")
      .insert([{ email: normalizedEmail }]);
  
    setLoading(false);
  
    if (insertError) {
      toast({
        title: "Something went wrong!",
        description: insertError.message,
        variant: "destructive",
      });
      return;
    }
  
    toast({
      title: "Thanks for joining our waitlist!",
      description: "We'll be in touch soon with early access information.",
    });
  
    setEmail(""); // 👈 Clear input after successful insert
  };
  
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center md:space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance">
              <span className="text-gradient">Streamline</span> Your Revit Text Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A powerful plugin that helps architects and BIM teams find, replace, highlight, 
              and manage all text in your Revit models with ease.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your work email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Button type="submit" size="lg" className="h-12 text-base" disabled={loading}>
                {loading ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
            <p className="mt-2 text-sm text-muted-foreground">
              Be among the first to access our productivity-boosting tool
            </p>
          </div>

          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border bg-background/50 backdrop-blur shadow-xl">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/2X3FOIClmZ0" 
                title="Revit Text Manager Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

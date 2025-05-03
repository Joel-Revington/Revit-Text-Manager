
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CTA = () => {
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Text Management?</h2>
          <p className="text-xl text-muted-foreground">
            Join our waitlist today and be among the first to experience the benefits of streamlined 
            text management in Revit.
          </p>
          
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Button type="submit" size="lg" className="h-12" disabled={loading}>
                {loading ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
            <div className="mt-4 text-sm text-muted-foreground flex flex-col gap-2">
              <p className="flex items-center justify-center gap-1">
                <Shield size={14} className="inline-block" />
                <span>No commitment. Unsubscribe anytime.</span>
              </p>
              <p>
                Your email will be securely stored in our database and only used to provide 
                you with updates about our product launch and early access opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

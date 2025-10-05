import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Waste into Worth?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses already making a difference. Start earning credits 
            and contribute to a circular economy today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/get-started">
              <Button size="lg" className="text-lg group shadow-elegant">
                Start Listing Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            No credit card required • Free to start • Cancel anytime
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default CTA;

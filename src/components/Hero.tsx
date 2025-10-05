import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Recycle className="w-4 h-4" />
              <span>Turning Waste Into Worth</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Welcome to the
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Circular Economy
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect businesses to transform waste streams into valuable resources. 
              Earn credits, reduce landfill waste, and contribute to a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" className="text-lg group shadow-elegant hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Businesses</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-muted-foreground">Tons Diverted</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">₹5M+</div>
                <div className="text-sm text-muted-foreground">Credits Earned</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Circular economy in action"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

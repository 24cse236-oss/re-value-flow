import { Upload, Search, Coins, Gift } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Waste",
    description: "Businesses upload details about their waste materials including type, quantity, and location",
    color: "primary",
  },
  {
    icon: Search,
    title: "Get Matched",
    description: "Our platform connects you with businesses seeking your specific waste materials",
    color: "accent",
  },
  {
    icon: Coins,
    title: "Earn Credits",
    description: "Complete transactions and earn ReCircle credits for every successful exchange",
    color: "secondary",
  },
  {
    icon: Gift,
    title: "Redeem Rewards",
    description: "Use your credits for exclusive offers from our eco-friendly business partners",
    color: "primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How ReCircle Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform waste into worth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-sm text-primary z-10">
                {index + 1}
              </div>
              
              {/* Icon container */}
              <div className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-${step.color}/10 to-${step.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-card`}>
                <step.icon className={`w-16 h-16 text-${step.color}`} style={{
                  color: `hsl(var(--${step.color}))`
                }} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

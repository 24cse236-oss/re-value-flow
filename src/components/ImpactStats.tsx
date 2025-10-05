import { TrendingUp, Users, Leaf, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Businesses",
    description: "Trusted partners in our ecosystem",
    color: "primary",
  },
  {
    icon: TrendingUp,
    value: "10,000+",
    label: "Tons Diverted",
    description: "From landfills to production",
    color: "accent",
  },
  {
    icon: Leaf,
    value: "85%",
    label: "Waste Reduction",
    description: "Average for participating businesses",
    color: "secondary",
  },
  {
    icon: Target,
    value: "₹5M+",
    label: "Credits Exchanged",
    description: "Creating sustainable value",
    color: "primary",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable progress toward a sustainable future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-background to-muted items-center justify-center shadow-card group-hover:shadow-elegant transition-all group-hover:scale-110">
                <stat.icon 
                  className="w-10 h-10" 
                  style={{ color: `hsl(var(--${stat.color}))` }}
                />
              </div>
              
              <div className="space-y-2">
                <div 
                  className="text-5xl font-bold"
                  style={{ color: `hsl(var(--${stat.color}))` }}
                >
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ImpactStats;

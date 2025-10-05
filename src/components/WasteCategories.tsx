import { Card } from "@/components/ui/card";
import { Leaf, TreePine, Droplet, Package, Zap, Boxes } from "lucide-react";

const categories = [
  {
    icon: Leaf,
    title: "Organic Waste",
    description: "Food scraps, garden waste, and compostable materials",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
  },
  {
    icon: TreePine,
    title: "Wood & Timber",
    description: "Wood scraps, sawdust, and timber offcuts",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950",
  },
  {
    icon: Droplet,
    title: "Plastics",
    description: "PET, HDPE, and other recyclable plastic materials",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: Package,
    title: "Cardboard & Paper",
    description: "Boxes, packaging materials, and paper products",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: Zap,
    title: "E-Waste",
    description: "Electronics, batteries, and electrical components",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: Boxes,
    title: "Metal Scrap",
    description: "Aluminum, steel, copper, and other metal materials",
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950",
  },
];

const WasteCategories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Waste Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover valuable resources across diverse waste streams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-border/50"
            >
              <div className={`w-14 h-14 rounded-2xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-7 h-7 ${category.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {category.title}
              </h3>
              <p className="text-muted-foreground">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WasteCategories;

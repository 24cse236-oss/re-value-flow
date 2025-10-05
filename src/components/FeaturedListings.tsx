import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Weight, Calendar } from "lucide-react";

const listings = [
  {
    title: "Industrial Wood Scraps",
    category: "Wood & Timber",
    location: "Mumbai, Maharashtra",
    quantity: "2.5 Tons",
    credits: 150,
    date: "2 days ago",
    badge: "Premium",
  },
  {
    title: "Restaurant Organic Waste",
    category: "Organic Waste",
    location: "Bangalore, Karnataka",
    quantity: "500 Kg/week",
    credits: 75,
    date: "1 day ago",
    badge: "Recurring",
  },
  {
    title: "PET Plastic Bottles",
    category: "Plastics",
    location: "Delhi NCR",
    quantity: "1 Ton",
    credits: 120,
    date: "3 hours ago",
    badge: "New",
  },
  {
    title: "Office Paper Waste",
    category: "Cardboard & Paper",
    location: "Pune, Maharashtra",
    quantity: "300 Kg",
    credits: 50,
    date: "1 week ago",
    badge: null,
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Listings
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest opportunities from verified businesses
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            View All Listings
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative">
                {listing.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {listing.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {listing.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Weight className="w-4 h-4" />
                    <span>{listing.quantity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{listing.date}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-semibold text-secondary">
                      {listing.credits} Credits
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-primary">
                    Details →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" className="w-full">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;

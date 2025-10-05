import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Building2, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetStarted = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    businessType: "",
    wasteTypes: [] as string[],
    description: "",
  });

  const wasteCategories = [
    "Organic Waste",
    "Wood & Timber",
    "Plastics",
    "Cardboard & Paper",
    "E-Waste",
    "Metal Scrap",
  ];

  const handleWasteTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      wasteTypes: prev.wasteTypes.includes(type)
        ? prev.wasteTypes.filter(t => t !== type)
        : [...prev.wasteTypes, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend when Lovable Cloud is enabled
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Join ReCircle Today</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Start Your Journey to
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Sustainable Business
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Register your business and join our circular economy marketplace
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Benefits sidebar */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="font-semibold text-lg text-foreground mb-4">Why Join?</h3>
                
                <Card className="p-4 space-y-3 border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Earn Credits</h4>
                  <p className="text-sm text-muted-foreground">
                    Get rewarded for every transaction with redeemable credits
                  </p>
                </Card>

                <Card className="p-4 space-y-3 border-accent/20">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">Reduce Costs</h4>
                  <p className="text-sm text-muted-foreground">
                    Lower disposal costs and create new revenue streams
                  </p>
                </Card>

                <Card className="p-4 space-y-3 border-secondary/20">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">
                    Contribute to environmental goals and circular economy
                  </p>
                </Card>
              </div>

              {/* Registration form */}
              <Card className="lg:col-span-2 p-6 md:p-8 shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Business Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Input
                          id="businessType"
                          required
                          value={formData.businessType}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                          placeholder="e.g., Manufacturing, Restaurant"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Contact Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input
                          id="contactName"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="john@company.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Location *
                        </Label>
                        <Input
                          id="location"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="Mumbai, Maharashtra"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Waste Types */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Waste Streams *
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Select the types of waste materials your business deals with
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {wasteCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={formData.wasteTypes.includes(category)}
                            onCheckedChange={() => handleWasteTypeToggle(category)}
                          />
                          <Label
                            htmlFor={category}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Tell us about your business
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your business and what you're looking to achieve with ReCircle..."
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg group"
                    >
                      Create Account
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Already have an account?{" "}
                      <a href="#" className="text-primary hover:underline font-medium">
                        Sign in here
                      </a>
                    </p>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;

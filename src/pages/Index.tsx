import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WasteCategories from "@/components/WasteCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedListings from "@/components/FeaturedListings";
import ImpactStats from "@/components/ImpactStats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WasteCategories />
        <HowItWorks />
        <FeaturedListings />
        <ImpactStats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

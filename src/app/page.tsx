import Hero from "@/components/Hero/Hero";
import PlantClinicAnalysis from "@/components/PlantClinicAnalysis/PlantClinicAnalysis";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";


export default function Home() {
  return (
    <div>
      <Hero />
      <ShopByCategory />
      <PlantClinicAnalysis />
    </div>
  );
}

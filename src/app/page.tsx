import Hero from "@/components/Hero/Hero";
import PlantClinicAnalysis from "@/components/PlantClinicAnalysis/PlantClinicAnalysis";
import FeaturedProducts from "@/components/Products/FeaturedProducts";
import PopularProducts from "@/components/Products/PopularProducts";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";


export default function Home() {
  return (
    <div>
      <Hero />
      <ShopByCategory />
      <FeaturedProducts />
      <PopularProducts />
      <PlantClinicAnalysis />
    </div>
  );
}

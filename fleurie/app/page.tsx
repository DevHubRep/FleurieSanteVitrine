import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageTextSection from "@/components/ImageTextSection";
import Mission from "@/components/Mission";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import Valeurs from "@/components/Valeurs";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-pink-200 " >
      
      <Header /> 
      <div className="bg-pink-200 h-[1100px] ">
      <div className=" mt-[-20px] pt-20 pb-10 ">
        <h1 className="text-left pl-20 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-8">
          Nos Produits
        </h1>


        
        <div className="w-full flex justify-center items-center my-12">
 
  <InfiniteMovingCards
    items={[
      { image: "/img/1.png", productName: "Gippity AI" },
      { image: "/img/2.png", productName: "Magic Tool" },
      { image: "/img/3.png", productName: "Daily Transformer" },
      { image: "/img/4.png", productName: "Simple & Fast" },
      { image: "/img/5.png", productName: "Tech Essential" },
      { image: "/img/image5.png", productName: "AI Excellence" },
    ]}
    direction="right"
    speed="slow"
  />
</div>




 
      </div>
      <Mission/>
      </div>
      <div className="bg-white">
      <ImageTextSection  /></div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-400 min-h-[500px] lg:min-h-[300px]">
              <div className="max-w-xs">
                <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
                  Nos Produits Détaillés
                </h2>
                <p className="mt-4 text-left text-base text-neutral-200">
                  Créons des expériences web uniques et engageantes.
                </p>
                <div className="mt-6">
                 
                </div>
              </div>
              <Image
                src="/img/dev.png"
                width={300}
                height={300}
                alt="cyber"
                className="absolute -right-10 md:-right-[10%] lg:right-[10%] bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 bg-pink-400 min-h-[300px]">
              <div className="max-w-xs">
                <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
                  Distribution 
                </h2>
                <p className="mt-4 text-left text-base text-neutral-200">
                  Mettez vos produits en lumière avec des visuels qui vendent.
                </p>
                <div className="mt-6">
                 
                </div>
              </div>
            </WobbleCard>

            <WobbleCard containerClassName="col-span-2 lg:col-span-3 bg-pink-400 min-h-[500px]">
              <div className="max-w-sm">
                <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
                  Engagement Qualité et Innovation
                </h2>
                <p className="mt-4 text-left text-base text-neutral-200">
                  Sécurisez vos systèmes avec des technologies de pointe.
                </p>
                <div className="mt-6">
                
                </div>
              </div>
              <Image
                src="/img/secu.png"
                width={300}
                height={300}
                alt="cyber"
                className="absolute -right-10 md:-right-[10%] lg:right-[10%] bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>

          <Valeurs />
          <FaqSection />

          <Footer />
    </div>
  );
}

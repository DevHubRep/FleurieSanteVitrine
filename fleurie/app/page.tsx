'use client';

import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageTextSection from "@/components/ImageTextSection";
import Mission from "@/components/Mission";
import ProductCarousel from "@/components/ProductCarousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import Valeurs from "@/components/Valeurs";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    
    <div className="bg-pink-100 " >
      
      <Header />
      <Hero />
      <div className="bg-pink-100">
      <div className="">


{/* 
<div className="w-full flex justify-center items-center ">

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
*/}



 <ProductCarousel/>



 
      </div>
    
      </div>
      <div className="bg-white relative ">
        

      <ImageTextSection  /> 
      

      </div>

 <Mission/>

    <div className="mt-[30px] grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
  {/* Card 1 */}
  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-rose-700 min-h-[500px] lg:min-h-[300px]"
  >
    <div className="max-w-xs">
      <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Nos Produits Détaillés
      </h2>
      <p className="mt-4 text-left text-base text-rose-100">
        Créons des expériences web uniques et engageantes.
      </p>
      <button
        onClick={() => setOpenModal(1)}
        className="mt-6 px-4 py-2 bg-white text-rose-700 font-semibold rounded hover:bg-rose-100 transition"
      >
        En savoir plus
      </button>
    </div>
    <Image
      src="/linear.webp"
      width={500}
      height={500}
      alt="linear demo image"
      className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>

  {/* Card 2 */}
  <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-rose-900">
    <div>
      <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Distribution
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base text-rose-100">
        Mettez vos produits en lumière avec des visuels qui vendent.
      </p>
      <button
        onClick={() => setOpenModal(2)}
        className="mt-6 px-4 py-2 bg-white text-rose-900 font-semibold rounded hover:bg-rose-100 transition"
      >
        En savoir plus
      </button>
    </div>
  </WobbleCard>

  {/* Card 3 */}
  <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-rose-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
    <div className="max-w-sm">
      <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Engagement Qualité et Innovation
      </h2>
      <p className="mt-4 text-left text-base text-rose-100">
        Sécurisez vos systèmes avec des technologies de pointe.
      </p>
      <button
        onClick={() => setOpenModal(3)}
        className="mt-6 px-4 py-2 bg-white text-rose-800 font-semibold rounded hover:bg-rose-100 transition"
      >
        En savoir plus
      </button>
    </div>
    <Image
      src="/linear.webp"
      width={500}
      height={500}
      alt="linear demo image"
      className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>
</div>

          <Valeurs />
          <FaqSection />

          <Footer />
    </div>
  );
}

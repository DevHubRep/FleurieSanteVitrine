'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import ImageTextSection from "@/components/ImageTextSection";
import Mission from "@/components/Mission";
import { WobbleCard } from "@/components/ui/wobble-card";
import Valeurs from "@/components/Valeurs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ProductWobbleCarousel from "@/components/ProductWobbleCarousel";
import FleurieSanteCards from "@/components/pourquoiChoisir";

// --- Modal Component with framer-motion ---
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

function Modal({ isOpen, onClose, title, content }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // évite de fermer si on clique dans la modale
            className="relative bg-white p-6 rounded-lg max-w-lg w-full shadow-lg mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-4 text-gray-700">{content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const closeModal = () => setOpenModal(null);

  const modalData = [
    {
      id: 1,
      title: "Nos Produits Détaillés",
      content: (
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-2xl">
            <ProductWobbleCarousel
              products={[
                {
                  image: "/img/mannequins/img_1.png",
                  alt: "Soins de la peau",
                  title: "Soins de la peau",
                  description:
                    "Crèmes hydratantes, soins anti-âge, sérums régénérants, lotions nettoyantes et purifiantes, soins capillaires (shampoings, après-shampoings, masques).",
                },
                {
                  image: "/img/produits/img_12.png",
                  alt: "Parfums et eaux de parfum",
                  title: "Parfums et eaux de parfum",
                  description:
                    "Parfums, eaux de parfum, brumisateurs pour une expérience sensorielle unique.",
                },
                {
                  image: "/img/mannequins/img_4.png ",
                  alt: "Produits de bien-être",
                  title: "Produits de bien-être",
                  description:
                    "Tisanes, baumes, vitamines, huiles essentielles et huiles de massage pour votre bien-être au quotidien.",
                },
              ]}
            />
          </div>
        </div>
      ),
    },,
   {
     id: 2,
     title: "Distribution",
     content: (
       <>
         <p>
           Nous distribuons nos produits dans nos propres magasins situés en centre-ville, ainsi qu’à travers un large réseau de détaillants, salons de beauté, pharmacies, parapharmacies, magasins cosmétiques, hôtels, spas et grandes surfaces.
         </p>
         <p className="mt-2">
           Nous collaborons également avec des partenaires en ligne via notre site e-commerce&nbsp;: <a href="https://interpromoshop.com" target="_blank" rel="noopener noreferrer" className="text-rose-700 underline">INTERPROMOSHOP</a> pour offrir une expérience d’achat pratique, accessible et une livraison sécurisée. Notre réseau est en constante expansion, localement et à l’international.
         </p>
       </>
     ),
   },
   {
     id: 3,
     title: "Engagement Qualité et Innovation",
     content: (
       <p>
         En tant que société de distribution, nous nous engageons à collaborer avec des fabricants innovants et à la pointe de la technologie cosmétique. Nous sélectionnons des produits en phase avec les dernières tendances du marché, tout en respectant des standards élevés de sécurité et de durabilité.
       </p>
     ),
   },
  ];

  return (
    <div className="bg-pink-100">
      <Header />
      <Hero />
      <ProductCarousel />
      <div className="bg-white relative">
        <ImageTextSection />
      </div>
      <Mission />

      <div className="mt-[30px] grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Card 1 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#FFA8A8]  min-h-[500px] lg:min-h-[300px] relative overflow-hidden">
          <div className="max-w-xs relative z-10">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Nos Produits Détaillés
            </h2>
            <p className="mt-4 text-left text-base text-rose-100">
              Créons des expériences web uniques et engageantes.
            </p>
            <button
              onClick={() => setOpenModal(1)}
              className="mt-6 px-4 py-2 bg-white text-rose-700 font-semibold rounded hover:bg-red-400 hover:text-white transition"
            >
              En savoir plus
            </button>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl pointer-events-none"
          />
        </WobbleCard>

        {/* Card 2 */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#e26c94] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-base md:text-xl lg:text-3xl font-semibold text-white">
              Distribution
            </h2>
            <p className="mt-4 text-base text-rose-100">
              Mettez vos produits en lumière avec des visuels qui vendent.
            </p>
            <button
              onClick={() => setOpenModal(2)}
              className="mt-6 px-4 py-2 bg-white text-rose-900 font-semibold rounded hover:bg-rose-600 hover:text-white transition"
            >
              En savoir plus
            </button>
          </div>
        </WobbleCard>

        {/* Card 3 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#F8BBD0] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative overflow-hidden">
          <div className="max-w-sm relative z-10">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Engagement Qualité et Innovation
            </h2>
            <p className="mt-4 text-base text-rose-100">
              Sécurisez vos systèmes avec des technologies de pointe.
            </p>
            <button
              onClick={() => setOpenModal(3)}
              className="mt-6 px-4 py-2 bg-white text-rose-800 font-semibold rounded hover:bg-pink-600 hover:text-white transition"
            >
              En savoir plus
            </button>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl pointer-events-none"
          />
        </WobbleCard>
      </div>

      {/* Render modal if open */}
      {modalData.map((modal) => (
        <Modal
          key={modal.id}
          isOpen={openModal === modal.id}
          onClose={closeModal}
          title={modal.title}
          content={modal.content}
        />
      ))}

      <Valeurs />
      <FaqSection />
        <FleurieSanteCards/>
      <Footer />
    </div>
  );
}

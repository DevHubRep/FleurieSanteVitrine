<<<<<<< HEAD
// components/Header.jsx
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-lg font-semibold">Fleurie Santé</div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        <a href="#">ACCUEIL</a>
        <a href="#">PRODUIT</a>
        <a href="#">A PROPOS</a>
        <a href="#">FAQ</a>
      </nav>
      <div className="flex items-center gap-4">
        <button aria-label="Search">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
          </svg>
        </button>
        <button aria-label="Cart">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            <circle cx="7" cy="21" r="1" />
            <circle cx="17" cy="21" r="1" />
          </svg>
        </button>
=======
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative max-h-[1000px] h-[800px] flex  overflow-hidden">
      <div className="relative z-10 flex flex-col items-start pl-20 pr-[20%] py-12 px-4 sm:py-20 mt-[17%]">
        {/* Ton logo ici, si besoin */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="[font-family:var(--font-goudy)] text-4xl font-bold text-white dark:text-neutral-400 sm:text-5xl lg:text-6xl pr-[%] font-girly"
        >
        Promotion Internationale<br></br> de Soins Esthétiques et <br></br> Cosmétiques de Qualité
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-lg text-white sm:mt-6"
        >
          Votre partenaire beauté, bien-être et éthique en Afrique et en Europe.
        </motion.p>

        <a
          href="#"
          className="mt-8 inline-block rounded-[15px] px-8 py-3 text-lg font-medium text-black shadow-lg bg-amber-50 hover:bg-pink-600"
        >
          En savoir plus
        </a>
      </div>

      {/* Image de fond en absolute */}
      <div className="absolute inset-0 z-0 -mt-20">
        <Image
          src="/img/Header.png"
          alt="Banner Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-90"
          priority
        />
>>>>>>> 084e33091733283a077a8b51833e22ed82d0ccd2
      </div>
    </header>
  );
}

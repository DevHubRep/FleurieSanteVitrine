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
      </div>
    </header>
  );
}

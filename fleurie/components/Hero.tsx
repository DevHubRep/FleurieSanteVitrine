'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
      <section
          className="flex flex-col h-screen rounded-4xl md:flex-row items-center justify-between p-8 rounded-b-[0rem] bg-gradient-to-br from-[#F8BBD0] to-[#FFF8F9] bg-[url('/img/mannequins/img_2.png')] bg-cover bg-center"
      >
        <div className="max-w-2xl pl-10 p-6 space-y-6 ">
          <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-[#333333]"
          >
            Promotion Internationale de Soins Esthétiques et Cosmétiques de Qualité
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#6B4E57] text-lg font-medium"
          >
            Votre partenaire beauté, bien-être et éthique en Afrique et en Europe.
          </motion.p>

          <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#f85a5a] text-[#FFF8F9] px-8 py-3 rounded-full hover:bg-[#f81515] transition-all duration-300 font-medium shadow-lg hover:shadow-[#F6C667]/30 transform hover:scale-105"
          >
            En savoir plus
          </motion.button>
        </div>
      </section>
  );
}
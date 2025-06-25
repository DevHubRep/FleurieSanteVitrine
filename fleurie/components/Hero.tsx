'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="flex flex-col h-screen rounded-4xl md:flex-row items-center justify-between p-8 rounded-b-[3rem] bg-gradient-to-br from-pink-100 to-pink-200 bg-[url('/img/head2.png')] bg-cover bg-center"
    >
      <div className="max-w-2xl pl-10 p-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900"
        >
          Promotion Internationale de Soins Esthétiques et Cosmétiques de Qualité
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700"
        >
          Votre partenaire beauté, bien-être et éthique en Afrique et en Europe.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
        >
          En savoir plus
        </motion.button>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="bg-white max-w-7xl w-[90%] py-10 mx-auto flex items-center mt-10 rounded-[25px] justify-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(219, 39, 119, 0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
          Fleurie Santé s&apos;engage à promouvoir des soins esthétiques et cosmétiques de qualité, alliant éthique et bien-être.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Nous avons pour mission de rendre accessibles les meilleures marques
          de produits à travers un réseau de distribution performant et fiable
          qu’est le nôtre. Nous nous engageons à offrir à nos clients des produits
          efficaces, innovants et respectueux de l&apos;environnement, tout en assurant
          un service client irréprochable.
        </p>
      </div>
    </motion.div>
  );
}

import Image from 'next/image';
import React from 'react';

const ImageTextSection: React.FC = () => {
  return (
    <section className="mt-7 max-w-7xl w-[90%]  px-6 mx-auto py-10 space-y-16">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 group transition-all duration-700">
        {/* Image */}
        <div className="flex justify-center relative">
          <div className="absolute -inset-2 bg-pink-100 rounded-[48px] blur-lg opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"></div>
          <Image
              src="/R.jpeg"
              alt="Description de l'image"
              width={400}
              height={300}
              className="relative rounded-[40px] shadow-2xl w-full max-w-sm lg:max-w-md scale-100 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Texte */}
        <div className="bg-gradient-to-br from-secondary-light via-pink-50 to-white p-8 rounded-3xl shadow-2xl flex-1 border border-pink-100 hover:shadow-pink-200 transition-all duration-500 animate-fade-in-up">
          <h4 className="text-3xl text-pink-800 font-extrabold mb-4 tracking-wide drop-shadow">
            <span className="inline-block">ANALYSE DU MARCHÉ LOCAL</span>
          </h4>
          <ul className="list-disc text-xl pl-7 space-y-4 text-gray-700">
            <li className="transition-all duration-300 hover:pl-4 hover:text-pink-700">
              <span className="font-semibold">Étude du marché et segmentation:</span>
              Nous identifions les différents segments du marché (hôpitaux publics, cliniques privées, pharmacie de détail, etc.).
            </li>
            <li className="transition-all duration-300 hover:pl-4 hover:text-pink-700">
              <span className="font-semibold">Analyse des réglementations locales:</span>
              Se conformer aux réglementations nationales et régionales de chaque pays.
            </li>
            <li className="transition-all duration-300 hover:pl-4 hover:text-pink-700">
              <span className="font-semibold">Connaissance des acteurs clés:</span>
              Identifier les professionnels de santé influents, les associations médicales, les grossistes répartiteurs locaux, les pharmacies locales et les institutions gouvernementales.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/R.jpeg"
            alt="Description de l'image"
            width={400}
            height={300}
            className="rounded-[40px] shadow-soft w-full max-w-sm lg:max-w-md"
          />
        </div>

        {/* Texte */}
        <div className="bg-secondary-light p-6 rounded-lg shadow-soft flex-1">
          <h4 className="text-2xl text-pink-800 font-bold text-accent mb-4">
            FORMATION ET VISITE MÉDICALE
          </h4>
          <p className="mb-4 text-xl text-gray-700">
            <span className="font-semibold">Aller directement au contact des prescripteurs.</span> 
            C’est ce qu’on appelle la visite médicale. Elle consiste à faire la promotion des médicaments ou de produits par la délivrance d’une information médicale de qualité et à en assurer le bon usage auprès des acteurs de santé.
          </p>
          <p className="text-xl text-gray-700">
            Avec l’avènement d’internet, la visite médicale change de visage. Les visites virtuelles, ou e-detailing, se développent, permettant des rencontres à distance en visio et répondant au besoin des médecins manquant de temps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;

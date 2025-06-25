import React from 'react';

const MissionSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/img/fleur.png')" }} // remplace par le vrai chemin
    >
      {/* Overlay foncé */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenu centré */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light italic mb-6">
          Notre Mission
        </h1>

        <p className="text-base md:text-lg font-light leading-relaxed mb-6">
          Fleurie Santé s'engage à promouvoir des soins esthétiques et cosmétiques de qualité, alliant éthique et bien-être. <br />
          Nous avons pour mission de rendre accessibles les meilleures marques de produits à travers un réseau de distribution performant et fiable qu’est le nôtre.
          <br /><br />
          Nous nous engageons à offrir à nos clients des produits efficaces, innovants et respectueux de l’environnement, tout en assurant un service client irréprochable.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;

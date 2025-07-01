// components/AboutSection.tsx
import StatCard from "./StatCard";

export default function Valeurs() {
  return (
    <section className=" text-white py-16 px-6 ">
 <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
  {/* Bloc gauche : titre + sous-titre */}
  <div className="flex-shrink-0">
    <h2 className="text-4xl font-bold text-black dark:text-white lg:-ml-">
     Nos Valeurs
    </h2>
    <p className="text-xl font-semibold mt-4 text-neutral-700 dark:text-neutral-300 lg:-ml-">
      Historique et valeurs <br /> de l’entreprise
    </p>
  </div>



        {/* Bloc droit : Statistiques */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <StatCard value="Qualité et Sécurité " label="Nous sélectionnons avec soin chaque produit pour garantir à nos clients une efficacité optimale et une sécurité totale." />
          <StatCard value="Innovation" label="Nous sommes à l’écoute des dernières innovations en matière de beauté pour offrir à nos clients des produits avant-gardistes." />
          <StatCard value="Environement" label="Nous encourageons la durabilité et l’éco-responsabilité dans toutes nos pratiques, de la sélection des produits à l’emballag" />
        </div>
      </div>
    </section>
  );
}


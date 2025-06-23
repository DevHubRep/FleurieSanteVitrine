'use client';

import { motion } from 'framer-motion';
import BeautyTitle from '@/components/ui/titre';
import BeautyParagraph from '@/components/ui/paragraphe';
import BeautySection from '@/components/ui/section';

export default function Mission() {
  const title = "Notre Mission";
  const paragraphs = [
    "Fleurie Santé s'engage à promouvoir des soins esthétiques et cosmétiques de qualité, alliant éthique et bien-être.",
    "Nous avons pour mission de rendre accessibles les meilleures marques de produits à travers un réseau de distribution performant et fiable qu’est le nôtre.",
    "Nous nous engageons à offrir à nos clients des produits efficaces, innovants et respectueux de l’environnement, tout en assurant un service client irréprochable.",
  ];




  return (
        <div >
           <BeautySection title={title} paragraphs={paragraphs}/>
        </div>
  )
}

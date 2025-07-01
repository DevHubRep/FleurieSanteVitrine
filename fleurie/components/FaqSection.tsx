"use client";

          import React, { useState } from "react";
          import { motion, AnimatePresence } from "framer-motion";
          import Image from "next/image";

          const faqs = [
            {
              question: "Augmenter la visibilité de nos produits et services médicaux",
              answer:
                "Aider nos laboratoires pharmaceutiques à accroître la visibilité des produits, dispositifs médicaux et services auprès des professionnels de santé et du grand public."
            },
            {
              question: "Éducation et sensibilisation",
              answer:
                "Informer et éduquer les professionnels de santé et le grand public sur les produits, dispositifs médicaux et services offerts par nos laboratoires partenaires.",
            },
            {
              question: "Renforcer la réputation de nos marques dans le domaine médical",
              answer:
                "Construire et maintenir une image positive et fiable de nos produits."
            },
            {
              question: "Faciliter les relations avec les professionnels de santé",
              answer: "Établir des relations solides et durables avec les professionnels de santé pour favoriser la prescription et l'utilisation de nos produits."
            }
          ];

          export default function FaqSection() {
            const [openIndex, setOpenIndex] = useState<number | null>(null);

            const toggle = (index: number) => {
              setOpenIndex(index === openIndex ? null : index);
            };

            return (
              <section className="relative max-w-7xl mx-auto w-full rounded-3xl my-12 overflow-hidden">
                {/* Image de fond avec overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/img/mannequins/img_1.png"
                    alt="Mannequins de fond"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F9]/90 to-white/40 backdrop-blur-sm"></div>
                </div>

                {/* Contenu */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl text-[#333333] md:text-5xl font-bold mb-10 text-center drop-shadow-sm"
                  >
                    NOS OBJECTIFS
                  </motion.h2>

                  <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border border-[#E91E63]/30 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <button
                          onClick={() => toggle(index)}
                          className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#FFF8F9] transition-colors duration-200"
                        >
                          <span className="text-lg font-medium text-[#6B4E57]">
                            {faq.question}
                          </span>
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E91E63] text-white text-sm">
                            {openIndex === index ? "−" : "+"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-4 text-sm text-[#6B4E57]">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
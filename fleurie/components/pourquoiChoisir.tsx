import React from 'react';
                        import { motion } from 'framer-motion';

                        interface CardData {
                          title: string;
                          description: string;
                          highlight: string;
                        }

                        const FleurieSanteCards: React.FC = () => {
                          const cardsData: CardData[] = [
                            {
                              title: "Large sélection de qualité",
                              description: "Une large sélection variée de grande qualité répondant exclusivement aux besoins de nos populations.",
                              highlight: "Produits adaptés"
                            },
                            {
                              title: "Prix compétitifs",
                              description: "Des prix compétitifs grâce à des partenariats sous contrats de distribution directs avec les fabricants, facilitant une traçabilité fiable et respectant les bonnes pratiques de conservation et de livraison.",
                              highlight: "Traçabilité garantie"
                            },
                            {
                              title: "Équipe qualifiée",
                              description: "Une équipe de promotion qualifiée, disponible, réactive et très efficace sur le terrain.",
                              highlight: "Service réactif"
                            },
                            {
                              title: "Réseau étendu",
                              description: "Plus de 170 sites de ventes par pays dans tout notre réseau de distribution.",
                              highlight: "Couverture nationale"
                            },
                            {
                              title: "Service de livraison efficace",
                              description: "Un service de livraison réactif et fonctionnel sur tout le territoire.",
                              highlight: "Livraison rapide"
                            },
                            {
                              title: "Programme de fidélité",
                              description: "Un système de fidélisation de nos clients par notre application AyéFleurieSanté.",
                              highlight: "Application dédiée"
                            }
                          ];

                          const containerVariants = {
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.15 }
                            }
                          };

                          const cardVariants = {
                            hidden: { y: 20, opacity: 0 },
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4 }
                            },
                            hover: {
                              y: -15,
                              scale: 1.03,
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 8
                              }
                            }
                          };

                          return (
                            <section className="py-16 px-4 md:px-8 lg:px-16" style={{

                            }}>
                              <div className="max-w-7xl mx-auto relative z-10">
                                <motion.h2
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8 }}
                                  className="text-center text-4xl lg:text-5xl font-light mb-12 lg:mb-16 tracking-wide text-[#6B4E57]"
                                >
                                  Pourquoi choisir Fleurie Santé ?
                                </motion.h2>

                                <motion.div
                                  variants={containerVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                                >
                                  {cardsData.map((card, index) => (
                                    <motion.div
                                      key={index}
                                      variants={cardVariants}
                                      whileHover="hover"
                                      className="relative p-6 lg:p-8 rounded-3xl transition-all duration-300 overflow-hidden"
                                      style={{
                                        background: 'transparent',
                                        border: '2px solid rgba(255, 255, 255, 0.8)',
                                        boxShadow: ' 10px 25px rgba(233, 30, 99, 0.05)'
                                      }}
                                    >
                                      {/* Bordure gradient supérieure */}
                                      <div
                                        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                                        style={{
                                          background: 'linear-gradient(90deg, #f48f8f, #FF6F61)'
                                        }}
                                      />

                                      {/* Titre */}
                                      <h3 className="text-2xl font-semibold mb-4 leading-tight text-[#6B4E57]">
                                        {card.title}
                                      </h3>

                                      {/* Description */}
                                      <p className="text-lg leading-relaxed mb-6 text-[#6B4E57]/90">
                                        {card.description}
                                      </p>

                                      {/* Badge de mise en valeur */}
                                      <span
                                        className="inline-block px-4 py-2 rounded-full text-base font-medium"
                                        style={{
                                          background: ' #fc7575',
                                          color: '#efdbdb'
                                        }}
                                      >
                                        {card.highlight}
                                      </span>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </div>

                              <style jsx>{`
                                @keyframes float {
                                  0%, 100% {
                                    transform: translateY(0px) rotate(0deg);
                                  }
                                  50% {
                                    transform: translateY(-20px) rotate(5deg);
                                  }
                                }
                              `}</style>
                            </section>
                          );
                        };

                        export default FleurieSanteCards;
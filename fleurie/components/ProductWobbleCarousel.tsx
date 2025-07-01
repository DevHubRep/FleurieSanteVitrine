'use client';

          import React, { useState } from 'react';
          import Image from 'next/image';
          import { motion, AnimatePresence } from 'framer-motion';
          import { WobbleCard } from '@/components/ui/wobble-card';

          // Type pour les produits
          type Product = {
            image: string;
            alt: string;
            title: string;
            description: string;
          };

          type ProductWobbleCarouselProps = {
            products: Product[];
          };

          const ProductWobbleCarousel: React.FC<ProductWobbleCarouselProps> = ({ products }) => {
            const [currentIndex, setCurrentIndex] = useState(0);
            const [direction, setDirection] = useState(1); // 1 pour avant, -1 pour arrière

            const handleNext = () => {
              setDirection(1);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
            };

            const handlePrev = () => {
              setDirection(-1);
              setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
            };

            const variants = {
              enter: (direction: number) => ({
                x: direction > 0 ? 100 : -100,
                opacity: 0
              }),
              center: {
                x: 0,
                opacity: 1
              },
              exit: (direction: number) => ({
                x: direction > 0 ? -100 : 100,
                opacity: 0
              })
            };

            return (
              <div className="w-full relative">
                {/* Indicateurs de pagination */}
                <div className="flex justify-center gap-2 mb-4">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? 'bg-[#E91E63] scale-125' : 'bg-[#FFA8A8]'
                      }`}
                      aria-label={`Aller au produit ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Carrousel */}
                <div className="relative overflow-hidden rounded-lg">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <WobbleCard containerClassName="w-full bg-gradient-to-br from-[#FFF8F9] to-[#FFA8A8]/20 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={products[currentIndex].image}
                              alt={products[currentIndex].alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="w-full md:w-1/2 space-y-4">
                            <h3 className="text-2xl font-bold text-[#6B4E57]">
                              {products[currentIndex].title}
                            </h3>
                            <p className="text-[#6B4E57] text-lg">
                              {products[currentIndex].description}
                            </p>
                          </div>
                        </div>
                      </WobbleCard>
                    </motion.div>
                  </AnimatePresence>

                  {/* Boutons de navigation */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#E91E63] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-all"
                    aria-label="Produit précédent"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#E91E63] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-all"
                    aria-label="Produit suivant"
                  >
                    &#10095;
                  </button>
                </div>
              </div>
            );
          };

          export default ProductWobbleCarousel;
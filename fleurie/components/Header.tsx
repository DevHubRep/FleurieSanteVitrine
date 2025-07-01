'use client';
            import { motion } from 'framer-motion';
            import Link from 'next/link';
            import React, { useState } from 'react';
import Image from "next/image";

            export default function Header() {
              const [isHovered, setIsHovered] = useState<string | null>(null);

              return (
                <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FFF8F9] shadow-md backdrop-blur-sm bg-opacity-90">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-[#E91E63]"
                  >
                      <Image
                          src="/img/Logo.png"
                          alt="Description de l'image"
                          width={100}
                          height={100}
                          className="relative z-10 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg scale-100 border-2 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
                      />
                  </motion.div>

                  <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {['ACCUEIL', 'PRODUIT', 'A PROPOS', 'FAQ'].map((item) => (
                      <motion.div
                        key={item}
                        onHoverStart={() => setIsHovered(item)}
                        onHoverEnd={() => setIsHovered(null)}
                        className="relative"
                      >
                        <Link href="#" className="text-[#6B4E57] hover:text-[#E91E63] transition-colors duration-300">
                          {item}
                        </Link>
                        {isHovered === item && (
                          <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#E91E63]"
                            layoutId="underline"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </nav>

                  <div className="flex items-center gap-5">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Search"
                      className="text-[#6B4E57] hover:text-[#E91E63] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
                      </svg>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Cart"
                      className="text-[#6B4E57] hover:text-[#E91E63] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                        <circle cx="7" cy="21" r="1" />
                        <circle cx="17" cy="21" r="1" />
                      </svg>
                    </motion.button>
                  </div>
                </header>
              );
            }
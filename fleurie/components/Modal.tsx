'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white p-6 rounded-lg max-w-lg w-full shadow-lg mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-4 text-gray-700">{content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

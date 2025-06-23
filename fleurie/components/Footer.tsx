"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaLinkedin, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";
import SocicalMedia from "./SocialMedia";
import Contact from "./Contact";
import CompanyInfo from "./CompanyInfo";

const spacing = "px-4 py-10";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-white to-fuchsia-300 text-sm text-foreground py-10 px-6 rounded-t-2xl shadow-inner mt-16"
    >
      <h3 className="text-black font-bold mb-6 text-center text-3xl tracking-wide drop-shadow">
      FLEURIE SANTÉ SARL
    </h3>
      <CompanyInfo/>

      <div className={spacing}></div> {/* Espace uniforme entre les sections */}

      <h3 className=" text-black font-bold mb-4 text-center text-3xl  tracking-wide drop-shadow">Présence en ligne</h3>
      < SocicalMedia/>

      <div className={spacing}></div> {/* Espace uniforme entre les sections */}

      <h3 className=" text-black font-bold mb-4 text-center text-3xl  tracking-wide drop-shadow">Nous Contacter</h3>
      <Contact/>

      <div className="text-center mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fleurie Santé. Tous droits réservés.
      </div>
    </motion.footer>
  );
}

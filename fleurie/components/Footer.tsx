"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaLinkedin, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-muted text-sm text-foreground py-10 px-6 rounded-t-2xl shadow-inner mt-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Infos légales */}
        <div>
          <h3 className="text-xl font-bold mb-4">FLEURIE SANTÉ SARL</h3>
          <ul className="space-y-1">
            <li><strong>Capital :</strong> 10 000 000 CFA</li>
            <li><strong>Siège :</strong> LOT 193 PARCELLE I ET J COCOTOMEY, Bénin</li>
            <li><strong>RCCM :</strong> RB/COT/23B35661 DU 27/06/2023</li>
            <li><strong>IFU :</strong> 3202318673752</li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-accent" /> +2290197621717
            </li>
            <li className="flex items-center gap-2">
              <PiWhatsappLogoFill className="text-green-600" /> +33652487770 / +2290197621717
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-accent" /> fleuriesante@yahoo.com
            </li>
          </ul>
        </div>

        {/* Réseaux et web */}
        <div>
          <h3 className="text-xl font-bold mb-4">Présence en ligne</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaGlobe className="text-accent" />
              <a href="http://www.fleuriesante.com" target="_blank" className="hover:underline">
                www.fleuriesante.com
              </a>
            </li>
            <li><strong>Application :</strong> AyéFleurieSanté</li>
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-blue-600" /> Fleurie Santé
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok className="text-black" /> Fleurie Santé
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-700" /> INTER PROMO GROUP SA
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fleurie Santé. Tous droits réservés.
      </div>
    </motion.footer>
  );
}

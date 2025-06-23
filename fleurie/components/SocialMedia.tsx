import React from 'react';
import { Facebook, MessageCircle, Music, Instagram, Linkedin } from 'lucide-react';
import {FaInstagram, FaTiktok} from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';


const SocialIcons = () => {
    const socialIcons = [
        {
            name: 'Facebook',
            icon: FaFacebookF,
            iconColor: 'text-blue-600', // Couleur d'icône
            hoverColor: 'group-hover:bg-blue-600',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-blue-600'
        },
        {
            name: 'TikTok',
            icon: FaTiktok,
            hoverColor: 'group-hover:bg-black',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-black'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            iconColor: 'text-pink-500', // Couleur d'icône
            hoverColor: 'group-hover:bg-pink-500',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-pink-500'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            iconColor: 'text-blue-600', // Couleur d'icône par défaut
            hoverColor: 'group-hover:bg-blue-700',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-blue-700'
        }
    ];

    return (
        <div className=" w-full flex items-center justify-center  font-sans">
            <ul className="flex list-none">
                {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <li
                            key={index}
                            className={`group relative bg-white rounded-2xl p-4 m-2 w-12 h-12 flex justify-center items-center shadow-lg cursor-pointer transition-all duration-200 ease-out hover:scale-110 ${social.hoverColor} ${social.textColor}`}
                        >
                            {/* Tooltip */}


                            {/* Icon */}
                            <span className={`text-lg ${social.iconColor || ''}`}>
                <IconComponent className="w-5 h-5" />
              </span>
                        </li>

                    );
                })}
            </ul>
        </div>
    );
};

export default SocialIcons;
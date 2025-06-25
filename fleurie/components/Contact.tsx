import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import{FaMailBulk} from "react-icons/fa";


const SocialIcons = () => {
    const socialIcons = [
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            iconColor: 'text-green-600', // Couleur d'icône
            hoverColor: 'group-hover:bg-blue-600',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-blue-600',
            details: <>Contactez-nous sur WhatsApp pour une assistance rapide : <a href="https://wa.me/33652487770" className="underline text-green-600 hover:text-green-800" target="_blank" rel="noopener noreferrer">+33652487770</a> / <a href="https://wa.me/2290197621717" className="underline text-green-600 hover:text-green-800" target="_blank" rel="noopener noreferrer">+2290197621717</a></>
          },
        {
            name: 'Mail',
            icon: FaMailBulk,
            iconColor: 'text-black-500', // Couleur d'icône
            hoverColor: 'group-hover:bg-green-500',
            textColor: 'group-hover:text-white',
            tooltipColor: 'group-hover:bg-green-500',
            details:<>Contactez-nous par email pour toute demande : <a href="mailto:fleuriesante@yahoo.com" className="underline text-blue-500 hover:text-blue-700">fleuriesante@yahoo.com</a></>
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
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {social.details}
                            </span>
                        </li>

                    );
                })}
            </ul>
        </div>
    );
};

export default SocialIcons;
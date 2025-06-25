import { motion } from "framer-motion";
import {Building2, FileText, MapPin} from "lucide-react";
import { Hash } from "lucide-react";
import { useState } from "react";

const  CompanyInfo = () => {
    const [showFullAddress, setShowFullAddress] = useState(false);
    const companyDetails = [
        {
            icon: Building2,
            label: "Capital",
            value: "10 000 000 CFA",
            color: "text-blue-600"
        },
        {
            icon: MapPin,
            label: "Siège",
            value: <>
                LOT 193 PARCELLE I ET{" "}
                <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setShowFullAddress(!showFullAddress)}
                >
            {showFullAddress ? "":"voir plus"}
        </span>
                {showFullAddress && (
                    <span onClick={() => setShowFullAddress(!showFullAddress)}>, J COCOTOMEY, Bénin
                    </span>
                )}
            </>,
            color: "text-green-600"
        },
        {
            icon: FileText,
            label: "RCCM",
            value: "RB/COT/23B35661 DU 27/06/2023",
            color: "text-purple-600"
        },
        {
            icon: Hash,
            label: "IFU",
            value: "3202318673752",
            color: "text-orange-600"
        }
    ];

    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center gap-4">
                {companyDetails.map((detail, index) => {
                    const IconComponent = detail.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-4 shadow-lg cursor-pointer transition-all duration-200 ease-out  min-w-[280px] max-w-[320px]"
                        >
                            <div className="flex items-start gap-3">
                                <div className={`flex-shrink-0 p-2 rounded-xl bg-gray-50  transition-colors duration-200`}>
                                    <IconComponent className={`w-5 h-5 ${detail.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-800 text-sm mb-1">
                                        {detail.label}
                                    </p>
                                    <p className="text-gray-600 text-xs leading-relaxed break-words">
                                        {detail.value}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
export default CompanyInfo;
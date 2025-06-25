'use client';

import { motion } from 'framer-motion';
import BeautyTitle from './titre';
import BeautyParagraph from './paragraphe';

interface BeautySectionProps {
    title: string;
    paragraphs: string[];
    className?: string;
}

const fadeInContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeInItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function BeautySection({ title, paragraphs, className = '' }: BeautySectionProps) {
    return (
        <motion.section
            className={`bg-white rounded-[25px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-10 w-[90%] max-w-7xl mx-auto mt-10 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInContainer}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(219, 39, 119, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="text-center">
                <motion.div variants={fadeInItem}>
                    <BeautyTitle center>{title}</BeautyTitle>
                </motion.div>
                {paragraphs.map((text, index) => (
                    <motion.div key={index} variants={fadeInItem}>
                        <BeautyParagraph>{text}</BeautyParagraph>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

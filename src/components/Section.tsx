import type { ReactNode } from 'react'
import { motion } from "framer-motion";
import { RainbowText } from './RainbowText';

const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

export const Section = ({ id, title, children, intro }: { id: string, title: string, children: ReactNode, intro: string }) => {
    return (
        <section id={id} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="space-y-6"
            >
                <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        <RainbowText>{title}</RainbowText>
                    </h2>
                    {intro && <p className="text-sm text-muted-foreground max-w-2xl">{intro}</p>}
                </div>
                {children}
            </motion.div>
        </section>
    );
}
import type { ReactNode } from 'react'
import { motion } from "framer-motion";

export const TiltCard = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            whileHover={{ rotateX: -2, rotateY: 4, translateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="[transform-style:preserve-3d]"
        >
            <div className="relative rounded-2xl border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
                {children}
            </div>
        </motion.div>
    );
}
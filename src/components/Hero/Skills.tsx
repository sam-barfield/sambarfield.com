import { motion } from "framer-motion";
import { TiltCard } from "../TiltCard";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { TechStack } from "../TechStack";

export const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="md:self-end w-full">
            <TiltCard>
                <Card className="shadow-lg border-0 gap-1">
                    <CardHeader className="gap-0">
                        <CardTitle className="text-xl">Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TechStack />
                    </CardContent>
                </Card>
            </TiltCard>
        </motion.div>
    )
}
import { motion } from "framer-motion";
import { Calendar, Zap, ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
import { RainbowText } from "../RainbowText";
import { Button } from "../ui/button";

import profile from "../../profile.json";

export const Intro = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="inline-flex items-center gap-2 text-xs rounded-full border px-3 py-1 mb-2 bg-background/70">
                <Calendar className="h-3 w-3" /> 2 years experience
                <span className="mx-1"> • </span>
                <span className="inline-flex items-center gap-1"><Zap className="h-3 w-3"/>
                    Full‑stack
                </span>
            </div>

            <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-tight ">
                    <RainbowText>
                        Sam Barfield
                    </RainbowText>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 leading-tight">
                    Software Developer
                </h2>
            </div>
            

            <p className="text-muted-foreground max-w-3/4 mb-8">
                Full‑stack engineer with 2 years of professional experience in an Agile environment
                building & maintaining Java + Spring backends, and React frontends.
            </p>

            <div className="flex flex-wrap gap-2">
                <Button asChild>
                    <a href="#projects">
                        My Projects <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <a href={`mailto:${profile.email}`}>
                        <Mail className="h-4 w-4 mr-2" /> Email
                    </a>
                </Button>
                <Button asChild variant="ghost">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                    </a>
                </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {profile.location}
            </div>
        </motion.div>
    )
}
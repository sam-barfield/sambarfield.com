import { Github, Linkedin, Mail } from "lucide-react"
import profile from "../../profile.json"

export const Footer = () => {
    return (
        <footer className="border-t bg-background/60 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span>© {new Date().getFullYear()} {profile.name}</span>
                    <span>
                        • This website's <a className="underline" href="https://github.com/sam-barfield/sambarfield.com">code</a>
                        </span>
                </div>
                <div className="flex items-center gap-3">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4"/></a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4"/></a>
                    <a href={`mailto:${profile.email}`} className="hover:text-foreground"><Mail className="h-4 w-4"/></a>
                </div>
            </div>
        </footer>
    )
}
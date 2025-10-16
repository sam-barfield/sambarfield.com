import { Mail, Linkedin, Github } from "lucide-react"
import { Section } from "../Section"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

import profile from "../../profile.json"
import { Specialties } from "../Specialties"

export const Contact = () => {
    return (
        <Section 
            id="contact" 
            title="Get in touch" 
            intro="Don't hesitate to get in touch."
        >
            <Card className="bg-background/70 backdrop-blur">
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="space-y-2">
                            <div className="text-lg font-medium">Hi.</div>
                            <p className="text-sm text-muted-foreground max-w-prose">
                                I’m available for full‑time roles and select freelance projects.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <Button asChild>
                                    <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4 mr-2"/>Email</a>
                                </Button>
                                <Button asChild variant="outline">
                                    <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a>
                                </Button>
                                <Button asChild variant="ghost">
                                    <a href={profile.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
                                </Button>
                            </div>
                        </div>
                        <Specialties />
                    </div>
                </CardContent>
            </Card>
        </Section>
    )
}
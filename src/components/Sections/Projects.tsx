import { motion } from "framer-motion"
import { Star, Github, Globe } from "lucide-react"
import { TiltCard } from "../TiltCard"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge";
import { Section } from "../Section";
import { Pill } from "../Pill";

const projects = [
  {
    name: "RAF Snaith Museum",
    tagline: "Wordpress",
    description:
      "Continous maintenance on the Museum's Wordpress website, implementing security features and a shop. Hosted on Linux with Oracle Cloud behind Cloudflare.",
    highlights: [
      "Maintain site uptime and speed",
      "SEO and Analytics",
      "Linux System Administration",
    ],
    tech: ["Wordpress", "Elementor", "10K Monthly Visitors"],
    live: "https://rafsnaithmuseum.co.uk/",
  },
  {
    name: "HomeUI",
    tagline: "IoT",
    description:
      "Actively building a smart home system from scratch, with ESP01S WiFi modules and DHT11 sensors at the core, a Mosquitto MQTT Broker and a Cross-Platform app for management with Tauri. With logs and metrics beamed into an LGTM stack.",
    highlights: [
      "Cross-Platform app with Tauri in Rust & React",
      "Logs, Metrics & Traces + Grafana dashboards",
      "Low level Embedded Systems",
    ],
    tech: ["C++", "MQTT", "Tauri", "Rust", "Loki", "Grafana", "Tempo", "Prometheus", "OpenTelemtry"],
    repo: "https://github.com/sam-barfield/home-ui",
    repo2: "https://github.com/sam-barfield/ESP01S-DHT11",
    live: "",
  },
  {
    name: "Zenlab",
    tagline: "Java + Spring",
    description:
      "Actively building a self-hosted developer platform for managing dev environments. With user & docker management and a web IDE.",
    highlights: [
      "Java and Spring backend",
      "Web based environment management",
      "Vite + React + Typescript frontend",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Java", "Spring", "Redis", "Postgres", "Docker"],
    repo: "https://github.com/sam-barfield/zenlab",
    live: "",
  },
];

const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

export const Projects = () => {
    return (
        <Section 
          id="projects" 
          title="Projects" 
          intro="A few things I've been working on."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, idx) => (
                  <motion.div key={idx} variants={fadeIn}>
                      <TiltCard>
                          <div className="group p-4 rounded-2xl">
                              <div className="flex items-start justify-between gap-4">
                                  <h3 className="text-lg font-semibold">{p.name}</h3>
                                  <Pill>
                                      <Star className="h-3 w-3" /> {p.tagline}
                                  </Pill>
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                              <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                                  {p.highlights.map((h, i) => (
                                      <li key={i}>{h}</li>
                                  ))}
                              </ul>
                              <div className="mt-3 flex flex-wrap gap-2">
                                  {p.tech.map((t, i) => (
                                      <Badge key={i} variant="outline">{t}</Badge>
                                  ))}
                              </div>
                              <div className="mt-4 flex gap-2">
                              {p.repo && (
                                  <Button asChild size="sm" variant="outline">
                                  <a href={p.repo} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>Repo</a>
                                  </Button>
                              )}
                              {p.repo2 && (
                                  <Button asChild size="sm" variant="outline">
                                  <a href={p.repo2} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>Other Repo</a>
                                  </Button>
                              )}
                              {p.live && (
                                  <Button asChild size="sm">
                                  <a href={p.live} target="_blank" rel="noreferrer"><Globe className="h-4 w-4 mr-2"/>Live</a>
                                  </Button>
                              )}
                              </div>
                          </div>
                      </TiltCard>
                  </motion.div>
              ))}
          </div>
        </Section>
    )
}
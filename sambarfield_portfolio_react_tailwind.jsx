import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink, Calendar, Star, ArrowRight, Terminal, Code2, Database, Cloud, Boxes, Sparkles, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ---- Editable content ----
const profile = {
  name: "Sam Barfield",
  title: "Software Developer",
  blurb:
    "Full‑stack engineer with 2 years of professional experience building resilient backends and crisp UIs. I love turning complex data and systems into simple, reliable products.",
  location: "London, UK",
  email: "hello@sambarfield.com",
  links: {
    github: "https://github.com/sambarfield",
    linkedin: "https://www.linkedin.com/in/sambarfield/",
    resume: "/Sam-Barfield-CV.pdf",
    website: "https://sambarfield.com",
  },
};

const stack = [
  { label: "Java", icon: <Code2 className="h-4 w-4" /> },
  { label: "Spring (Boot, JPA, Hibernate)", icon: <Boxes className="h-4 w-4" /> },
  { label: "React", icon: <Code2 className="h-4 w-4" /> },
  { label: "TypeScript", icon: <Code2 className="h-4 w-4" /> },
  { label: "Node.js", icon: <Terminal className="h-4 w-4" /> },
  { label: "Tailwind CSS", icon: <Code2 className="h-4 w-4" /> },
  { label: "Python", icon: <Code2 className="h-4 w-4" /> },
  { label: "Lua", icon: <Code2 className="h-4 w-4" /> },
  { label: "AWS", icon: <Cloud className="h-4 w-4" /> },
  { label: "Postgres", icon: <Database className="h-4 w-4" /> },
  { label: "MongoDB", icon: <Database className="h-4 w-4" /> },
];

const projects = [
  {
    name: "Realtime Task Hub",
    tagline: "Collaborative tasks with optimistic updates and activity feeds",
    description:
      "A full‑stack app with Spring Boot + Postgres powering a REST API and WebSocket events. React + TS on the frontend with TanStack Query and Zustand.",
    highlights: [
      "Event‑sourced domain model with outbox pattern",
      "JWT auth + role‑based permissions",
      "CI/CD to AWS ECS Fargate, Terraform IaC",
    ],
    tech: ["Java", "Spring Boot", "Postgres", "React", "TypeScript", "AWS"],
    repo: "https://github.com/your/repo1",
    live: "https://taskhub.example.com",
  },
  {
    name: "Data Pipelines Kit",
    tagline: "Composable ETL with back‑pressure and retries",
    description:
      "Built a small framework on top of Spring Batch that orchestrates S3 → Postgres ingestion with metrics, idempotency and dead‑letter queues.",
    highlights: [
      "Exactly‑once semantics with logical replication",
      "OpenTelemetry traces + Grafana dashboards",
      "Blue/green deploys and canary releases",
    ],
    tech: ["Java", "Spring Batch", "AWS S3", "Postgres", "Grafana"],
    repo: "https://github.com/your/repo2",
    live: "",
  },
  {
    name: "UI Component Library",
    tagline: "Accessible React primitives with Tailwind variants",
    description:
      "A lightweight component set (buttons, inputs, tables, charts) with headless patterns and comprehensive Storybook docs.",
    highlights: [
      "Tree‑shakable, themable via CSS variables",
      "Playwright visual regression tests",
      "SemVer releases via Changesets",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Storybook", "Playwright"],
    repo: "https://github.com/your/repo3",
    live: "",
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "Acme Systems",
    period: "Aug 2023 – Present",
    bullets: [
      "Led migration from monolith to modular Spring services; reduced mean deploy time by 40%",
      "Shipped React + TS dashboards used daily by ops (>150 users)",
      "Owned incident response playbooks; improved MTTR from 90 → 25 minutes",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Beta Labs",
    period: "Sep 2022 – Jul 2023",
    bullets: [
      "Implemented GraphQL gateway over microservices",
      "Wrote IaC modules for AWS networking (VPC, ALB, ECS)",
    ],
  },
];

const oss = [
  {
    name: "spring-cursor-pagination",
    desc: "Cursor‑based pagination utilities for Spring Data JPA.",
    url: "https://github.com/your/spring-cursor-pagination",
    stars: 128,
  },
  {
    name: "react-form-hooks",
    desc: "Headless form helpers with Zod validation.",
    url: "https://github.com/your/react-form-hooks",
    stars: 82,
  },
];

const writing = [
  {
    title: "Taming N+1 with JPA fetch strategies",
    date: "2025-02-03",
    url: "https://blog.example.com/jpa-fetch",
  },
  {
    title: "React Query patterns for realtime UIs",
    date: "2024-10-18",
    url: "https://blog.example.com/react-query-realtime",
  },
];

// ---- Unique visual flourishes ----
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_1px_1px,theme(colors.muted.DEFAULT)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      {/* Gradient blobs */}
      <div className="absolute -top-32 -right-32 h-[36rem] w-[36rem] blur-3xl opacity-30 rounded-full bg-[conic-gradient(at_top_left,theme(colors.blue.500),theme(colors.violet.500),theme(colors.cyan.400))]" />
      <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] blur-3xl opacity-25 rounded-full bg-[conic-gradient(at_bottom_right,theme(colors.emerald.500),theme(colors.teal.400),theme(colors.sky.400))]" />
      {/* Spotlight following cursor (subtle) */}
      <CursorSpotlight />
    </div>
  );
}

function CursorSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const bg = useMotionTemplate`radial-gradient(250px 250px at ${x}px ${y}px, rgba(99,102,241,0.25), transparent 60%)`;

  function onMove(e) {
    x.set(e.clientX);
    y.set(e.clientY);
  }
  return (
    <motion.div onMouseMove={onMove} style={{ backgroundImage: bg }} className="absolute inset-0" />
  );
}

function RainbowText({ children }) {
  return (
    <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,theme(colors.sky.400),theme(colors.violet.500),theme(colors.fuchsia.500))]">
      {children}
    </span>
  );
}

function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: 4, translateY: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="[transform-style:preserve-3d]"
    >
      <div className="relative rounded-2xl border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        {/* Glow border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#000,#000)_content-box,_linear-gradient(#000,#000)] [mask-composite:exclude] p-[1px] bg-[linear-gradient(90deg,theme(colors.violet.500),theme(colors.sky.400),theme(colors.emerald.400))] opacity-30" />
        {children}
      </div>
    </motion.div>
  );
}

// ---- Motion helpers ----
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function Section({ id, title, children, intro }) {
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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs bg-muted/40">
      {children}
    </span>
  );
}

// ---- Page ----
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundFX />
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight inline-flex items-center gap-2">
            <span className="relative inline-grid place-items-center h-6 w-6 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-[conic-gradient(from_140deg,theme(colors.sky.400),theme(colors.violet.600),theme(colors.fuchsia.500),theme(colors.sky.400))] animate-[spin_6s_linear_infinite] opacity-60" />
              <span className="relative text-[10px] font-bold">SB</span>
            </span>
            {profile.name}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#writing" className="hover:underline">Writing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={profile.links.resume} target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4 mr-2" /> CV
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Accent ring */}
        <div className="absolute -inset-x-6 -top-10 h-24 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.violet.500/15),transparent)]" />
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="inline-flex items-center gap-2 text-xs rounded-full border px-3 py-1 mb-4 bg-background/70">
              <Calendar className="h-3 w-3" /> 2 years experience
              <span className="mx-1">•</span>
              <span className="inline-flex items-center gap-1"><Zap className="h-3 w-3"/> Full‑stack</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Building <RainbowText>reliable systems</RainbowText> & elegant UIs
            </h1>
            <p className="text-muted-foreground max-w-prose mb-6">{profile.blurb}</p>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href="#projects">See projects <ArrowRight className="h-4 w-4 ml-2" /></a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4 mr-2" /> Email me</a>
              </Button>
              <Button asChild variant="ghost">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" /> LinkedIn</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {profile.location}
            </div>
          </motion.div>

          {/* Hero code card */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="md:justify-self-end w-full">
            <TiltCard>
              <Card className="border-0 shadow-xl bg-gradient-to-b from-background/60 to-background/80">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
                    <Layers className="h-4 w-4"/> sample/SpringController.java
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs leading-relaxed overflow-x-auto p-4 rounded-xl bg-muted/40">
{`@RestController
@RequiredArgsConstructor
class TasksController {
  private final TaskService service;

  @GetMapping("/api/tasks")
  List<TaskDto> list() { return service.findAll(); }

  @PostMapping("/api/tasks")
  TaskDto create(@RequestBody CreateTask cmd) {
    return service.create(cmd).toDto(); // idempotent, audited
  }
}`}
                  </pre>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stack.slice(0,6).map((s, i) => (
                      <Badge key={i} variant="secondary" className="flex items-center gap-1">{s.icon}{s.label}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Featured projects" intro="A few things I’ve built recently. Repos and write‑ups linked where available.">
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
                    {p.live && (
                      <Button asChild size="sm">
                        <a href={p.live} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2"/>Live</a>
                      </Button>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience (timeline) */}
      <Section id="experience" title="Experience" intro="What I’ve been up to recently.">
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 to-sky-400/60" />
          <div className="space-y-6">
            {experience.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 shadow" />
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 border rounded-2xl p-4 bg-background/60 backdrop-blur">
                  <div>
                    <div className="text-sm text-muted-foreground">{e.period}</div>
                    <div className="font-medium">{e.company}</div>
                    <div className="text-sm">{e.role}</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Writing / Talks */}
      <Section id="writing" title="Writing & Talks" intro="Occasional notes on engineering, performance, and developer experience.">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="talks">Talks</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-4">
            <div className="space-y-3">
              {writing.map((w, i) => (
                <a key={i} href={w.url} target="_blank" rel="noreferrer" className="block border rounded-2xl p-4 hover:bg-muted/40">
                  <div className="text-sm text-muted-foreground">{w.date}</div>
                  <div className="font-medium">{w.title}</div>
                </a>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="talks" className="mt-4">
            <div className="text-sm text-muted-foreground">Add your conference talks or meetups here.</div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Open Source */}
      <Section id="open-source" title="Open source" intro="Things I maintain or contribute to.">
        <div className="grid md:grid-cols-2 gap-4">
          {oss.map((o, i) => (
            <TiltCard key={i}>
              <div className="flex items-center justify-between rounded-2xl p-4">
                <div>
                  <a href={o.url} target="_blank" rel="noreferrer" className="font-medium hover:underline">{o.name}</a>
                  <div className="text-sm text-muted-foreground">{o.desc}</div>
                </div>
                <div className="text-xs text-muted-foreground inline-flex items-center gap-1"><Star className="h-3 w-3" /> {o.stars}</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in touch" intro="Want to collaborate, hire, or just geek out about infra and UI? I’m all ears.">
        <Card className="bg-background/70 backdrop-blur">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-2">
                <div className="text-lg font-medium">Let’s build something.</div>
                <p className="text-sm text-muted-foreground max-w-prose">
                  I’m available for full‑time roles and select freelance projects. Email me and I’ll reply quickly.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button asChild>
                    <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4 mr-2"/>Email {profile.name.split(" ")[0]}</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a>
                  </Button>
                  <Button asChild variant="ghost">
                    <a href={profile.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border rounded-2xl p-4 bg-muted/20">
                  <div className="text-xs text-muted-foreground">Specialties</div>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Spring Boot APIs</li>
                    <li>React + TS frontends</li>
                    <li>Data‑intensive systems</li>
                    <li>CI/CD on AWS</li>
                  </ul>
                </div>
                <div className="border rounded-2xl p-4 bg-muted/20">
                  <div className="text-xs text-muted-foreground">Currently learning</div>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Server‑driven UI</li>
                    <li>Rust for CLI tools</li>
                    <li>Advanced Postgres tuning</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-background/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>•</span>
            <a href={profile.links.website} className="hover:underline">sambarfield.com</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4"/></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4"/></a>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground"><Mail className="h-4 w-4"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---- Notes ----
// Visual uniqueness additions:
// - Gradient mesh background + spotlight that subtly follows the cursor (pure CSS + framer-motion).
// - Tilted 3D cards with a soft, animated conic-gradient border.
// - Timeline layout for Experience with gradient rail markers.
// - RainbowText utility for tasteful accent headings.
// - Hero code card showing your Spring style in a glance.
// Tailwind-only; no global CSS required. Consider adding a dark theme accent by tuning your Tailwind theme colors.

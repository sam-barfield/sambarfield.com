import { Code2, Boxes, Terminal, Cloud, Database, RefreshCcw, Container } from "lucide-react";
import { Badge } from "./ui/badge";

const stack = [
  { label: "Java", icon: <Code2 /> },
  { label: "Spring", icon: <Boxes /> },
  { label: "React", icon: <Code2 /> },
  { label: "TypeScript", icon: <Code2 /> },
  { label: "Node.js", icon: <Terminal /> },
  { label: "Tailwind CSS", icon: <Code2 /> },
  { label: "Python", icon: <Code2 /> },
  { label: "AWS", icon: <Cloud /> },
  { label: "Postgres", icon: <Database /> },
  { label: "MongoDB", icon: <Database /> },
  { label: "GitLab", icon: <RefreshCcw /> },
  { label: "TeamCity", icon: <RefreshCcw /> },
  { label: "Docker", icon: <Container /> }
];

export const TechStack = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {stack.map((s, i) => (
       <Badge key={i} variant="secondary" className="flex items-center gap-2 [&>svg]:!size-4 [&>svg]:shrink-0">
          {s.icon}
          {s.label}
        </Badge>
      ))}
    </div>
  )
}
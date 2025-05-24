import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint?: string;
  projectUrl?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "technology project"}
            className="transform group-hover:scale-105 transition-transform duration-500"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
        <CardDescription className="text-foreground/80 min-h-[60px] line-clamp-3">{project.description}</CardDescription>
        <div className="pt-2">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground border-accent/50 hover:bg-accent/30 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 border-t">
        <div className="flex w-full justify-end space-x-3">
          {project.projectUrl && (
            <Button variant="outline" size="sm" asChild className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
              <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Project
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

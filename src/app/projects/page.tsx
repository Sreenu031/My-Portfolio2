import { PageTitle } from "@/components/page-title";
import { ProjectCard, type Project } from "@/components/project-card";

const projectsData: Project[] = [
  {
    title: "AI Powered E-commerce Platform",
    description: "A smart e-commerce solution leveraging machine learning for personalized recommendations and inventory management. Built with a modern tech stack for scalability and performance.",
    technologies: ["Next.js", "Python (Flask/Django)", "PostgreSQL", "Docker", "AWS", "TensorFlow"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ecommerce platform",
    projectUrl: "#", // Placeholder
    repoUrl: "#", // Placeholder
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, enabling users to uncover insights through dynamic charts and filters. Focused on user-friendly design and real-time data processing.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "GraphQL"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
    projectUrl: "#", // Placeholder
    repoUrl: "#", // Placeholder
  },
  {
    title: "Mobile Health Companion App",
    description: "A cross-platform mobile application designed to help users track their fitness goals, monitor health metrics, and receive personalized wellness tips. Includes gamification and social features.",
    technologies: ["React Native", "Firebase", "Node.js", "Express.js", "Apple HealthKit / Google Fit API"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile health",
    // repoUrl: "#", // Placeholder, projectUrl may be more relevant for apps
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <PageTitle title="My Projects" subtitle="A selection of projects that showcase my skills and passion for technology. Each project reflects my dedication to creating innovative and practical solutions." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

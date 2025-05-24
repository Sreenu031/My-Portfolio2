import { PageTitle } from "@/components/page-title";
import { SkillCard } from "@/components/skill-card";
import { Code, Database, LayoutPanelLeft, Brain, BarChart3, Cloud } from "lucide-react"; // Example icons

// Simple Github icon as lucide-react's Github is already used for social links.
// Or you can import it as `import { Github as GithubLucideIcon } from "lucide-react"` and use GithubLucideIcon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const skillsData = [
  { name: "JavaScript", icon: Code, level: "Expert" as const, description: "Modern JS (ES6+), Async/Await, DOM Manipulation" },
  { name: "TypeScript", icon: Code, level: "Advanced" as const, description: "Strong Typing, Interfaces, Generics" },
  { name: "React & Next.js", icon: LayoutPanelLeft, level: "Advanced" as const, description: "Component Architecture, Hooks, SSR, SSG" },
  { name: "Node.js & Express", icon: Code, level: "Intermediate" as const, description: "REST APIs, Middleware, Backend Logic" },
  { name: "Python", icon: Code, level: "Advanced" as const, description: "Data Science, ML, Web Scraping, Automation" },
  { name: "Machine Learning", icon: Brain, level: "Intermediate" as const, description: "Scikit-learn, TensorFlow, PyTorch Basics" },
  { name: "Data Science", icon: BarChart3, level: "Intermediate" as const, description: "Pandas, NumPy, Matplotlib, Seaborn" },
  { name: "SQL & NoSQL", icon: Database, level: "Intermediate" as const, description: "PostgreSQL, MongoDB, Database Design" },
  { name: "UI/UX Design", icon: LayoutPanelLeft, level: "Intermediate" as const, description: "Figma, Adobe XD, User-Centered Design" },
  { name: "HTML & CSS", icon: Code, level: "Expert" as const, description: "Semantic HTML, CSS Grid, Flexbox, Tailwind CSS" },
  { name: "Git & GitHub", icon: GithubIcon, level: "Expert" as const, description: "Version Control, Branching, Collaboration" }, // Using a custom GithubIcon for consistency or specific style
  { name: "Cloud Platforms (AWS/GCP Basics)", icon: Cloud, level: "Beginner" as const, description: "EC2, S3, Lambda, Cloud Functions basics" },
];


export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <PageTitle title="My Skills" subtitle="A curated list of my technical skills and proficiencies, ranging from programming languages and frameworks to tools and methodologies." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill) => (
          <SkillCard key={skill.name} skillName={skill.name} icon={skill.icon} level={skill.level} description={skill.description} />
        ))}
      </div>
    </div>
  );
}

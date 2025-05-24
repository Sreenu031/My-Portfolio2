import { PageTitle } from "@/components/page-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, CalendarDays } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  logoUrl?: string; // Optional
  logoHint?: string; // Optional
}

const educationData: EducationEntry[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Tech Excellence (UTE)",
    duration: "2023 - Present",
    description: "Specializing in Artificial Intelligence and Software Engineering. Actively involved in research projects focusing on natural language processing and computer vision.",
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "university logo"
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Institute of Foundational Learning (IFL)",
    duration: "2019 - 2023",
    description: "Graduated with honors, focusing on web development, database management, and algorithms. Led the university coding club and participated in several hackathons.",
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "institute logo"
  },
];

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <PageTitle title="Education" subtitle="My academic journey and qualifications that have shaped my expertise and passion for technology." />
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50 overflow-hidden">
            <CardHeader className="bg-muted/30 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Optional Logo
                {edu.logoUrl && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-primary/30">
                    <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={64} height={64} data-ai-hint={edu.logoHint} />
                  </div>
                )}
                */}
                <div className="flex-grow">
                  <CardTitle className="text-2xl font-semibold text-primary mb-1">{edu.degree}</CardTitle>
                  <p className="text-lg text-foreground/90">{edu.institution}</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0 whitespace-nowrap">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {edu.duration}
                </div>
              </div>
            </CardHeader>
            {edu.description && (
              <CardContent className="p-6">
                <CardDescription className="text-foreground/80 leading-relaxed">{edu.description}</CardDescription>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

// Placeholder for Image if you uncomment the logo section
// import Image from "next/image";

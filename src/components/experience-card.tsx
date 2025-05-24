import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image"; // If using logos

export interface Experience {
  title: string;
  company: string;
  location?: string; // Optional
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string; // Optional company logo
  logoHint?: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50 overflow-hidden">
      <CardHeader className="bg-muted/30 p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {experience.logoUrl && (
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 border-primary/20 bg-background flex items-center justify-center relative">
              <Image 
                src={experience.logoUrl} 
                alt={`${experience.company} logo`} 
                fill={experience.logoUrl.includes('placehold.co')} // Use fill for placeholders if they are meant to cover the div
                width={!experience.logoUrl.includes('placehold.co') ? 48 : undefined} // Conditional width/height
                height={!experience.logoUrl.includes('placehold.co') ? 48 : undefined}
                style={{ objectFit: "contain" }} 
                data-ai-hint={experience.logoHint} 
              />
            </div>
          )}
          {!experience.logoUrl && (
             <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          )}
          <div className="flex-grow">
            <CardTitle className="text-xl md:text-2xl font-semibold text-primary mb-1">{experience.title}</CardTitle>
            <p className="text-md md:text-lg text-foreground/90">{experience.company}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs md:text-sm text-muted-foreground mt-3 space-y-1 sm:space-y-0">
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
              {experience.duration}
            </div>
           {experience.location && (
            <div className="flex items-center">
              <MapPin className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
              {experience.location}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/80 leading-relaxed">
          {experience.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

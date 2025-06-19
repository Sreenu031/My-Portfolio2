import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  skillName: string;
  icon: LucideIcon;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: string;
}

export function SkillCard({
  skillName,
  icon: Icon,
  level,
  description,
}: SkillCardProps) {
  return (
    <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50 h-full flex flex-col items-center justify-center">
      <CardHeader className="p-0 mb-4">
        <div className="bg-primary/10 text-primary rounded-full p-4 inline-block group-hover:bg-primary/20 transition-colors">
          <Icon className="h-10 w-10 " />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <CardTitle className="text-xl font-semibold mb-1">
          {skillName}
        </CardTitle>
        {level && <p className="text-sm text-muted-foreground mb-2">{level}</p>}
        {description && (
          <p className="text-xs text-foreground/70">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

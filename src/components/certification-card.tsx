import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, CalendarDays } from "lucide-react";

export interface Certification {
  name: string;
  issuingOrganization: string;
  dateAchieved?: string; // Optional
  credentialId?: string; // Optional
  credentialUrl?: string;
  logoUrl?: string; // Optional for organization logo
  logoHint?: string;
}

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary rounded-md p-3 mt-1">
             <Award className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold leading-tight">{certification.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">{certification.issuingOrganization}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 pt-0">
        {certification.dateAchieved && (
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            Achieved: {certification.dateAchieved}
          </div>
        )}
        {certification.credentialId && (
          <p className="text-xs text-muted-foreground">Credential ID: {certification.credentialId}</p>
        )}
      </CardContent>
      {certification.credentialUrl && (
        <CardFooter className="pt-4 border-t bg-muted/30">
          <Button variant="outline" size="sm" asChild className="w-full rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
            <Link href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Credential
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

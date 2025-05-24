import { PageTitle } from "@/components/page-title";
import { CertificationCard, type Certification } from "@/components/certification-card";

const certificationsData: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuingOrganization: "Amazon Web Services (AWS)",
    dateAchieved: "March 2024",
    credentialId: "AWS-CSA-12345",
    credentialUrl: "#", // Placeholder
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "aws logo"
  },
  {
    name: "Google Cloud Certified - Professional Data Engineer",
    issuingOrganization: "Google Cloud",
    dateAchieved: "July 2023",
    credentialUrl: "#", // Placeholder
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "google cloud logo"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuingOrganization: "The Linux Foundation & Cloud Native Computing Foundation (CNCF)",
    credentialUrl: "#", // Placeholder
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "kubernetes logo"
  },
   {
    name: "Microsoft Certified: Azure Fundamentals",
    issuingOrganization: "Microsoft",
    dateAchieved: "January 2023",
    credentialId: "MS-AZ-67890",
    credentialUrl: "#", // Placeholder
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "microsoft azure logo"
  },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-10">
      <PageTitle title="Certifications" subtitle="Validating my skills and knowledge through industry-recognized certifications." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.name} certification={cert} />
        ))}
      </div>
    </div>
  );
}

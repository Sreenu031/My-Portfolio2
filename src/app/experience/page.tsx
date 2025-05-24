import { PageTitle } from "@/components/page-title";
import { ExperienceCard, type Experience } from "@/components/experience-card";

const experiencesData: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Innovatech Solutions Inc.",
    location: "San Francisco, CA (Remote)",
    duration: "Summer 2023 (May - Aug)",
    descriptionPoints: [
      "Developed and implemented new features for a flagship SaaS product using React, Node.js, and TypeScript, improving user engagement by 15%.",
      "Collaborated with a cross-functional team of 10 engineers and designers in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives.",
      "Authored unit and integration tests, achieving 90%+ code coverage for newly developed modules.",
      "Contributed to CI/CD pipeline improvements using Jenkins and Docker.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "company logo"
  },
  {
    title: "Machine Learning Research Assistant",
    company: "University of Tech Excellence - AI Lab",
    location: "University City, Utopia",
    duration: "Jan 2022 - May 2023",
    descriptionPoints: [
      "Assisted senior researchers in developing a novel algorithm for anomaly detection in financial transactions, utilizing Python, Scikit-learn, and TensorFlow.",
      "Preprocessed and analyzed large datasets (over 1TB) to extract meaningful features for model training.",
      "Co-authored a research paper published in the 'Journal of Intelligent Systems'.",
      "Presented research findings at a university-level symposium.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "university lab"
  },
  {
    title: "Lead Developer - Capstone Project",
    company: "Institute of Foundational Learning",
    location: "Techville, Utopia",
    duration: "Sep 2022 - Apr 2023",
    descriptionPoints: [
      "Led a team of 4 students to design and develop a campus event management platform.",
      "Architected the full-stack application using MERN stack (MongoDB, Express.js, React, Node.js).",
      "Managed project timelines, task delegation, and code reviews using Git and Trello.",
      "Successfully launched the platform, adopted by 500+ students for event discovery and registration.",
    ],
    // No logo for university project, icon will be used
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <PageTitle title="My Experience" subtitle="A timeline of my professional roles and significant academic projects where I've applied and honed my skills." />
      <div className="space-y-8">
        {experiencesData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}

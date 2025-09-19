"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription as UiCardDescription,
} from "@/components/ui/card";
import {
  Download,
  Send,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  LayoutPanelLeft,
  Brain,
  BarChart3,
  Cloud,
  CalendarDays,
  Github,
  BrainCircuitIcon,
} from "lucide-react";
import { RESUME_PATH } from "@/lib/constants";
import { PageTitle } from "@/components/page-title";
import { ProjectCard, type Project } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";
import {
  CertificationCard,
  type Certification,
} from "@/components/certification-card";
import { ExperienceCard, type Experience } from "@/components/experience-card";
import * as z from "zod";

interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  logoUrl?: string;
  logoHint?: string;
  percentage?: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const projectsData: Project[] = [
  {
    title: "AI-Driven Platform for Early Mental Health Screening and Professional Support Platform",
    description:
      "I developed a platform where orphanage organizations can register, add details of their children, and have them complete a mental health questionnaire. The system integrates a machine learning model to analyze the responses and assess the children’s mental health status. Based on the assessment, the platform recommends nearby psychologists, enabling timely support and intervention for those in need.",
    technologies: ["Flask","ML","HTML", "CSS", "PostgreSQL ","Python"],
    imageUrl: "/images/health.png",
    imageHint: "AI APP",
    repoUrl: "https://github.com/Sreenu031/Epics_project.git",
    projectUrl:"https://epics-project.onrender.com/"
  },
  {
    title: "DOGSAVY Web Platform",
    description:
      "I developed a full-stack web application that allows users to report stray dogs with health issues by submitting images, geolocation, and notes. The platform features role-based dashboards where NGOs can rescue the dogs, and users can track the status and progress of their reported cases in real time.",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "Rest API"],
    imageUrl: "/images/DogSavy.png",
    imageHint: "data dashboard",
    repoUrl: "https://github.com/Sreenu031/DogSavy.git",
    projectUrl:"https://dogsavy.vercel.app/"
  },
  {
    title: "Notes App – A Spring Boot Based Application",
    description:
      "A full-stack Notes Application built with Spring Boot that allows users to securely create, update, and delete their personal notes. The project showcases authentication, user management, and complete CRUD functionality, highlighting practical implementation of core backend and frontend integration.                                           ",
    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "HTML",
      "JavaScript",
      "Spring Security",
      "Spring Data JPA",
    ],
    imageUrl: "/images/Notes.png",
    imageHint: "mobile health",
    repoUrl: "https://github.com/Sreenu031/NotesAppUsingSprinBoot.git",
    projectUrl:"https://notes-f6gj.onrender.com/"
  },
  // {
  //   title: "Job Application Tracker",
  //   description:
  //     "A web application for tracking job applications, built with React, Node.js, PostgreSQL, and Express.js. Allows users to add, update, and delete job applications.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "PostgreSQL",
  //     "Express.js",
  //     "Tailwind CSS",
  //   ],
  //   imageUrl: "/images/job-tracker.png",
  //   imageHint: "mobile health",
  //   repoUrl: "https://github.com/nameishyam/job-tracker",
  //   projectUrl: "https://career-dock.vercel.app",
  // },
];

const skillsData = [
  {
    name: "Java",
    icon: Code,
    level: "Intermediate" as const,
    description: "OOP, Data Structures, Algorithms, Spring Boot",
  },
  {
    name: "Javascript",
    icon: Code,
    level: "Intermediate" as const,
    description: "Modern JS (ES6+), Async/Await, DOM Manipulation",
  },
  
  {
    name: "React",
    icon: LayoutPanelLeft,
    level: "Intermediate" as const,
    description: "Component Architecture, Hooks, SSR, SSG",
  },
  {
    name: "Node.js & Express",
    icon: Code,
    level: "Expert" as const,
    description: "REST APIs, Middleware, Backend Logic",
  },
  {
    name: "Python",
    icon: Code,
    level: "Advanced" as const,
    description: " ML, Flask",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    level: "Intermediate" as const,
    description: "Scikit-learn, TensorFlow",
  },
  {
    name: "Deep Learning",
    icon: BrainCircuitIcon,
    level: "Basic" as const,
    description: "Neural Networks, CNNs, RNNs",
  },
 
  {
    name: "SQL & NoSQL",
    icon: Database,
    level: "Intermediate" as const,
    description: "PostgreSQL, MongoDB, Database Design",
  },
  {
    name: "HTML & CSS",
    icon: Code,
    level: "Expert" as const,
    description: "Semantic HTML, CSS Grid, Flexbox, Tailwind CSS",
  },
  {
    name: "Git & GitHub",
    icon: Github,
    level: "Expert" as const,
    description: "Version Control, Branching, Collaboration",
  },
  {
    name: "Cloud Platforms (AWS/GCP Basics)",
    icon: Cloud,
    level: "Beginner" as const,
    description: "EC2, S3, Lambda, Cloud Functions basics",
  },
];

const educationData: EducationEntry[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)",
    duration: "2023 - Present",
    percentage: "8.59 CGPA (up to 6th Sem)",
    description:
      "Specializing in Artificial Intelligence and Data Science. Actively involved in research projects focusing on medical research . Participated in various hackathons and coding competitions, gaining valuable experience. Led the university's Microsoft Learn Student Ambassadors (MLSA) chapter's web development initiatives, organizing workshops and events to foster a community of tech enthusiasts.",
    logoUrl: "/images/vrsec.png",
    logoHint: "university logo",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Srikakulam",
    duration: "2020 - 2022",
    percentage: "89.7%",
    description:
      "During my diploma in Computer Engineering, I built a strong foundation in both theoretical concepts and practical skills. The program emphasized hands-on learning, which helped me gain more practical exposure than just classroom knowledge. I actively participated in state-level tech fests, completed six months of industry training, and worked on my final project, all of which deepened my understanding of computer systems and software development. At the end of my diploma, I appeared for the ECET exam and secured a rank of 162.",
    logoUrl: "/images/vrsec.png",
    logoHint: "university logo",
  },
];

const certificationsData: Certification[] = [
  
  {
    name: "Java Spring framework 6  with Spring Boot 3",
    issuingOrganization: "Udemy",
    dateAchieved: "March 2025",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-808f7a09-1a30-4bb5-81ab-63d2feed7cb2/",
  },
  {
    name: "Getting Started with Javascript",
    issuingOrganization: "Pupilfirst",
    dateAchieved: "Sep 2024",
    credentialUrl:
      "https://www.pupilfirst.school/c/240903-MV5Y0P",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    issuingOrganization: "Postman",
    dateAchieved: "Aug 2025",
    credentialUrl:
      "https://badgr.com/public/assertions/MF24dYGJTI2RT9hS2MFYFg",
  },
  {
    name: "Git and GitHub Basics",
    issuingOrganization: "edx",
    dateAchieved: "July 2024",
    credentialUrl:
      "https://courses.edx.org/certificates/b50e6e44a6f548e384f92e280f5c3795",
  },
  {
    name: "Data Base Foundations",
    issuingOrganization: "Oracle",
    dateAchieved: "Nov 2023",
    credentialUrl:
      "https://www.linkedin.com/in/srinu-medisetti/details/certifications/1729444470931/single-media-viewer/?profileId=ACoAAEY24tkB_nNAVlZv6pFUhI9fQwrksA2QTIs",
  },
  {
    name: "AWS Workshop",
    issuingOrganization: "APSSDC",
    dateAchieved: "Aug 2024",
    credentialUrl:
      "https://www.linkedin.com/in/srinu-medisetti/details/certifications/1635554718422/single-media-viewer/?profileId=ACoAAEY24tkB_nNAVlZv6pFUhI9fQwrksA2QTIs",
  },
];

const experiencesData: Experience[] = [
  {
    title: "MLSA Student Club Lead",
    company: "Microsoft Learn Student Ambassadors (MLSA)",
    location: "University of SAHE, Vijayawada, India",
    duration: "Dec 2024 - Aug 2025",
    descriptionPoints: [
      "Leading the MLSA chapter at University of SAHE, focusing on web development technologies.",
      "Organizing workshops, hackathons, and coding competitions to foster a community of tech enthusiasts.",
      "As part of web development, I conducted a session on Git and GitHub basics, where I served as the instructor and explained the concepts to over 100 students.",
      "Mentoring junior students in web development best practices and project management.",
    ],
    logoUrl: "/images/mlsa.jpeg",
  },
  {
    title: "Web Development Intern",
    company: "AIMERS",
    location: "Remote",
    duration: "Dec 2024 - March 2025",
    descriptionPoints: [
      "As part of my internship, I worked on a data structures visualization project, where I contributed to building stack and tree visualizations using React.js.",
      "Collaborated with the design team to implement user-friendly interfaces and improve user experience.",
      "Gained hands-on experience in version control using Git, React, and collaborative development practices.",
    ],
    logoUrl: "/images/aimers.jpeg",
  },
];

export default function SinglePagePortfolio() {
  const scrollMarginClass = "scroll-mt-20 pt-10 md:pt-16";

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {" "}
      <section id="about" className={scrollMarginClass}>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
              <Image
                src="/images/profile.jpg"
                alt="Srinu Medisetti"
                fill
                priority
                data-ai-hint="profile picture"
                className="object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                Srinu  <span className="text-primary">Medisetti</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Engineer | ML Enthusiast | Web Developer
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                Welcome to my portfolio! I am a passionate and versatile student
                skilled in a wide array of technologies and disciplines. My
                journey in tech is driven by a curiosity to solve complex
                problems and build impactful solutions. Here, you'll find a
                glimpse into my projects, skills, and experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/#contact">
                    <Send className="mr-2 h-5 w-5" /> Get in Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href={RESUME_PATH} target="_blank" download>
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm shadow-xl rounded-xl border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-primary">
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 leading-relaxed space-y-4 text-center md:text-left px-8 pb-8">
              <p>
               As a dedicated student, I am continuously exploring
                the frontiers of technology. My expertise spans full-stack web development, 
                where I enjoy creating seamless user experiences, to the intricate world of machine learning,
                 where I leverage data to derive insights and build intelligent systems.
                 I am also skilled in Java development, particularly with Spring Boot, which enables me 
                 to build robust and scalable applications.
              </p>
              <p>
                I thrive in collaborative environments and am always eager to
                learn new skills and take on challenging projects. My goal is to
                contribute to innovative solutions that make a difference. Feel
                free to explore my work and reach out if you'd like to connect!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="projects" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="My Projects"
            subtitle="A selection of projects that showcase my skills and passion for technology. Each project reflects my dedication to creating innovative and practical solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="My Skills"
            subtitle="A curated list of my technical skills and proficiencies, ranging from programming languages and frameworks to tools and methodologies."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.name}
                skillName={skill.name}
                icon={skill.icon}
                level={skill.level}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="education" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="Education"
            subtitle="My academic journey and qualifications that have shaped my expertise and passion for technology."
          />
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border hover:border-primary/50 overflow-hidden"
              >
                <CardHeader className="bg-muted/30 p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-grow">
                      <CardTitle className="text-2xl font-semibold text-primary mb-1">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg text-foreground/90">
                        {edu.institution}
                      </p>
                      <p className="text-lg text-foreground/90">
                        {edu.percentage}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0 whitespace-nowrap">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {edu.duration}
                    </div>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent className="p-6">
                    <UiCardDescription className="text-foreground/80 leading-relaxed">
                      {edu.description}
                    </UiCardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="certifications" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="Certifications"
            subtitle="Validating my skills and knowledge through industry-recognized certifications."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} />
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="My Experience"
            subtitle="A timeline of my professional roles and significant academic projects where I've applied and honed my skills."
          />
          <div className="space-y-8">
            {experiencesData.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="Get in Touch"
            subtitle="I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!"
          />{" "}
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <Card className="shadow-xl rounded-xl border-border hover:border-primary/50 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Contact Information
                  </CardTitle>
                  <UiCardDescription>
                    Here are a few ways to reach me directly.
                  </UiCardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:geddamgowtham4@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        medisettisrinu2004@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">(+91) 7032949259</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Vijayawada, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

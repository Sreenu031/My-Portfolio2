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
} from "@/components/ui/card"; // Renamed CardDescription to avoid conflict
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
  GraduationCap,
  Award as AwardIcon,
  ExternalLink,
  Briefcase,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// GithubIcon (from skills page)
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

// EducationEntry Interface (from education page)
interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  logoUrl?: string;
  logoHint?: string;
}

// Contact Form Schema and Type (from contact page)
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

// Data Arrays
const projectsData: Project[] = [
  {
    title: "Chatbot Application using Gemini API",
    description:
      "A sophisticated chatbot application leveraging the Gemini API to provide intelligent responses and engage users in natural language conversations. Features include context awareness, image recognition, and multi-turn dialogue management.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Gemini API"],
    imageUrl: "/images/chatbot.png",
    imageHint: "ecommerce platform",
    repoUrl: "https://github.com/nameishyam/chat-bot",
  },
  {
    title: "Diabetic Retinopathy Detection System",
    description:
      "A deep learning based system for detecting diabetic retinopathy in retinal images. Utilizes advanced image processing techniques and neural networks for accurate diagnosis.",
    technologies: ["GAN", "Pytorch", "OpenCV", "DRNet", "Flask", "Docker"],
    imageUrl: "/images/drgrader.png",
    imageHint: "data dashboard",
    repoUrl: "https://github.com/nameishyam/mini-webapp",
  },
  {
    title: "To-Do List Application",
    description:
      "A simple yet effective to-do list application built with EJS and Node.js. Allows users to create, update, and delete tasks.",
    technologies: [
      "EJS",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    imageUrl: "/images/todo.png",
    imageHint: "mobile health",
    repoUrl: "https://github.com/nameishyam/todo-app",
  },
];

const skillsData = [
  {
    name: "JavaScript",
    icon: Code,
    level: "Expert" as const,
    description: "Modern JS (ES6+), Async/Await, DOM Manipulation",
  },
  {
    name: "TypeScript",
    icon: Code,
    level: "Intermediate" as const,
    description: "Strong Typing, Interfaces, Generics",
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
    description: "Data Science, ML, Web Scraping, Automation",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    level: "Intermediate" as const,
    description: "Scikit-learn, TensorFlow, PyTorch Basics",
  },
  {
    name: "Deep Learning and NLP",
    icon: BrainCircuitIcon,
    level: "Intermediate" as const,
    description: "Transformers, BERT, GPT, Text Generation",
  },
  {
    name: "Data Science",
    icon: BarChart3,
    level: "Intermediate" as const,
    description: "Pandas, NumPy, Matplotlib, Seaborn",
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
    institution: "University of SAHE",
    duration: "2022 - Present",
    description:
      "Specializing in Artificial Intelligence and Machine Learning. Actively involved in research projects focusing on medical research and computer vision. Participated in various hackathons and coding competitions, gaining valuable experience. Led the university's Google Developer Student Club (GDSC) chapter's web development initiatives, organizing workshops and events to foster a community of tech enthusiasts.",
    logoUrl: "/images/sahe.png",
    logoHint: "university logo",
  },
];

const certificationsData: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuingOrganization: "Amazon Web Services (AWS)",
    dateAchieved: "March 2024",
    credentialId: "AWS-CSA-12345",
    credentialUrl: "#",
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "aws logo",
  },
  {
    name: "Google Cloud Certified - Professional Data Engineer",
    issuingOrganization: "Google Cloud",
    dateAchieved: "July 2023",
    credentialUrl: "#",
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "google cloud logo",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuingOrganization:
      "The Linux Foundation & Cloud Native Computing Foundation (CNCF)",
    credentialUrl: "#",
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "kubernetes logo",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuingOrganization: "Microsoft",
    dateAchieved: "January 2023",
    credentialId: "MS-AZ-67890",
    credentialUrl: "#",
    logoUrl: "https://placehold.co/50x50.png",
    logoHint: "microsoft azure logo",
  },
];

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
    logoHint: "company logo",
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
    logoHint: "university lab",
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
  },
];

export default function SinglePagePortfolio() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmitContact(data: ContactFormValues) {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default",
    });
    form.reset();
  }

  const scrollMarginClass = "scroll-mt-20 pt-10 md:pt-16"; // Adjusted scroll margin and added padding top

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {" "}
      {/* Overall page spacing */}
      {/* About Section */}
      <section id="about" className={scrollMarginClass}>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
              <Image
                src="/images/profile.jpg"
                alt="Syam Gowtham Geddam"
                fill
                priority
                data-ai-hint="profile picture"
                className="object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                Syam Gowtham <span className="text-primary">Geddam</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Engineer | ML Enthusiast | Web Developer | Data
                Scientist
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
                As a dedicated student, I am continuously exploring the
                frontiers of technology. My expertise spans full-stack web
                development, where I enjoy creating seamless user experiences,
                to the intricate world of machine learning and data science,
                where I leverage data to derive insights and build intelligent
                systems. I am also proficient in UI/UX design, believing that
                great functionality must be accompanied by intuitive and
                aesthetically pleasing interfaces.
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
      {/* Projects Section */}
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
      {/* Skills Section */}
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
      {/* Education Section */}
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
                    {/* Optional Logo
                    {edu.logoUrl && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-primary/30">
                        <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={64} height={64} data-ai-hint={edu.logoHint} />
                      </div>
                    )}
                    */}
                    <div className="flex-grow">
                      <CardTitle className="text-2xl font-semibold text-primary mb-1">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg text-foreground/90">
                        {edu.institution}
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
      {/* Certifications Section */}
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
      {/* Experience Section */}
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
      {/* Contact Section */}
      <section id="contact" className={scrollMarginClass}>
        <div className="space-y-10">
          <PageTitle
            title="Get in Touch"
            subtitle="I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!"
          />
          <div className="grid md:grid-cols-2 gap-10 items-start">
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
                      href="mailto:syam.geddam@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      syam.geddam@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Tech City, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl rounded-xl border-border hover:border-primary/50 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmitContact)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              className="bg-background/70 focus:bg-background"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              className="bg-background/70 focus:bg-background"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or inquiry..."
                              rows={5}
                              {...field}
                              className="bg-background/70 focus:bg-background"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

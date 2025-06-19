import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Home,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Award,
  Mail,
  User,
  Code2,
} from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
  id: string;
}

export const navLinks: NavLink[] = [
  { href: "/#about", label: "About", icon: Home, id: "about" },
  { href: "/#projects", label: "Projects", icon: Briefcase, id: "projects" },
  { href: "/#skills", label: "Skills", icon: Lightbulb, id: "skills" },
  {
    href: "/#education",
    label: "Education",
    icon: GraduationCap,
    id: "education",
  },
  {
    href: "/#certifications",
    label: "Certifications",
    icon: Award,
    id: "certifications",
  },
  { href: "/#experience", label: "Experience", icon: User, id: "experience" },
  { href: "/#contact", label: "Contact", icon: Mail, id: "contact" },
];

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/nameishyam", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/nameishyam/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://leetcode.com/nameishyam/",
    label: "LeetCode",
    icon: Code2,
  },
];

export const RESUME_PATH = "/files/Resume.pdf";

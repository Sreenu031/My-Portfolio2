import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Home, User, Briefcase, Lightbulb, GraduationCap, Award, Mail } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "About", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Lightbulb },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/experience", label: "Experience", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/syamgowtham", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/syamgowthamgeddam", label: "LinkedIn", icon: Linkedin },
];

export const RESUME_PATH = "/Syam_Gowtham_Geddam_Resume.pdf"; // Placeholder

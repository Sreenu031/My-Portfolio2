import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { RESUME_PATH } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
          <Image
            src="https://placehold.co/300x300.png"
            alt="Syam Gowtham Geddam"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="profile picture"
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Syam Gowtham <span className="text-primary">Geddam</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Engineer | Designer | ML Enthusiast | Web Developer | Data Scientist
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            Welcome to my portfolio! I am a passionate and versatile student skilled in a wide array of technologies
            and disciplines. My journey in tech is driven by a curiosity to solve complex problems and build impactful
            solutions. Here, you'll find a glimpse into my projects, skills, and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">
                <Send className="mr-2 h-5 w-5" /> Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105">
              <Link href={RESUME_PATH} target="_blank" download>
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Card className="bg-card/50 backdrop-blur-sm shadow-xl rounded-xl border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-primary">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 leading-relaxed space-y-4 text-center md:text-left px-8 pb-8">
            <p>
              As a dedicated student, I am continuously exploring the frontiers of technology. My expertise spans
              full-stack web development, where I enjoy creating seamless user experiences, to the intricate world of
              machine learning and data science, where I leverage data to derive insights and build intelligent systems.
              I am also proficient in UI/UX design, believing that great functionality must be accompanied by intuitive and
              aesthetically pleasing interfaces.
            </p>
            <p>
              I thrive in collaborative environments and am always eager to learn new skills and take on challenging projects.
              My goal is to contribute to innovative solutions that make a difference. Feel free to explore my work and
              reach out if you'd like to connect!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

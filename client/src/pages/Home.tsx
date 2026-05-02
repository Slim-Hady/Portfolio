import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Modern Minimalist Portfolio
 * Design: Clean, simple, and unique
 * Focus: Content-first with excellent photo display
 */

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Starbucks Platform",
    description:
      "Full-stack e-commerce platform with authentication, CRUD operations, payment integration, and comprehensive API documentation.",
    technologies: ["Express.js", "React", "MongoDB", "Stripe"],
    link: "https://github.com/Slim-Hady/starbucks",
  },
  {
    id: 2,
    title: "ArabDevs-toolkit (CLI)",
    description:
      "NPM package providing AI-powered functions for code explanation, debugging, and Arabic documentation generation.",
    technologies: ["Node.js", "Gemini API", "CLI", "NPM"],
    link: "https://www.npmjs.com/package/arabdevs-toolkit",
  },
  {
    id: 3,
    title: "Activepieces Contribution",
    description:
      "Contributed the Everhour piece for this open-source automation platform, enabling time-tracking workflows.",
    technologies: ["TypeScript", "Open Source", "Automation"],
    link: "https://github.com/activepieces/activepieces",
  },
  {
    id: 4,
    title: "Mini Shell",
    description:
      "Unix-like shell implementation with command parsing, pipes, file redirection, and background process management.",
    technologies: ["C", "Flex", "Bison", "OS"],
    link: "https://github.com/Slim-Hady/Mini_Shell",
  },
  {
    id: 5,
    title: "Course Registration System",
    description:
      "Applied SOLID principles, OOP, data structures, algorithms, and design patterns for a comprehensive system.",
    technologies: ["Java", "SOLID", "Design Patterns"],
    link: "https://github.com/Slim-Hady/CourseRegistrationSystem",
  },
  {
    id: 6,
    title: "Commands from Scratch",
    description:
      "My own implementation of coreutils, built from scratch in C for learning system-level programming.",
    technologies: ["C", "Linux", "System Programming"],
    link: "https://github.com/Slim-Hady/commands-from-scratch",
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">MA</div>
          <div className="flex gap-8 items-center">
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 bg-muted">
                <img
                  src="/me.jpeg"
                  alt="Mohamed Abdelhady"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                  Mohamed
                  <br />
                  Abdelhady
                </h1>
                <p className="text-2xl text-muted-foreground font-medium">
                  Software Engineer
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I build scalable applications with clean code and modern
                technologies. Passionate about full-stack development and
                contributing to open-source projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="mailto:mohamed.hady.dev@gmail.com">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary w-full sm:w-auto"
                  >
                    Get In Touch
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/Slim-Hady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-abdelhady-a3a1802a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:mohamed.hady.dev@gmail.com"
                  className="text-muted-foreground hover:text-blue-600 transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Engineering student at Alamein International
                University, passionate about building scalable applications and
                solving complex problems through code.
              </p>
              <p>
                With experience in full-stack development, I've worked on
                diverse projects ranging from e-commerce platforms to
                open-source contributions. I'm currently serving as President of
                AIU ICPC Community and Head of Fundamentals at IEEE AIU Student
                Branch.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <p className="text-muted-foreground">Problems Solved</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    23+
                  </div>
                  <p className="text-muted-foreground">Projects Built</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Open Source
                  </div>
                  <p className="text-muted-foreground">Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-blue-600 hover:shadow-lg transition-all duration-300 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Slim-Hady?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Languages
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>C++</p>
                <p>Java</p>
                <p>Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>C#</p>
                <p>Go</p>
                <p>SQL</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">Frontend</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">Backend</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Node.js</p>
                <p>Express.js</p>
                <p>REST APIs</p>
                <p>Swagger</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Databases
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>MongoDB</p>
                <p>MySQL</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Tools & Testing
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Docker</p>
                <p>Jest</p>
                <p>Git</p>
                <p>Linux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8 max-w-3xl">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-1">
                President, AIU ICPC Community
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Apr 2026 – Present
              </p>
              <p className="text-muted-foreground">
                Leading strategic direction of competitive programming community
                with oversight of training, coaching, and competition
                activities.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-1">
                Quantum Computing Intern, QWorld
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Jul 2025 – Sep 2025
              </p>
              <p className="text-muted-foreground">
                Completed QBronze, QSilver, and QNickel curricula; implemented
                quantum circuits and algorithms using Qiskit.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-1">
                Web Development Intern, ITI
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Jul 2025 – Aug 2025
              </p>
              <p className="text-muted-foreground">
                Completed technical sessions on C#, HTML, CSS, Bootstrap and
                developed responsive capstone project.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-secondary rounded-lg max-w-3xl">
            <h3 className="font-bold text-lg mb-4 text-blue-600">
              Key Achievements
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  Achieved Pupil rank on Codeforces with 500+ problems solved
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  IEEE Victoris 4.0 CodeRefine Finalist - reached finals as solo
                  participant
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Published NPM package with 100+ downloads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Active contributor to major open-source projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:mohamed.hady.dev@gmail.com">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-abdelhady-a3a1802a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border text-white hover:bg-secondary w-full sm:w-auto"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/Slim-Hady"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border text-white hover:bg-secondary w-full sm:w-auto"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="font-medium">mohamed.hady.dev@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <p className="font-medium">+20 1070129735</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="font-medium">Alexandria, Egypt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-muted-foreground py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2026 Mohamed Abdelhady. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { ExternalLink, Github, Code2, Database, Smartphone } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform implementing features for secure user transactions and a seamless shopping experience. Engineered a responsive design to ensure optimal functionality across various devices.",
      tech: ["JavaScript", "React.js", "Node.js", "MongoDB"],
      category: "Full-Stack",
      icon: Database,
      status: "Completed",
      highlights: ["Secure Transactions", "Responsive Design", "User Authentication"]
    },
    {
      title: "Amazon Clone",
      description: "Led the front-end development for a collaborative Amazon clone project, focusing on user experience. Designed and implemented a visually appealing and responsive user interface using HTML, CSS, and Bootstrap.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Frontend",
      icon: Code2,
      status: "Completed",
      highlights: ["Team Leadership", "Responsive UI", "E-commerce Features"]
    },
    {
      title: "College Chatbot",
      description: "An AI-powered chatbot designed to assist students with college-related queries, course information, and administrative support. Currently in development with advanced natural language processing capabilities.",
      tech: ["Python", "AI/ML", "Natural Language Processing"],
      category: "AI Project",
      icon: Smartphone,
      status: "In Progress",
      highlights: ["AI Integration", "Student Support", "NLP"]
    },
    {
      title: "WhatsApp Workflow Automation",
      description: "Developing automated workflow solutions using n8n to streamline WhatsApp communications and business processes. Focuses on improving efficiency through intelligent automation.",
      tech: ["n8n", "API Integration", "Automation"],
      category: "Automation",
      icon: Code2,
      status: "In Progress",
      highlights: ["Process Automation", "API Integration", "Workflow Design"]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" 
      ? "bg-green-500/20 text-green-400" 
      : "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-card/20">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning web development, AI integration, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-premium p-6 group hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent">
                    <project.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded border border-border/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-lg border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-border/20">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-colors">
                  <ExternalLink size={16} />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground text-sm font-medium transition-colors">
                  <Github size={16} />
                  <span>Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-up-delay">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-premium"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
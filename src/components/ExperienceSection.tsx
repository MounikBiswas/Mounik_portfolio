import { Calendar, Building, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Research & Development Team Member",
      company: "RCLD Cyber World",
      period: "Present",
      type: "Current",
      description: "Contributing to cutting-edge research in cybersecurity and AI technologies, developing innovative solutions for modern digital challenges.",
      highlights: ["AI Research", "Cybersecurity", "Innovation"]
    },
    {
      role: "Coding Faculty",
      company: "Training & Education",
      period: "Present", 
      type: "Current",
      description: "Training students in programming fundamentals, web development, and AI tool implementation.",
      highlights: ["Teaching", "Programming", "AI Tools"]
    },
    {
      role: "Front-End Developer Intern",
      company: "CodeVesta",
      period: "June - December 2023",
      type: "Internship",
      description: "Contributed to front-end development projects by building and enhancing user interfaces with HTML, CSS, and JavaScript. Collaborated effectively with the development team to successfully execute project tasks and meet deadlines.",
      highlights: ["HTML/CSS", "JavaScript", "Team Collaboration"]
    },
    {
      role: "Public Relations Intern",
      company: "Skill Academia", 
      period: "January - March 2023",
      type: "Internship",
      description: "Assisted in managing communication strategies, including media outreach and creating engaging content. Supported event coordination and worked with the team to improve organizational visibility.",
      highlights: ["Communication", "Event Management", "Content Creation"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through diverse roles in technology, research, and education
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10">
                  <div className="absolute inset-1 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div className="card-premium p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === "Current" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-secondary/20 text-secondary-foreground"
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-montserrat text-foreground mb-2">
                      {exp.role}
                    </h3>

                    <div className="flex items-center text-accent mb-3">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded border border-border/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import { Code, Database, Brain, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Web",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Java", "Python"],
      color: "text-blue-400"
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: ["Tailwind CSS", "Bootstrap", "Node.js"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Databases & Backend",
      skills: ["MongoDB", "Data Structures", "Networking"],
      color: "text-purple-400"
    },
    {
      icon: Brain,
      title: "AI Tools",
      skills: ["ChatGPT", "Claude", "Gemini", "Cursor", "Grok", "Lovable.ai", "n8n"],
      color: "text-accent"
    }
  ];

  const softSkills = [
    "Public Speaking",
    "Written Communication", 
    "Leadership",
    "Teamwork",
    "Time Management"
  ];

  const languages = [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent to-card/20">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development, AI technologies, and essential soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={category.title} className={`card-premium p-6 animate-fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`${category.color} mb-4`}>
                <category.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-muted/30 text-sm text-muted-foreground border border-border/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div className="card-premium p-8 animate-fade-up-delay">
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent flex items-center">
              <span className="w-2 h-8 bg-accent rounded mr-3"></span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card-premium p-8 animate-fade-up-delay-2">
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent flex items-center">
              <span className="w-2 h-8 bg-accent rounded mr-3"></span>
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-accent font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
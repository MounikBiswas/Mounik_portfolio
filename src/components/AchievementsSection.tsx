import { Trophy, Star, Users, Zap, Target, Brain } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Multiple AI Certifications",
      description: "Successfully completed Intel's AI For All program with AI Appreciate and AI Aware certifications",
      category: "AI Excellence",
      color: "text-yellow-400"
    },
    {
      icon: Star,
      title: "Scalable Project Development",
      description: "Built full-stack applications combining AI and web development technologies for real-world impact",
      category: "Technical Innovation",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Active Educator & Trainer",
      description: "Currently training students in programming fundamentals and advanced AI tools implementation",
      category: "Knowledge Sharing",
      color: "text-green-400"
    },
    {
      icon: Brain,
      title: "Research Contribution",
      description: "Actively contributing to R&D at RCLD Cyber World in cybersecurity and emerging technologies",
      category: "Research Impact",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Rapid Skill Acquisition",
      description: "Mastered multiple programming languages, frameworks, and AI tools within academic timeline",
      category: "Learning Agility",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Goal-Oriented Delivery",
      description: "Consistently delivered internship projects on time while maintaining high quality standards",
      category: "Professional Excellence",
      color: "text-orange-400"
    }
  ];

  const stats = [
    { number: "7+", label: "Certifications Earned", color: "text-accent" },
    { number: "4+", label: "Major Projects", color: "text-blue-400" },
    { number: "2", label: "Successful Internships", color: "text-green-400" },
    { number: "10+", label: "Technologies Mastered", color: "text-purple-400" }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-card/20 to-transparent">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milestones that define my journey in technology, research, and continuous learning
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-up-delay">
          {stats.map((stat, index) => (
            <div key={index} className="card-premium p-6 text-center">
              <div className={`text-4xl font-bold font-montserrat mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card-premium p-6 group hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-background/50 ${achievement.color}`}>
                  <achievement.icon size={28} />
                </div>
                <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                  {achievement.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-montserrat text-foreground mb-3 group-hover:text-accent transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up-delay-2">
          <div className="card-premium p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-montserrat text-foreground mb-4">
              Ready to Create Impact Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With a proven track record in technology innovation and continuous learning, 
              I'm excited to contribute to challenging projects and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-premium"
              >
                Start a Conversation
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-premium"
              >
                Explore My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
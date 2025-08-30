import { useState } from "react";
import { Award, Calendar, Building, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      title: "Front-End Development Internship",
      issuer: "CodeVesta",
      date: "June - December 2023",
      category: "Internship",
      description: "Successfully completed 6 months internship on Front-End Development",
      image: "/lovable-uploads/1a7ce362-45e2-4dd6-ac4d-77f9362e556d.png",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Cyber Security Pledge Certificate",
      issuer: "Ministry of Electronics & IT, Government of India",
      date: "April 27, 2023",
      category: "Government",
      description: "Cyber Security Pledge for Students - committed to cyber awareness and digital safety",
      image: "/lovable-uploads/a7bac252-05c4-42fb-ab25-1e51c942a8c2.png",
      skills: ["Cyber Security", "Digital Safety", "Ethical Practices"]
    },
    {
      title: "Public Relations Internship",
      issuer: "Skill Academia",
      date: "February 3, 2023",
      category: "Internship",
      description: "Certificate of Appreciation for completion of internship as Public Relations Intern for 3 months",
      image: "/lovable-uploads/6cdf8237-0a30-4119-8a80-447e123cce8a.png",
      skills: ["Communication", "Public Relations", "Event Management"]
    },
    {
      title: "Alpha (DSA with Java)",
      issuer: "Apna College",
      date: "2023",
      category: "Programming",
      description: "Certificate of Completion for successfully completing the course of Alpha (DSA with Java)",
      image: "/lovable-uploads/153232e7-f30a-4559-8bad-fcd3131fdb8c.png",
      skills: ["Java", "Data Structures", "Algorithms"]
    },
    {
      title: "AI For All Badge",
      issuer: "Intel & CBSE",
      date: "2025",
      category: "AI Certification",
      description: "AI Appreciate 2025 - Recognition for AI knowledge and implementation",
      image: "/lovable-uploads/38c66c02-759c-4481-8233-aecf2ff9d001.png",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Tools"]
    },
    {
      title: "AI Appreciate Certificate",
      issuer: "Intel & CBSE",
      date: "August 6, 2025",
      category: "AI Certification",
      description: "AI For All program - completed the AI Appreciate stage",
      image: "/lovable-uploads/f77e0751-4df1-4e30-a91b-2ee8a99b3a13.png",
      skills: ["AI Fundamentals", "Digital Literacy", "Innovation"]
    },
    {
      title: "AI Aware Certificate",
      issuer: "Intel & CBSE",
      date: "August 6, 2025",
      category: "AI Certification",
      description: "AI For All program - completed the AI Aware stage",
      image: "/lovable-uploads/f560db25-f6e1-4647-a6a6-173e8590aaca.png",
      skills: ["AI Awareness", "Technology Understanding", "Future Skills"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Internship": "bg-blue-500/20 text-blue-400",
      "Government": "bg-green-500/20 text-green-400",
      "Programming": "bg-purple-500/20 text-purple-400",
      "AI Certification": "bg-accent/20 text-accent"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements showcasing continuous learning and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="card-premium p-6 cursor-pointer group hover:scale-105 transition-all duration-500 animate-fade-up"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Certificate Image Preview */}
                  <div className="relative mb-4 aspect-video rounded-lg overflow-hidden bg-muted/20 border border-border/20">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle' dy='0.3em'%3ECertificate%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={12} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-montserrat text-foreground line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center text-sm text-accent">
                      <Building size={14} className="mr-2" />
                      <span className="line-clamp-1">{cert.issuer}</span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded border border-border/20"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded border border-border/20">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="pt-2 border-t border-border/20">
                      <div className="flex items-center text-accent text-sm font-medium">
                        <Award size={14} className="mr-2" />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='0.3em'%3ECertificate Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                    <h3 className="font-bold text-lg text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-accent">{cert.date}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up-delay">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">{certificates.length}</div>
            <div className="text-muted-foreground">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground">Different Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2</div>
            <div className="text-muted-foreground">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">AI Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
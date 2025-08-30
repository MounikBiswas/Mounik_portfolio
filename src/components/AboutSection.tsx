import { MapPin, GraduationCap, Briefcase, Download } from "lucide-react";

const AboutSection = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mounik_Biswas_CV.pdf";
    link.download = "Mounik_Biswas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate researcher and developer dedicated to pushing the
            boundaries of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="animate-fade-up-delay">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent" size={20} />
                  <span className="text-muted-foreground">
                    Siliguri, West Bengal
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-accent" size={20} />
                  <div>
                    <div className="font-medium">
                      Bachelor of Computer Applications
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Siliguri Institute of Technology (2021-2024)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-accent" size={20} />
                  <div>
                    <div className="font-medium">Currently Pursuing MCA</div>
                    <div className="text-sm text-muted-foreground">
                      Master of Computer Applications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Roles */}
          <div className="animate-fade-up-delay-2">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent">
                Current Roles
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Briefcase className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">
                      R&D Team Member
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      RCLD Cyber World
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contributing to cutting-edge research and development in
                      cybersecurity and AI technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Briefcase className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">
                      Coding Faculty
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Training & Education
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Training students in programming fundamentals and advanced
                      AI tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 animate-fade-up">
          <div className="card-premium p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              A recent{" "}
              <span className="text-accent font-semibold">
                Bachelor of Computer Application
              </span>{" "}
              graduate with demonstrated experience in{" "}
              <span className="text-accent font-semibold">
                front-end development
              </span>{" "}
              through internships and personal projects. Proficient in HTML,
              CSS, JavaScript, and modern frameworks like React, with additional
              knowledge of AI development tools. Eager to leverage technical
              skills and a collaborative spirit to contribute to a challenging
              organization, learn new technologies, and drive project success.
            </p>

            {/* Download CV Button */}
            <div className="flex justify-center">
              <button
                onClick={downloadCV}
                className="btn-premium flex items-center gap-2"
              >
                <Download size={18} />
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import {
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
} from "lucide-react";
import portraitImage from "@/assets/mounik-portrait.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mounik_Biswas_CV.pdf";
    link.download = "Mounik_Biswas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-premium section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold font-montserrat mb-4 text-shadow-luxury">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient-gold">Mounik</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium mb-6">
                Researcher, Developer, Innovator
              </div>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Building the future with{" "}
                <span className="text-accent font-semibold">AI</span> and{" "}
                <span className="text-accent font-semibold">Code</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="mailto:mounikbiswas2003@gmail.com"
                className="p-3 rounded-xl bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mounik-biswas-a9a48a23a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/its_mounik_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-premium"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline-premium"
              >
                View My Work
              </button>
              <button
                onClick={downloadCV}
                className="btn-outline-premium flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up-delay">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30">
                <img
                  src={portraitImage}
                  alt="Mounik Biswas - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

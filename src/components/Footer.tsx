import { Heart, Code, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border/20">
      <div className="container-premium section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold font-montserrat text-gradient-gold hover:scale-105 transition-transform cursor-pointer"
            >
              Mounik Biswas
            </button>
            <p className="text-muted-foreground mt-2 text-sm">
              Researcher, Developer, Innovator<br />
              Building the future with AI and Code
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block w-full text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-accent mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-3 mb-4">
              <a
                href="mailto:mounikbiswas2003@gmail.com"
                className="p-2 rounded-lg bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://linkedin.com/in/mounik-biswas-a9a48a23a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/its_mounik_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 border border-border/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram size={16} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Available for opportunities<br />
              Siliguri, West Bengal
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>and</span>
              <Code size={14} className="text-accent" />
              <span>by Mounik Biswas</span>
            </div>
            <div>
              <span>© {currentYear} All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
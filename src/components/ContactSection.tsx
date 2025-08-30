import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // EmailJS configuration with your credentials
    const serviceId = "service_q8b3j8s";
    const templateId = "template_h3r7lhf";
    const publicKey = "Lg4av84MaxdIN6T49";

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send Message",
        description:
          "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mounikbiswas2003@gmail.com",
      href: "mailto:mounikbiswas2003@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Siliguri, West Bengal, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mounik-biswas-a9a48a23a",
      href: "https://linkedin.com/in/mounik-biswas-a9a48a23a",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@its_mounik_",
      href: "https://instagram.com/its_mounik_",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Mounik_Biswas_CV.pdf";
    link.download = "Mounik_Biswas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "CV Downloaded!",
      description: "Your CV has been downloaded successfully.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-gradient-gold">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, discuss opportunities, or just have a
            conversation about technology? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up-delay">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent">
                Get in Touch
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-foreground hover:text-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="pt-6 border-t border-border/20">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center space-x-2 w-full justify-center btn-outline-premium"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-premium p-6 mt-6">
              <h4 className="text-lg font-bold font-montserrat mb-4 text-accent">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Certificates", href: "#certificates" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-left p-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up-delay-2">
            <div className="card-premium p-8 relative z-20">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-accent">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => console.log("Name input focused")}
                      onClick={() => console.log("Name input clicked")}
                      placeholder="Enter your name"
                      required
                      className="bg-background/50 border-border/20 focus:border-accent relative z-10"
                      style={{
                        position: "relative",
                        zIndex: 10,
                        pointerEvents: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-background/50 border-border/20 focus:border-accent relative z-10"
                      style={{ position: "relative", zIndex: 10 }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/20 focus:border-accent relative z-10"
                    style={{ position: "relative", zIndex: 10 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    required
                    rows={6}
                    className="bg-background/50 border-border/20 focus:border-accent resize-none relative z-10"
                    style={{ position: "relative", zIndex: 10 }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-premium flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  * Required fields. Messages will be sent directly via EmailJS.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

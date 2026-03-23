import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Linkedin, Github, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hitesh Kumar</h3>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Software Engineer passionate about creating exceptional web
              experiences with modern technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>hitesh.kr.8996@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Resume */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <Button
                variant="outline"
                size="sm"
                className="border-secondary-foreground/20 text-secondary-foreground bg-transparent hover:bg-secondary-foreground hover:text-secondary"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/hiku15cs/", "_blank")
                }
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-secondary-foreground/20 text-secondary-foreground bg-transparent hover:bg-secondary-foreground hover:text-secondary"
                onClick={() =>
                  window.open("https://github.com/hiku15cs", "_blank")
                }
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-secondary-foreground/20 text-secondary-foreground bg-transparent hover:bg-secondary-foreground hover:text-secondary"
                onClick={() => window.open("mailto:hitesh.kr.8996@gmail.com")}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full border-secondary-foreground/20 text-secondary-foreground bg-transparent hover:bg-secondary-foreground hover:text-secondary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Hitesh_Kumar_Resume.pdf";
                link.download = "Hitesh_Kumar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <Separator className="mb-6 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © {currentYear} Hitesh Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-secondary-foreground/80">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>using React.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

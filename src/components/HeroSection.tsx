import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/633fd83e-bd3b-4c6c-bfde-cc3b169a36ff.png';
    link.download = 'Hitesh_Kumar_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hitesh Kumar
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Software Engineer | Frontend Developer
          </p>
          <div className="flex items-center justify-center gap-2 mb-8 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Bangalore, India</span>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Crafting exceptional digital experiences with React.js and modern web technologies. 
            5+ years of building scalable applications that users love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadResume}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={handleContactMe}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
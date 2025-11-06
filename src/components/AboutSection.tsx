import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Results-driven Software Engineer with a strong background in building scalable, 
              responsive web applications. Proficient in React.js, Redux, JavaScript, and modern 
              UI/UX practices. Experienced in working with enterprise-grade tools, chat-based UIs, 
              and exporting reports (PDF/Word).
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Proven track record of client appreciation and delivering high-quality features 
              in agile teams. Passionate about clean code, user experience, and staying current 
              with the latest web technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 portfolio-card">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">6+ Years</h3>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="text-center p-6 portfolio-card">
                <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">4+ Years</h3>
                <p className="text-sm text-muted-foreground">React.js</p>
              </div>
              <div className="text-center p-6 portfolio-card">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Client</h3>
                <p className="text-sm text-muted-foreground">Appreciation</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Core Technologies</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 text-foreground">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React.js", "Redux", "HTML5", "CSS3", "SCSS", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-foreground">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Postman", "CVS", "Putty", "Snow", "GOMO", "AWS CodeCommit"].map((tool) => (
                    <Badge key={tool} variant="outline" className="skill-tag">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-foreground">Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {["Jodit Editor", "html-docx-js", "file-saver"].map((lib) => (
                    <Badge key={lib} variant="outline" className="skill-tag">
                      {lib}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-foreground">Databases & Systems</h4>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "Oracle", "Windows", "Ubuntu"].map((db) => (
                    <Badge key={db} variant="outline" className="skill-tag">
                      {db}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
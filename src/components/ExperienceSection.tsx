import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Cognizant Technology Solutions",
    role: "Project Associate",
    period: "Nov 2023 – Present",
    location: "Bangalore, India",
    description: "Leading frontend development initiatives, implementing chat-based UI applications, and delivering high-quality React.js solutions for enterprise clients.",
    achievements: [
      "Developed chat interface with advanced filtering and export capabilities",
      "Implemented dynamic report generation with PDF/Word export",
      "Received client appreciation for delivering quality features",
      "Collaborated in agile teams for rapid feature delivery"
    ],
    current: true
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    period: "2019 – 2023",
    location: "India",
    description: "Worked on multiple enterprise applications including Visible Console and Workbrain, focusing on UI/UX improvements and system integrations.",
    achievements: [
      "Enhanced Line Lock feature and tax highlighting functionality",
      "Integrated timezone APIs for improved user experience",
      "Developed payroll management UI with shift scheduling logic",
      "Created graphical reports and automated punch tracking systems"
    ],
    current: false
  },
  {
    company: "Varistor Technology",
    role: "Intern",
    period: "2019",
    location: "India",
    description: "Gained hands-on experience in software development, learning industry best practices and contributing to real-world projects.",
    achievements: [
      "Learned industry-standard development practices",
      "Contributed to web development projects",
      "Collaborated with senior developers on various initiatives"
    ],
    current: false
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles, contributing to innovative projects and 
            building exceptional software solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.company} className="portfolio-card animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">
                        {exp.role}
                      </CardTitle>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-primary text-primary-foreground w-fit">
                      Current
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
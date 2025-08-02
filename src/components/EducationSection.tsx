import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science",
    institution: "CMR Institute of Technology",
    period: "2015 – 2019",
    location: "Bangalore, India",
    description: "Comprehensive study of computer science fundamentals including programming, algorithms, data structures, and software engineering principles.",
    type: "Undergraduate"
  },
  {
    degree: "Intermediate",
    institution: "St. Karen's School",
    period: "2012 – 2014",
    location: "Patna, India",
    description: "Completed intermediate education with focus on science subjects, building strong analytical and problem-solving foundations.",
    type: "Secondary"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and 
            problem-solving capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.institution} className="portfolio-card animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <Badge variant={edu.type === "Undergraduate" ? "default" : "secondary"}>
                        {edu.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-medium text-primary mb-3">
                      {edu.institution}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
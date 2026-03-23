import { ExternalLink, MessageSquare, Eye, Calendar, Vote } from "lucide-react";

export const projects = [
  {
    title: "Chat-Based UI Application",
    description: "Built a comprehensive chat interface with history view, keyword/date filter, sorting, dynamic report generation, and export to PDF/Word.",
    technologies: ["React.js", "ContextAPI", "Tailwind", "jsPDF", "Draft.js"],
    icon: MessageSquare,
    type: "Enterprise"
  },
  {
    title: "Visible Console",
    description: "Worked on Line Lock feature, tax highlighting, timezone API integration, and UI alignment fixes for improved user experience.",
    technologies: ["React.js", "JavaScript", "CSS3", "API Integration", "Redux with Saga"],
    icon: Eye,
    type: "Enterprise"
  },
  {
    title: "Workbrain (Attendance & Payroll)",
    description: "Handled payroll management UI, shift scheduling logic, graphical reports, and automated punch tracking system.",
    technologies: ["React.js", "JavaScript", "MySQL", "Charts"],
    icon: Calendar,
    type: "Enterprise"
  },
  {
    title: "NewsDuniya",
    description: "A modern news website with category tabs and card-based layout using a free news API for real-time content.",
    technologies: ["React.js", "News API", "CSS3", "Responsive Design"],
    icon: ExternalLink,
    type: "Personal"
  },
  {
    title: "Online Voting System",
    description: "A secure online voting platform featuring end-to-end encryption and comprehensive user verification system.",
    technologies: ["React.js", "Node.js", "MySQL"],
    icon: Vote,
    type: "Personal"
  }
];
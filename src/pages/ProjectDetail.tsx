import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import FloatingParticles from "@/components/FloatingParticles";

const projectData: Record<string, {
  title: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
}> = {
  "bi-analytics": {
    title: "Business Intelligence and Data Analytics Tool",
    period: "Apr 2025 - May 2025",
    description:
      "A cross-functional BI tool leveraging Python and Tableau to drive data-informed decision-making across the organization. Integrated predictive analytics models using SQL and R to enhance forecasting accuracy.",
    tags: ["Python", "Tableau", "SQL", "R", "Predictive Analytics"],
    highlights: [
      "Built cross-functional BI tool using Python & Tableau",
      "Improved decision-making efficiency by 25%",
      "Reduced report generation time by 30% using SQL & R",
      "Increased forecasting accuracy by 20% with predictive analytics",
    ],
    stats: [
      { label: "Efficiency Gain", value: "+25%" },
      { label: "Report Time Saved", value: "30%" },
      { label: "Forecasting Accuracy", value: "+20%" },
    ],
  },
  "ecommerce-dashboard": {
    title: "E-commerce Analytics Dashboard",
    period: "Aug 2024 - Sep 2024",
    description:
      "An interactive Tableau dashboard providing deep sales and customer insights for e-commerce operations. The dashboard enabled stakeholders to monitor KPIs and make real-time decisions.",
    tags: ["Tableau", "Analytics", "Dashboard", "E-commerce"],
    highlights: [
      "Built Tableau dashboard with sales & customer insights",
      "Conversion rate increased by 25%",
      "Reporting time reduced by 50%",
    ],
    stats: [
      { label: "Conversion Increase", value: "+25%" },
      { label: "Reporting Time Saved", value: "50%" },
    ],
  },
  "library-management": {
    title: "Library Management System",
    period: "Jun 2023 - Jul 2023",
    description:
      "A comprehensive library management system built with Python and Flask, featuring database optimization, user authentication, and streamlined book management workflows.",
    tags: ["Python", "Flask", "SQL", "Authentication"],
    highlights: [
      "Built using Python + Flask framework",
      "Database optimization improved speed by 50%",
      "Authentication system increased security by 30%",
    ],
    stats: [
      { label: "Speed Improvement", value: "+50%" },
      { label: "Security Boost", value: "+30%" },
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <PageWrapper className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/projects" className="text-primary hover:underline">← Back to projects</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="page-gradient-projects">
      <FloatingParticles color="var(--projects-accent)" count={10} />
      <div className="container mx-auto px-4 relative z-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-projects font-medium">{project.period}</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">{project.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium bg-projects/10 text-projects">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {project.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-display font-bold text-projects mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-bold mb-6">Key Highlights</h3>
          <div className="space-y-4">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-projects mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{h}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetail;

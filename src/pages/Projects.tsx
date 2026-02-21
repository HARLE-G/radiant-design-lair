import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const projects = [
  {
    id: "bi-analytics",
    title: "Business Intelligence and Data Analytics Tool",
    period: "Apr 2025 - May 2025",
    description: "Built cross-functional BI tool using Python & Tableau. Improved decision-making efficiency by 25%.",
    tags: ["Python", "Tableau", "SQL", "R"],
    stats: [
      { label: "Efficiency", value: "+25%" },
      { label: "Report Time", value: "-30%" },
      { label: "Forecasting", value: "+20%" },
    ],
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Analytics Dashboard",
    period: "Aug 2024 - Sep 2024",
    description: "Tableau dashboard with sales & customer insights. Conversion rate increased by 25%.",
    tags: ["Tableau", "Analytics", "Dashboard"],
    stats: [
      { label: "Conversion", value: "+25%" },
      { label: "Report Time", value: "-50%" },
    ],
  },
  {
    id: "library-management",
    title: "Library Management System",
    period: "Jun 2023 - Jul 2023",
    description: "Python + Flask based system with database optimization and authentication.",
    tags: ["Python", "Flask", "SQL"],
    stats: [
      { label: "Speed", value: "+50%" },
      { label: "Security", value: "+30%" },
    ],
  },
];

const Projects = () => {
  return (
    <PageWrapper className="page-gradient-projects">
      <FloatingParticles color="var(--projects-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Projects" subtitle="Featured work and case studies" />

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={`/projects/${project.id}`}>
                <div className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs text-projects font-medium mb-2">{project.period}</p>
                      <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-projects transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className="text-muted-foreground group-hover:text-projects group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-projects/10 text-projects">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-display font-bold text-projects">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;

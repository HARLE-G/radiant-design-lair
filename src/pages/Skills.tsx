import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const skills = [
  { name: "Power BI", level: 90, icon: "📊" },
  { name: "Excel", level: 85, icon: "📈" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "JavaScript", level: 75, icon: "⚡" },
  { name: "Django", level: 70, icon: "🎯" },
  { name: "HTML", level: 90, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "Bootstrap", level: 80, icon: "🅱️" },
  { name: "SQL", level: 85, icon: "🗄️" },
];

const Skills = () => {
  return (
    <PageWrapper className="page-gradient-skills">
      <FloatingParticles color="var(--skills-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <div className="glass-card rounded-2xl p-6 h-full preserve-3d cursor-pointer group">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-display font-bold text-lg mb-3">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: `hsl(var(--skills-accent))` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;

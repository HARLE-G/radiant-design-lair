import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA - Information Technology",
    institution: "Amity University, Noida",
    year: "2024 - 2026",
  },
  {
    degree: "Undergraduate",
    institution: "IPS Academy, Indore",
    year: "2018 - 2022",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "King George Higher Secondary School, Indore",
    year: "2017 - 2018",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "MGM Mission Higher Secondary School, Indore",
    year: "2015 - 2016",
  },
];

const Education = () => {
  return (
    <PageWrapper className="page-gradient-education">
      <FloatingParticles color="var(--education-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Education" subtitle="My academic journey and qualifications" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-education/20 -translate-x-1/2" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-education border-4 border-background -translate-x-1/2 z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-transform">
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <GraduationCap size={20} className="text-education" />
                    <span className="text-xs font-medium text-education px-3 py-1 rounded-full bg-education/10">
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;

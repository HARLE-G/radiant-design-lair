import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const certifications = [
  {
    title: "Python Certification",
    date: "Jul 2024",
    link: "https://cert.diceid.com/cid/4zby2TtDKR",
  },
  {
    title: "Full Stack Development Certification",
    date: "Apr 2023",
    link: "https://cert.diceid.com/cid/4zby2TtD",
  },
];

const Certifications = () => {
  return (
    <PageWrapper className="page-gradient-certifications">
      <FloatingParticles color="var(--certifications-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Certifications" subtitle="Professional certifications and credentials" />

        <div className="max-w-3xl mx-auto grid gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-2xl p-8 flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-certifications/10 flex items-center justify-center flex-shrink-0">
                <Award size={32} className="text-certifications" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold group-hover:text-certifications transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </div>
              <ExternalLink size={20} className="text-muted-foreground group-hover:text-certifications transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Certifications;

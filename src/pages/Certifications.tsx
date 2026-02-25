import { motion } from "framer-motion";
import { ExternalLink, Award, FileText } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const certifications = [
  {
    title: "Python Developer Certification",
    date: "Jul 2024",
    link: "https://cert.diceid.com/cid/4zby2TtDKR",
    pdfFile: "/cert-python.pdf",
    color: "hsl(var(--certifications))",
  },
  {
    title: "Full Stack Development Certification",
    date: "Apr 2023",
    link: "https://cert.diceid.com/cid/4zby2TtD",
    pdfFile: "/cert-fullstack.pdf",
    color: "hsl(var(--certifications))",
  },
];

const Certifications = () => {
  return (
    <PageWrapper className="page-gradient-certifications">
      <FloatingParticles color="var(--certifications-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Certifications" subtitle="Professional certifications and credentials" />

        <div className="max-w-4xl mx-auto grid gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Header row */}
              <div className="flex items-center gap-6 p-6 border-b border-border/30">
                <div className="w-14 h-14 rounded-2xl bg-certifications/10 flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-certifications" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-certifications/10 text-certifications text-sm font-medium hover:bg-certifications/20 transition-colors"
                >
                  <ExternalLink size={16} /> View Online
                </a>
              </div>

              {/* PDF Embed */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <FileText size={14} />
                  <span>Certificate Preview</span>
                </div>
                <div className="w-full rounded-xl overflow-hidden border border-border/30 bg-background/40" style={{ height: "420px" }}>
                  <iframe
                    src={`${cert.pdfFile}#toolbar=0&view=FitH`}
                    title={cert.title}
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <div className="flex justify-end mt-3">
                  <a
                    href={cert.pdfFile}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground text-sm hover:text-foreground hover:border-certifications transition-all"
                  >
                    Download Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Certifications;

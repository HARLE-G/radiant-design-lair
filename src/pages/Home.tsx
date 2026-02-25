import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Download } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import FloatingParticles from "@/components/FloatingParticles";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  return (
    <PageWrapper className="page-gradient-home flex items-center">
      <FloatingParticles color="var(--home-accent)" count={20} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/40 glow-primary shadow-2xl">
              <img
                src={profilePhoto}
                alt="Rupendra Harle"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4"
          >
            <span className="gradient-text">RUPENDRA</span>
            <br />
            <span className="text-foreground">HARLE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto"
          >
            Visionary Leader • Data Analyst • Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-muted-foreground mb-8"
          >
            📍 Indore, Madhya Pradesh, India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg glow-primary hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download="Rupendra_Harle_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-border text-muted-foreground font-medium hover:text-foreground hover:border-primary transition-all hover:scale-105"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/rupendra-harle-973371242"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/HARLE-G"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all hover:scale-110"
            >
              <Github size={22} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative spinning ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
    </PageWrapper>
  );
};

export default Home;

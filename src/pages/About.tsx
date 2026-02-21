import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const About = () => {
  return (
    <PageWrapper className="page-gradient-about">
      <FloatingParticles color="var(--about-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="About Me" subtitle="Get to know the person behind the code" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="perspective-1000"
          >
            <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform">
              <div className="w-24 h-24 rounded-2xl bg-about/20 flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl font-display font-bold text-about">RH</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-center mb-2">Rupendra Harle</h3>
              <p className="text-muted-foreground text-center text-sm mb-4">📍 Indore, Madhya Pradesh, India</p>
              <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                <span>📧 rupendraharle513@gmail.com</span>
              </div>
              <div className="flex justify-center mt-2 text-xs text-muted-foreground">
                <span>📱 7400881081</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-about">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Visionary leader orchestrating strategic execution and data analysis to enhance
                decision-making. Championed technical collaboration, optimizing tools and processes
                to boost efficiency, performance, and innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Experience", value: "Data Analytics" },
                  { label: "Degree", value: "MBA (IT)" },
                  { label: "Focus", value: "BI & Full Stack" },
                  { label: "Location", value: "Indore, India" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-about/5 border border-about/10">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;

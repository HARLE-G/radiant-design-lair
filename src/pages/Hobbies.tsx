import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const hobbies = [
  { name: "Playing Chess", emoji: "♟️", description: "Strategic thinking and pattern recognition" },
  { name: "Traveling & Exploring", emoji: "🌍", description: "Discovering new cultures and places" },
  { name: "Listening to Music", emoji: "🎵", description: "Finding inspiration through melodies" },
  { name: "Photography", emoji: "📷", description: "Capturing moments and visual stories" },
  { name: "Learning New Tech", emoji: "💡", description: "Staying ahead with emerging technologies" },
];

const Hobbies = () => {
  return (
    <PageWrapper className="page-gradient-hobbies">
      <FloatingParticles color="var(--hobbies-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Hobbies" subtitle="What I enjoy beyond the screen" />

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <div className="glass-card rounded-2xl p-8 text-center h-full preserve-3d">
                <div className="text-5xl mb-4">{hobby.emoji}</div>
                <h3 className="font-display font-bold text-lg mb-2">{hobby.name}</h3>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hobbies;

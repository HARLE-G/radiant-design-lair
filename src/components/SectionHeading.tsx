import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">{title}</h1>
    {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;

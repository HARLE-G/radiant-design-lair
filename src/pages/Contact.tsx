import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <PageWrapper className="page-gradient-contact">
      <FloatingParticles color="var(--contact-accent)" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Contact" subtitle="Let's connect and build something great" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "rupendraharle513@gmail.com" },
                { icon: Phone, label: "7400881081" },
                { icon: MapPin, label: "Indore, Madhya Pradesh, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-contact/10 flex items-center justify-center">
                    <item.icon size={18} className="text-contact" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle size={64} className="text-contact mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                {(["name", "email", "message"] as const).map((field) => (
                  <div key={field}>
                    <label className="text-sm font-medium capitalize mb-1.5 block">{field}</label>
                    {field === "message" ? (
                      <textarea
                        rows={4}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-contact focus:outline-none focus:ring-1 focus:ring-contact transition-colors resize-none"
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-contact focus:outline-none focus:ring-1 focus:ring-contact transition-colors"
                      />
                    )}
                    {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-contact text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { personal } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";

const contactDetails = [
  { Icon: Mail, label: "Email", value: personal.email, href: personal.social.email },
  { Icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { Icon: MapPin, label: "Address", value: personal.location, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire this up to your backend/email service (e.g. Formspree, EmailJS, or a custom API route).
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Let's build something great together" />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-strong rounded-3xl p-6 sm:p-8 flex flex-col"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">Contact Details</h3>
              <p className="text-sm text-muted mt-2">
                Open to new opportunities — whether it&rsquo;s a project, a role, or just a hello.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm font-medium break-words">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-muted mb-3">Follow along</p>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: personal.social.github, label: "GitHub" },
                  { Icon: Linkedin, href: personal.social.linkedin, label: "LinkedIn" },
                  { Icon: MessageCircle, href: personal.social.whatsapp, label: "WhatsApp" },
                ].map(({ Icon, href, label }) => (
                  <MagneticButton
                    as="a"
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl glass hover-glow"
                  >
                    <Icon size={17}  className="mt-[10px]"/>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs text-muted mb-1.5 block">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-muted mb-1.5 block">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-xs text-muted mb-1.5 block">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs text-muted mb-1.5 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors resize-none"
              />
            </div>

            <MagneticButton
              type="submit"
              disabled={status !== "idle"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-medium shadow-lg shadow-primary/30 disabled:opacity-70 min-h-[48px]"
            >
              {status === "idle" && (<>Send Message <Send size={16} /></>)}
              {status === "sending" && "Sending..."}
              {status === "sent" && (<>Message Sent <CheckCircle2 size={16} /></>)}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

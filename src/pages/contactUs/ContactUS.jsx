import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import HeroSection from "../../components/heroSection/HeroSection";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

export default function ContactUS() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Toast */}
      <Toaster position="top-right" />

      {/* Header */}
      <HeroSection
        title="Contact Us"
        subtitle="Let's start a conversation. We'd love to hear about your project and how we can help."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border bg-card outline-none focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border bg-card outline-none focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border bg-card resize-none outline-none focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold">Contact Info</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="text-primary" />
                  <p>Giza, Egypt</p>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-primary" />
                  <p>01140372054</p>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-primary" />
                  <p>dotagency69@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/183jaBNUCJ/"
                  className="p-3 rounded-full bg-primary text-white"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/dot_gency"
                  className="p-3 rounded-full bg-primary text-white"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/01018565141"
                  className="p-3 rounded-full bg-primary text-white"
                >
                  <BsWhatsapp size={20} />
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border h-64">
                <iframe
                  title="DOT Agency Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3453.091287975844!2d31.20857718488446!3d30.06291768187555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAzJzQ2LjUiTiAzMcKwMTInMjMuMCJF!5e0!3m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

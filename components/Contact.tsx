import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. I will respond within 24-48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[rgb(18,18,18)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-white tracking-[0.2em] uppercase mb-8 font-bold">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">Email</h4>
                <p className="text-sm text-white">Giovanni.baioni01@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">Phone</h4>
                <p className="text-sm text-white">+39 3809008060</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-4">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/giovanni-baioni-51684619b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-10 h-10 border border-white/20 items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-xs text-gray-500 tracking-[0.1em] uppercase">Name *</label>
                <Input
                  id="name"
                  type="text"
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border border-white/20 bg-transparent text-white placeholder:text-gray-600 focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-xs text-gray-500 tracking-[0.1em] uppercase">Email *</label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border border-white/20 bg-transparent text-white placeholder:text-gray-600 focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-xs text-gray-500 tracking-[0.1em] uppercase">Subject *</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder=""
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="border border-white/20 bg-transparent text-white placeholder:text-gray-600 focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-xs text-gray-500 tracking-[0.1em] uppercase">Message *</label>
                <Textarea
                  id="message"
                  placeholder=""
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border border-white/20 bg-transparent text-white placeholder:text-gray-600 focus:border-white resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 h-10 text-xs tracking-[0.1em] uppercase">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

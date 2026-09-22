import React, { useState, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Loader2,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { personalInfo } = portfolioData;
  const phoneNumber = personalInfo.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hi ${personalInfo.name.split(" ")[0]}! I saw your portfolio and would like to discuss a project.`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        "service_wonx3xs",
        "template_v1xwduc",
        form.current,
        "_QWED82KyfuvWQDyW"
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.error("Email failed:", error?.text);
          setIsError(true);
          setIsLoading(false);
          setTimeout(() => setIsError(false), 5000);
        }
      );
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    { icon: Phone, label: "Phone", value: personalInfo.phone },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  const inputClass =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-content placeholder-zinc-600 outline-none transition-all focus:border-line-strong focus:ring-2 focus:ring-white/15";

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact info */}
      <div>
        <h3 className="font-display text-xl font-bold text-content">Get in Touch</h3>
        <p className="mt-2 text-sm text-muted">
          Prefer a quick chat? Reach out on any channel below.
        </p>

        <div className="mt-6 space-y-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                <item.icon className="h-5 w-5 text-content" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-content">{item.label}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="break-all text-sm text-muted transition-colors hover:text-content"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp callout */}
        <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
              <MessageCircle className="h-5 w-5 text-content" />
            </div>
            <div>
              <h4 className="font-semibold text-content">Quick Chat</h4>
              <p className="text-xs text-muted">Typically replies within minutes</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-medium text-content transition-colors hover:bg-emerald-600"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Socials */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-content">Connect with me</h4>
          <div className="flex gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-all hover:border-line-strong hover:text-content"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-all hover:border-line-strong hover:text-content"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-all hover:border-emerald-400/50 hover:text-emerald-300"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        <h3 className="font-display text-xl font-bold text-content">Send a Message</h3>

        {isSuccess && (
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 animate-fade-in">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            <div>
              <h4 className="font-semibold text-emerald-300">Message sent!</h4>
              <p className="text-sm text-emerald-200/80">
                Thanks for reaching out — I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {isError && (
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 animate-fade-in">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-400" />
            <div>
              <h4 className="font-semibold text-rose-300">Failed to send</h4>
              <p className="text-sm text-rose-200/80">
                Please try again, or reach me on WhatsApp for a faster reply.
              </p>
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="mt-5 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-muted">
              Full Name *
            </label>
            <input
              type="text"
              name="from_name"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted">
              Email Address *
            </label>
            <input
              type="email"
              name="from_email"
              required
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              className={inputClass}
              placeholder="Project discussion"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className={`${inputClass} resize-none`}
              placeholder="Tell me about your project, timeline, and goals..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>

          <p className="text-center text-xs text-faint">
            * Required fields. I respect your privacy and never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

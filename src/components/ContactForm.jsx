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
  Youtube,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data";

const fields = [
  { name: "from_name", label: "Name", type: "text", autoComplete: "name", placeholder: "Your name" },
  { name: "from_email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Project or role" },
];

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
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:+${phoneNumber}` },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: personalInfo.youtube, label: "YouTube" },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
      {/* Direct contact */}
      <div>
        <ul className="space-y-5">
          {contactItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm text-faint">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="break-all text-[15px] font-medium text-content hover:text-accent-on">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[15px] font-medium text-content">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-[10px] bg-emerald-700 px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-emerald-800 hover:text-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Chat on WhatsApp
        </a>

        <ul className="mt-8 flex gap-2">
          {socials.map(({ icon, href, label }) => {
            const Icon = icon;
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="icon-btn"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Form */}
      <div className="card p-5 sm:p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(({ label, ...input }) => (
              <div key={input.name} className={input.name === "subject" ? "sm:col-span-2" : undefined}>
                <label htmlFor={input.name} className="mb-2 block text-sm font-medium text-content">
                  {label}
                </label>
                <input id={input.name} required className="field" {...input} />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-content">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="field resize-y"
              placeholder="What are you building, and what do you need help with?"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <Send className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>
        <div aria-live="polite" className="mt-4 empty:mt-0">
          {isSuccess && (
            <p className="flex items-start gap-2 text-sm text-emerald-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Thanks, your message was sent. I'll get back to you soon.
            </p>
          )}
          {isError && (
            <p className="flex items-start gap-2 text-sm text-rose-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              The message could not be sent. Please try again or use WhatsApp.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

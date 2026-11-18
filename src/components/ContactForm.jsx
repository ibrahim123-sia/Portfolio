import React, { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
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

  const direct = [
    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: "Phone", value: personalInfo.phone, href: `tel:+${phoneNumber}` },
    { label: "WhatsApp", value: "Send a message", href: whatsappUrl, external: true },
    { label: "Location", value: personalInfo.location },
  ];

  const profiles = [
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "YouTube", href: personalInfo.youtube },
  ];

  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-8">
      {/* Direct contact */}
      <div className="md:col-span-4 md:col-start-4">
        <dl className="divide-y divide-rule border-y border-rule">
          {direct.map((item) => (
            <div key={item.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
              <dt className="label">{item.label}</dt>
              <dd className="min-w-0 text-[15px]">
                {item.href ? (
                  <a
                    href={item.href}
                    className="link break-all"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
          {profiles.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="link">
              {item.label}
            </a>
          ))}
        </p>
      </div>

      {/* Form */}
      <div className="md:col-span-5">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map(({ label, ...input }) => (
              <div key={input.name} className={input.name === "subject" ? "sm:col-span-2" : undefined}>
                <label htmlFor={input.name} className="label mb-2 block">
                  {label}
                </label>
                <input id={input.name} required className="field" {...input} />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="label mb-2 block">
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
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
        <div aria-live="polite" className="mt-4 text-[15px] empty:mt-0">
          {isSuccess && <p className="text-accent">Thanks, your message was sent. I'll get back to you soon.</p>}
          {isError && (
            <p className="text-[#9B2C1F]">The message could not be sent. Please try again or use WhatsApp.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const fields = [
  { name: "from_name", label: "Name", type: "text", autoComplete: "name", placeholder: "Your name" },
  { name: "from_email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com" },
];

/** Sends a message through EmailJS. Sits under the email on /contact. */
const ContactForm = () => {
  const form = useRef(null);
  const timer = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  useEffect(() => () => clearTimeout(timer.current), []);

  const settle = (next) => {
    setStatus(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm("service_wonx3xs", "template_v1xwduc", form.current, "_QWED82KyfuvWQDyW")
      .then(
        () => {
          form.current?.reset();
          settle("sent");
        },
        (error) => {
          console.error("Email failed:", error?.text);
          settle("failed");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form" aria-label="Send a message">
      <div className="two">
        {fields.map(({ label, ...input }) => (
          <div key={input.name}>
            <label htmlFor={input.name}>{label}</label>
            <input id={input.name} required {...input} />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" required placeholder="The task or project" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="A few lines about your business and what you want done."
        />
      </div>
      <button type="submit" className="btn go" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      <div aria-live="polite">
        {status === "sent" && <p className="status ok-msg">Thanks, your message was sent. I'll reply soon.</p>}
        {status === "failed" && (
          <p className="status err">The message could not be sent. Please email me or use WhatsApp.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

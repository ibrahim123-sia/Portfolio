import React, { useState, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // WhatsApp URL
  const phoneNumber = portfolioData.personalInfo.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hi ${
      portfolioData.personalInfo.name.split(" ")[0]
    }! I saw your portfolio and would like to discuss a project.`
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
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSuccess(true);
          setIsLoading(false);
          form.current.reset();

          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.error("Email failed:", error.text);
          setIsError(true);
          setIsLoading(false);

          // Hide error message after 5 seconds
          setTimeout(() => setIsError(false), 5000);
        }
      );
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Get in Touch
        </h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Email
              </h4>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {portfolioData.personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Phone
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {portfolioData.personalInfo.phone}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {portfolioData.personalInfo.location}
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Button */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-100 dark:border-green-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">
                  Quick Chat
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              Perfect for quick queries or project discussions
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
            Connect with me
          </h4>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors group"
              title="LinkedIn Profile"
            >
              <span className="font-semibold">in</span>
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors group"
              title="GitHub Profile"
            >
              <span className="font-semibold">Git</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center text-white transition-colors group"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Send a Message
        </h3>

        {/* Success/Error Messages */}
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-green-800 dark:text-green-200 font-semibold">
                  Message Sent Successfully!
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                  Thank you for reaching out! I'll get back to you within 24
                  hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {isError && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-red-800 dark:text-red-200 font-semibold">
                  Failed to Send Message
                </h4>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  Please try again or use WhatsApp for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500"
              placeholder="Project discussion"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500 resize-none"
              placeholder="Tell me about your project, timeline, and budget..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={20} />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            * Required fields. I respect your privacy and will never share your
            information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

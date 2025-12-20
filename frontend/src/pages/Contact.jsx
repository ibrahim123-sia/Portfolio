import React from 'react';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <Mail className="w-5 h-5 mr-2" />
            <span className="font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's discuss how we can work together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl mb-16">
          <ContactForm />
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
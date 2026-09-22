import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Get In Touch"
          icon={Mail}
          title="Let's build something that ships"
          subtitle="Have a project or role in mind? Tell me about it — I'd love to hear where I can help."
        />

        <Reveal className="mx-auto max-w-4xl">
          <div className="card rounded-2xl p-6 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { MailBox } from '../components/Cta';
import ContactForm from '../components/ContactForm';
import { portfolioData } from '../data';
import { useKarachiTime } from '../useKarachiTime';

const checklist = [
  'What your business does, in one line.',
  'The task you want AI or software to take over.',
  'Where your data lives today: a website, documents, a CRM, spreadsheets.',
  'Any tools you already use, like GoHighLevel or Shopify.',
  'When you would like it working.',
];

const External = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Contact = () => {
  const { personalInfo, github } = portfolioData;
  const time = useKarachiTime();
  const phone = '+92 322 339 6443';

  return (
    <div className="wrap">
      <header className="ph">
        <h1 className="h">Contact</h1>
        <p>The fastest way to start is an email with a few lines about your business and the task.</p>
      </header>
      <div className="cg">
        <div className="panel">
          <h2>Write to me</h2>
          <MailBox />
          <ContactForm />
          <div className="rows">
            <div>
              <span>WhatsApp</span>
              <b style={{ userSelect: 'all' }}>{phone}</b>
            </div>
            <div>
              <span>Upwork</span>
              <External href={personalInfo.upwork}>Hire me on Upwork</External>
            </div>
            <div>
              <span>LinkedIn</span>
              <External href={personalInfo.linkedin}>syed-ibrahim-ali-sia</External>
            </div>
            <div>
              <span>GitHub</span>
              <External href={personalInfo.github}>{github.username}</External>
            </div>
            <div>
              <span>My time now</span>
              <b>{time ? `${time} in Karachi (UTC+5)` : 'Karachi, UTC+5'}</b>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2>What helps me reply fast</h2>
          <ul className="check">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

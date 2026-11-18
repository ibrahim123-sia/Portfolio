import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data';

/** The email in large type with a "Copy email" button. */
export const MailBox = () => {
  const { email } = portfolioData.personalInfo;
  const mailRef = useRef(null);
  const timer = useRef(null);
  const [label, setLabel] = useState('Copy email');

  useEffect(() => () => clearTimeout(timer.current), []);

  // Select the address so it can be copied by hand
  const select = () => {
    const range = document.createRange();
    range.selectNodeContents(mailRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    setLabel('Selected, press Ctrl+C');
  };

  const copy = () => {
    if (!navigator.clipboard) return select();
    navigator.clipboard.writeText(email).then(() => {
      setLabel('Copied');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setLabel('Copy email'), 1600);
    }, select);
  };

  return (
    <div className="mailbox">
      <code ref={mailRef} className="mail">
        {email}
      </code>
      <button type="button" className="copy" onClick={copy}>
        {label}
      </button>
    </div>
  );
};

/** Dark closing box with the email, WhatsApp, Upwork and LinkedIn. */
const Cta = () => {
  const { personalInfo } = portfolioData;
  const links = [
    ['WhatsApp', personalInfo.whatsapp],
    ['Hire on Upwork', personalInfo.upwork],
    ['LinkedIn', personalInfo.linkedin],
  ];

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <div>
            <h2 className="h">Tell me what you want off your team's plate.</h2>
            <p>
              Send a few lines about your business and the task. I'll reply with whether AI can do it, how, and
              what it would take.
            </p>
          </div>
          <div>
            <MailBox />
            <div className="links">
              {links.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

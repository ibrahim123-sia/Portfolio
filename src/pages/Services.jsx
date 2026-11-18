import React from 'react';
import Link from '../components/Link';
import Cta from '../components/Cta';
import { portfolioData, problemColor } from '../data';

const byKey = Object.fromEntries(portfolioData.projects.map((p) => [p.key, p]));

// "Propel, AtriumDesk and ..." as links to their pages
const Examples = ({ keys }) =>
  keys.map((key, i) => (
    <React.Fragment key={key}>
      {i > 0 && ', '}
      <Link to={`/projects/${key}`}>{byKey[key].name}</Link>
    </React.Fragment>
  ));

const services = [
  {
    problem: 'act',
    title: 'AI agents',
    lead: 'An agent that does tasks inside your own software, with a person approving anything that changes data.',
    good: 'Stores, CRMs and internal tools where staff repeat the same clicks every day.',
    get: 'The agent, the tools it may use, a confirm step enforced on the server, logs of every action, and tests.',
    examples: ['nowhere', 'propel', 'ai-task-manager'],
  },
  {
    problem: 'answer',
    title: 'Assistants that answer from your data',
    lead: 'A RAG assistant that replies from your website, documents or database and shows where each answer came from.',
    good: 'Help desks, admissions, property enquiries and internal knowledge.',
    get: 'Content loading and search, the chat on your site or WhatsApp, a way to add new documents, and a list of questions it could not answer.',
    examples: ['atriumdesk', 'propel'],
  },
  {
    problem: 'sell',
    title: 'GoHighLevel AI setup',
    lead: 'Conversation AI bots inside your GoHighLevel account, trained on your business and placed on your website and funnels.',
    good: 'Coaches, agencies and service businesses that already use GoHighLevel.',
    get: 'A knowledge base from your content, bot instructions in your tone, the widget on the right pages, and leads and bookings in your contacts and calendar.',
    note: 'Client work, so no public screens',
  },
  {
    problem: 'run',
    title: 'Full products and platforms',
    lead: 'Complete web products: public site, admin panel, roles, payments and dashboards, with AI where it helps.',
    good: 'Agencies, schools and shops replacing spreadsheets and separate tools.',
    get: 'A production app on your own accounts, with deployment, documentation and the source code.',
    examples: ['acadex', 'propel', 'pairly'],
  },
];

const ways = [
  ['Fixed-price package', 'Ready-made packages on Upwork for a RAG assistant, an AI agent or a GoHighLevel bot, with a set price and delivery date.'],
  ['Hourly', 'For work inside an existing codebase or when the scope is still moving. Billed through Upwork.'],
  ['Ongoing', 'A set number of hours each week to keep improving a product after launch.'],
];

const faq = [
  ['Who pays for the AI usage?', 'You use your own API key with the AI provider and pay them directly. For most small businesses that is a few dollars a month. I help you set it up and add limits so costs cannot run away.'],
  ['Do I own the code?', 'Yes. The code, the accounts and the data are yours from the start.'],
  ['Can you work with the app I already have?', 'Usually yes. An agent or assistant calls the APIs and data you already have. If something is missing I tell you before we start.'],
  ['What about time zones?', 'I am in Karachi, UTC+5. My evening overlaps the US morning and most of the working day in the UK, Europe and the Gulf.'],
  ['Will the AI make things up?', 'Assistants answer only from your content and say when they do not know. Agents can only use the actions you allow, and changes wait for a person to confirm.'],
];

const Services = () => (
  <>
    <div className="wrap">
      <header className="ph">
        <h1 className="h">Services</h1>
        <p>Four kinds of work I take on. Every project ends with code you own and a system your team can run without me.</p>
      </header>

      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="svc">
          {services.map((s) => (
            <article key={s.title} style={{ '--c': problemColor(s.problem) }}>
              <div>
                <h2 className="h">
                  <i />
                  {s.title}
                </h2>
                <p className="lead">{s.lead}</p>
              </div>
              <dl>
                <div>
                  <dt>Good for</dt>
                  <dd>{s.good}</dd>
                </div>
                <div>
                  <dt>What you get</dt>
                  <dd>{s.get}</dd>
                </div>
                <div>
                  <dt>See it in</dt>
                  <dd>{s.examples ? <Examples keys={s.examples} /> : s.note}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <h2 className="h">Ways to work together</h2>
          <p>Pick what fits the size of the job.</p>
        </div>
        <div className="ways">
          {ways.map(([title, text]) => (
            <div key={title}>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <a className="btn go" href={portfolioData.personalInfo.upwork} target="_blank" rel="noopener noreferrer">
            See my Upwork profile and packages
          </a>
        </p>
      </section>

      <section className="sec faq" style={{ paddingTop: 0 }}>
        <div className="sh">
          <h2 className="h">Questions clients ask</h2>
          <p />
        </div>
        {faq.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </div>
    <Cta />
  </>
);

export default Services;

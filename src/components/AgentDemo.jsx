import React, { useCallback, useEffect, useRef, useState } from 'react';

const QUESTION = 'Find me a white shirt for the office, size M';
const CHAR_MS = 28;

const flow = [
  ['The customer asks in plain words', 'In English, Urdu or Roman Urdu.'],
  ['The agent uses the store\'s own tools', 'Each step is a real API call on the server.'],
  ['It prepares the order and stops', 'The server refuses to place it without a yes.'],
  ['The customer confirms, then it acts', 'The order is placed and tracked in the same chat.'],
];

const initial = { chars: 0, typing: false, step: 0, outcome: null };

/**
 * A replay of Iris, the shopping agent in Nowhere: the question types itself,
 * the tool calls appear one by one, and the order waits for "Confirm order".
 * Starts when scrolled into view; with reduced motion everything shows at once.
 */
const AgentDemo = () => {
  const chatRef = useRef(null);
  const timers = useRef([]);
  const [state, setState] = useState(initial);
  const { chars, typing, step, outcome } = state;

  const play = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const at = (ms, update) =>
      timers.current.push(setTimeout(() => setState((s) => ({ ...s, ...update(s) })), reduce ? 0 : ms));

    if (reduce) {
      setState({ ...initial, chars: QUESTION.length });
    } else {
      setState({ ...initial, typing: true });
      for (let i = 1; i <= QUESTION.length; i += 1) at((i - 1) * CHAR_MS, () => ({ chars: i }));
      at(QUESTION.length * CHAR_MS + 100, () => ({ typing: false }));
    }

    const s = reduce ? 0 : QUESTION.length * CHAR_MS + 500;
    at(s, () => ({ step: 1 })); // search_products
    at(s + 700, () => ({ step: 2 })); // add_to_cart
    at(s + 1400, () => ({ step: 3 })); // prepare_checkout, waiting
    at(s + 1900, () => ({ step: 4 })); // order summary
    at(s + 2400, () => ({ step: 5 })); // confirm or not
  }, []);

  useEffect(() => {
    const box = chatRef.current;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          play();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(box);
    const pending = timers.current;
    return () => {
      io.disconnect();
      pending.forEach(clearTimeout);
      timers.current.forEach(clearTimeout);
    };
  }, [play]);

  const on = [chars > 0 || typing, step >= 1, step >= 3, outcome === 'yes'];
  const confirmed = outcome === 'yes';

  return (
    <section className="sec agentsec">
      <div className="wrap">
        <div className="sh">
          <h2 className="h">Watch an agent finish a task</h2>
          <p>
            The real flow of Iris, the shopping agent in Nowhere. It plays when you scroll here, and you can press
            the buttons. The same confirm-first rule runs in Propel's team assistant.
          </p>
        </div>
        <div className="agent">
          <ol className="flow">
            {flow.map(([title, text], i) => (
              <li key={title} className={on[i] ? 'on' : undefined}>
                <div>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className="chat" aria-label="Example conversation with Iris">
            <header>
              <b>
                <i />
                Iris, shopping agent in Nowhere
              </b>
              <button type="button" onClick={play}>
                Replay
              </button>
            </header>
            <div ref={chatRef} className="body" aria-live="polite">
              {(chars > 0 || typing) && (
                // Hidden from screen readers while typing, so it is read once
                <p className={`bubble${typing ? ' typing' : ''}`} aria-hidden={typing || undefined}>
                  {QUESTION.slice(0, chars)}
                </p>
              )}
              {step >= 1 && (
                <div className="call">
                  <i>✓</i>
                  <span>
                    search_products <em>"white shirt", 4 found</em>
                  </span>
                </div>
              )}
              {step >= 2 && (
                <div className="call">
                  <i>✓</i>
                  <span>
                    add_to_cart <em>Classic Oxford, size M</em>
                  </span>
                </div>
              )}
              {step >= 3 &&
                (confirmed ? (
                  <div className="call">
                    <i>✓</i>
                    <span>
                      confirm_pending_action <em>approved by the customer</em>
                    </span>
                  </div>
                ) : (
                  <div className="call w">
                    <i>●</i>
                    <span>
                      prepare_checkout <em>waiting for the customer</em>
                    </span>
                  </div>
                ))}
              {step >= 4 && (
                <div className="sum">
                  <div className="r">
                    <span>Classic Oxford Button-Down Shirt, M</span>
                    <b>Rs. 3,499</b>
                  </div>
                  <div className="r">
                    <span>Delivery</span>
                    <b>Rs. 250</b>
                  </div>
                  <div className="r t">
                    <span>Total, cash on delivery</span>
                    <b>Rs. 3,749</b>
                  </div>
                </div>
              )}
              {step >= 5 && !confirmed && (
                <div className="ask">
                  <p>
                    {outcome === 'no'
                      ? 'Okay. Nothing was ordered and the bag is saved.'
                      : 'Nothing is ordered until the customer says yes.'}
                  </p>
                  <button className="btn go" type="button" onClick={() => setState((s) => ({ ...s, outcome: 'yes' }))}>
                    Confirm order
                  </button>
                  <button className="btn line" type="button" onClick={() => setState((s) => ({ ...s, outcome: 'no' }))}>
                    Not now
                  </button>
                </div>
              )}
              {confirmed && (
                <div className="ok" role="status">
                  <b>Order NW-E44AHPHS placed</b>
                  Cash on delivery. The customer can track it from this chat.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentDemo;

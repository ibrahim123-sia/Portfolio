import { useEffect, useState } from 'react';

const formatter = (() => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Karachi',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return null;
  }
})();

const karachiNow = () => (formatter ? formatter.format(new Date()) : null);

/** Current time in Karachi ("4:05 pm"), refreshed every 30 seconds, or null. */
export const useKarachiTime = () => {
  const [time, setTime] = useState(karachiNow);
  useEffect(() => {
    const id = setInterval(() => setTime(karachiNow()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
};

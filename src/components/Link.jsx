import React, { useCallback, useEffect, useState } from 'react';
import { RouterContext, normalizePath, useRouter } from '../router';

const readLocation = (key = 0) => ({
  path: normalizePath(window.location.pathname),
  hash: window.location.hash,
  key,
});

export const RouterProvider = ({ children }) => {
  const [location, setLocation] = useState(() => readLocation());

  useEffect(() => {
    const onPop = () => setLocation((prev) => readLocation(prev.key + 1));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin);
    if (url.pathname + url.hash !== window.location.pathname + window.location.hash) {
      window.history.pushState(null, '', url.pathname + url.hash);
    }
    setLocation((prev) => readLocation(prev.key + 1));
  }, []);

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

/**
 * In-app link: a real <a href> (crawlable, opens in a new tab with a modifier
 * key) that navigates without a page reload on a plain click.
 */
const Link = ({ to, onClick, children, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default Link;

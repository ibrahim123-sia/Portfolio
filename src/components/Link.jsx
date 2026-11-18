import React, { useCallback, useEffect, useState } from 'react';
import { RouterContext, normalizePath, useRouter } from '../router';

const readLocation = (key = 0, scroll = true) => ({
  path: normalizePath(window.location.pathname),
  search: window.location.search,
  hash: window.location.hash,
  key,
  scroll,
});

export const RouterProvider = ({ children }) => {
  const [location, setLocation] = useState(() => readLocation());

  useEffect(() => {
    const onPop = () => setLocation((prev) => readLocation(prev.key + 1));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // `replace` swaps the history entry (e.g. a filter change); `scroll: false`
  // keeps the reader where they are.
  const navigate = useCallback((to, { replace = false, scroll = true } = {}) => {
    const url = new URL(to, window.location.origin);
    const next = url.pathname + url.search + url.hash;
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (next !== current) {
      window.history[replace ? 'replaceState' : 'pushState'](null, '', next);
    }
    setLocation((prev) => readLocation(prev.key + 1, scroll));
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

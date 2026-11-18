import { createContext, useContext } from 'react';

// Minimal client-side routing on the History API (no router dependency).
// `location` is { path, search, hash, key, scroll }; `key` changes on every
// navigation so a repeated click on the same link still scrolls.
export const RouterContext = createContext({
  location: { path: '/', search: '', hash: '', key: 0, scroll: true },
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

// "/projects/" -> "/projects"
export const normalizePath = (path) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

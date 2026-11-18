import React from 'react';
import Link from '../components/Link';

const NotFound = () => (
  <section className="page py-24 sm:py-32">
    <p className="eyebrow">404</p>
    <h1 className="mt-2 text-3xl font-bold text-content sm:text-4xl">Page not found</h1>
    <p className="mt-4 max-w-xl text-lg text-muted">
      This page doesn't exist. It may have moved when the site was updated.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Link to="/" className="btn-primary">
        Go to the home page
      </Link>
      <Link to="/projects" className="btn-secondary">
        See projects
      </Link>
    </div>
  </section>
);

export default NotFound;

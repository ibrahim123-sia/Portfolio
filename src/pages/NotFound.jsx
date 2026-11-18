import React from 'react';
import Link from '../components/Link';

const NotFound = () => (
  <section className="page py-24 sm:py-32">
    <p className="label">404</p>
    <h1 className="display mt-4 text-6xl sm:text-7xl">Page not found</h1>
    <p className="mt-6 max-w-xl text-lg text-muted">
      This page doesn't exist. It may have moved when the site was updated.
    </p>
    <div className="mt-10 flex flex-wrap gap-3">
      <Link to="/" className="btn-primary">
        Go to the home page
      </Link>
      <Link to="/projects" className="btn-secondary">
        See all projects
      </Link>
    </div>
  </section>
);

export default NotFound;

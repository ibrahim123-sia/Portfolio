import React from 'react';
import Link from '../components/Link';

const NotFound = () => (
  <div className="wrap">
    <header className="ph">
      <h1 className="h">Page not found</h1>
      <p>
        That page does not exist. <Link to="/projects">See all work</Link>.
      </p>
    </header>
    <div style={{ height: 120 }} />
  </div>
);

export default NotFound;

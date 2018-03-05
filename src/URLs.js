import React from 'react';
import { compose } from 'rrrr';
import { Link, Route } from 'react-router-dom';

const URLs = ({ routerProps }) => (
  <div className="urls">
    <h1>URLs</h1>
    <h2>Use react-router as if you would in any other app!</h2>
    <h3>You are currently viewing: {routerProps.location.pathname}</h3>
    <div className="links">
      <Link to="/foo">Go to: /foo</Link>
      <Link to="/bar">Go to: /bar</Link>
      <Link to="/baz">Go to: /baz</Link>
    </div>
    <Route exact path="/foo" render={() => <p>Content for /foo!</p>} />
    <Route exact path="/bar" render={() => <p>Content for /bar!</p>} />
    <Route exact path="/baz" render={() => <p>Content for /baz!</p>} />
  </div>
);

export default compose(URLs);

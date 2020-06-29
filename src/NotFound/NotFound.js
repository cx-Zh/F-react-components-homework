import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <main className="Chat">
        <header className="ChatHeader">
          <h1>Not Found</h1>
        </header>
        <section className="Welcome">
          <h1>Coming Soon...</h1>
          <Link to="/">Back to Home</Link>
        </section>
      </main>
    );
  }
}

export default NotFound;

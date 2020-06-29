import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopData from '../data/shop.json';
import './Welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <main className="Chat">
        <header className="ChatHeader">
          <h1>Welcome</h1>
        </header>
        <section className="Welcome">
          <img src={shopData.logo} alt="logo" />
          <h2>{shopData.name}</h2>
        </section>
        <footer className="WelcomeFooter">
          <nav>
            <ul>
              <li>
                <Link to="/chat" className="link">
                  客服
                </Link>
              </li>
              <div className="line" />
              <li>
                <Link to="/notfound" className="link">
                  6.18活动
                </Link>
              </li>
              <div className="line" />
              <li>
                <Link to="/notfound" className="link">
                  关于我们
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    );
  }
}

export default Welcome;

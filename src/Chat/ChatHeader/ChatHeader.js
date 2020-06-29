import React, { Component } from 'react';
import './ChatHeader.scss';
import { Link } from 'react-router-dom';

class ChatHeader extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <header className="ChatHeader">
        <Link to="/">&lt;</Link>
        <div className="logo" style={logoStyle} />
        <h1>{shop.name}</h1>
      </header>
    );
  }
}

export default ChatHeader;

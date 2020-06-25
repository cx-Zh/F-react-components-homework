import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({ message: event.target.value });
  };

  // eslint-disable-next-line no-unused-vars
  sendMessage = (event) => {
    this.props.onInputChanged(this.state.message);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleInputChange} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;

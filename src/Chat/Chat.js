import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  setMessage = (message) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const temp = this.state.messages;
    temp.push({ text: message, role: 'CUSTOMER', tags: [''] });

    answersData.map((data) => {
      // data.tags.map(tag => {
      //   if(message.indexOf(tag)!== -1){
      //     temp.push(data);
      //     console.log(tag);
      //   }
      //   return tag;
      // })
      for (let i = 0; i < data.tags.length; i += 1) {
        if (message.indexOf(data.tags[i]) !== -1) {
          temp.push(data);
          break;
        }
      }
      return data;
    });
    this.setState({ messages: temp });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onInputChanged={this.setMessage} />
      </main>
    );
  }
}

export default Chat;

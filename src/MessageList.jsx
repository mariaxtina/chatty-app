import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div className="message-list">
      {
        this.props.messages.map(function (message, key) {
          return <Message key={key} message={message} id={message.id} />;
        })
      }
      </div>
    );
  }
});

export default MessageList;


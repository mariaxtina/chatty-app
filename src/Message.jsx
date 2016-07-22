import React, {Component} from 'react';

const Message = React.createClass ({
  render() {
    console.log("Rendering <Message/>");
    return (
      <div className="message-body"> <span className="user">{this.props.message.username}: </span>
      <span className = "message"> {this.props.message.message}</span></div>

    );
  }
});

export default Message;

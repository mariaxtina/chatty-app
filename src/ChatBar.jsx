import React, {Component} from 'react';

const ChatBar = React.createClass ({
  render() {
    return (
      <footer className = "input-bar">
      <input className="username" placeholder="Enter username here" />
      <input className="message" placeholder="Enter msg here"/>
      </footer>
    );
  }
});
export default ChatBar;

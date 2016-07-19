import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
// import MessageList from './MessageList.jsx';

const App = React.createClass ({
  render() {
    return (
      <div>
      <nav><h1>Chatty</h1></nav>
      <Message/>
      <ChatBar/>
      </div>

    );
  }
});

export default App;

import React, {Component} from 'react';

const Message = React.createClass ({
  render() {
    return (
      <div className="message-body"> <span className="user"> Anonymous: </span><span className = "message"> Hello</span></div>

    );
  }
});

export default Message;

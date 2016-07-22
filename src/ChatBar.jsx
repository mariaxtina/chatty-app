import React, {Component} from 'react';

const ChatBar = React.createClass ({
  // render() {
  //   console.log("Rendering <ChatBar/>");
  //   return (
  //

  //     <input className="username" placeholder="Enter username here" value={this.props.username} />
  //     <input className="message" placeholder="Enter message here" value={this.props.content} />
  //     </footer>
  //   );
  // }
  getInitialState: function() {
    return {
      new_message: '',
      new_username: this.props.username
    };
  },

  _handleChange: function(event) {
    this.setState({new_message: event.target.value});
  },

  _onChange: function(event) {
    this.setState({new_username: event.target.value});
  },

  _onUsernameBlur: function(event) {
    this.props.onNewUsername(this.state.new_username);
  },

  _onSubmit: function(charCode) {
    console.log(charCode);
    if(charCode === 13) {
      this.props.onNewMessage(this.state.new_username, this.state.new_message);
    }
  },

  render: function() {
    return (
      <footer className="input-bar">
      <input className="username"
      placeholder="Enter username here"
      onKeyPress={(event)=>this._onSubmit(event.charCode)}
      onBlur={(event)=>this._onUsernameBlur(event)}
      value={this.state.new_username}
      onChange={this._onChange}
      />
      <input
        type="text"
        className="message"
        onKeyPress={(event)=>this._onSubmit(event.charCode)}
        value={this.state.new_message}
        onChange={this._handleChange}
      />
      </footer>
    );
  }
});



export default ChatBar;

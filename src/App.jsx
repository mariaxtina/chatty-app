import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

var socket = new WebSocket("ws://localhost:4000/socketserver")


// let data = {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       id: 1,
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//     },
//     {
//       id:2,
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
//     }
//   ]
// };

var data = {
    currentUser: {name: "Bob"},
    messages: [], // messages coming from the server will be stored here as they arrive
    onlineClients: 0
  };

const App = React.createClass ({
getInitialState: function() {
     // return Object.assign({}, data); // initialState
    return {data: data};
  },

componentDidMount: function() {
  console.log("componentDidMount <App />");

  socket.onmessage = (event) => {
    console.log("Received message: ", event.data);
    var dataObj = JSON.parse(event.data);
    // console.log(dataObj.message);

    switch(dataObj.type) {
      case "incomingMessage":
        // handle incoming message
        let newMessageList = this.state.data.messages;
        newMessageList.push(dataObj);
        console.log(newMessageList);
        // this.state.data.messages.push(dataObj);
        this.setState({
          data: {
            messages: newMessageList,
            currentUser: this.state.data.currentUser,
            onlineClients: dataObj.content
          }
        })

        break;
      case "incomingNotification":
        // handle incoming notification
        alert(dataObj.message);
        break;
      case "onlineClients":
        console.log(dataObj.content);
        this.setState({
          data: {
            messages: this.state.data.messages,
            currentUser: this.state.data.currentUser,
            onlineClients: dataObj.content
          }
        });
      break;
      default:
        throw new Error("Unknown event type " + data.type);
    }


  },

  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    //this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
    // Update the state of the app component. This will call render()
    //this.setState({data: this.state.data})
  }, 3000);

},

_onNewMessage: function(newUsername, newMessage) {

  socket.send(JSON.stringify({type: "postMessage", username: newUsername, message: newMessage}));

},

_onNewUsername: function(newUsername) {

  socket.send(JSON.stringify({
    type: "postNotification",
    username: newUsername,
    message: `${data.currentUser.name} changed their name to ${newUsername}`
  }));

},

render: function() {
  console.log("Rendering <App/>");
    return (
      <div>
      <nav><h1>Chatty</h1><span> {this.state.data.onlineClients} users online. </span></nav>
      <MessageList messages={data.messages}/>
      <ChatBar
        onNewMessage={(new_username, new_message) => this._onNewMessage(new_username, new_message)}
        username={data.currentUser.name}
        onNewUsername={(new_username) => this._onNewUsername(new_username)}
      />
      </div>

      );
    }
});



export default App;

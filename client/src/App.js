import Chessboard from "./components/Chessboard.js";
import './App.css';
// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// let endPoint = "http://localhost:5000";
// let socket = io.connect(`${endPoint}`);

export default function App() {
  // Notice the paired variables in the left hand bracket.
  // The first variable is like a property where you can set a value to it.
  // The second variable is the setter method name that you will use to
  // set the value of the first variable.
  // The value in the useState() is your initial default value.
  // const [messages, setMessages] = useState(["Hello And Welcome"]);
  // const [message, setMessage] = useState("");
  // const [connectionStatus, setConnectionStatus] = useState("")

  // This method gets autocalled whenever the messages list length changes.
  // useEffect(() => {
  //   getMessages();
  // }, [messages.length]);

  // useEffect(() => {
  //   getConnectionStatus();
  // }, [connectionStatus]);

  // const getConnectionStatus = () => {
  //   socket.on("my response", msg => {
  //     setConnectionStatus(msg.data);
  //   })
  // }
  
  // This is called by the useEffect method whenever the messages list length changes also.
  // This appends the message sent from the server side to the messages list using
  // setMessages to change the state.
  // const getMessages = () => {
  //   socket.on("message", msg => {
  //     setMessages([...messages, msg]);
  //   })
  // }

  // Whenever there is a change in the text input field,
  // this sets that value as the current "message".
  // const onChange = e => {
  //   setMessage(e.target.value);
  // };

  // const onClick = () => {
  //   if (message !== "") {
  //     // When send message button is clicked, this emits the message to
  //     // our server side.
  //     socket.emit("message", message);
  //     // This clears the message field once the message is sent using the client.
  //     setMessage("");
  //   } else {
  //     alert("Please Add A Message");
  //   }
  // };

  return (
    <div className="App">
      <div id="app">
        {/* Chessboard component */}
        <Chessboard/>
      </div>
      {/* <div>
        {messages.length > 0 && 
          messages.map(msg => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
        <input value={message} name="message" onChange={e => onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
        <div>
          <p>Status: {connectionStatus}</p>
        </div>
      </div> */}
    </div>
  );
}
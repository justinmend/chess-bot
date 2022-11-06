import Chessboard from "./components/Chessboard.js";
import './App.css';
import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// let endPoint = "http://localhost:5000";
// let socket = io.connect(`${endPoint}`);

export default function App() {
  // const [connectionStatus, setConnectionStatus] = useState("")

  // useEffect(() => {
  //   getConnectionStatus();
  // }, [connectionStatus]);

  // const getConnectionStatus = () => {
  //   socket.on("my response", msg => {
  //     setConnectionStatus(msg.data);
  //   })
  // }

  return (
    <div className="App">
      <div id="app">
        <Chessboard/>
      </div>
      {/* <div>
        <div>
          <p>Connection status to flask server: {connectionStatus}</p>
        </div>
      </div> */}
    </div>
  );
}
import React from "react";
import { useState } from "react";
import "./App.css";
import { FullInput } from "./components/FullInput";

function App() {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
    { message: "message5" },
  ]);

  const addMessage = (title: string) => {
    console.log(title);
  };

  return (
    <div className={"App"}>
      {/* <div>
        <input type="text" />
        <button>+</button>
      </div> */}

      <FullInput addMessage={addMessage} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;

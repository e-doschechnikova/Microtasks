import React from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input1";

function App() {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
    { message: "message5" },
  ]);

  let [title, setTitle] = useState("");

  const addMessage = (title: string) => {
    let newMwssage = { message: title };
    setMessage([newMwssage, ...message]);
  };

  const callbackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div className={"App"}>
      {/* <FullInput addMessage={addMessage} /> */}

      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} callback={callbackButtonHandler} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;

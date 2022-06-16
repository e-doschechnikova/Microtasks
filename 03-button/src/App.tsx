import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const Button1Foo = (subscriber: string, age: number, adress: string) => {
    console.log(subscriber, age, adress);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };

  const Button3Foo = () => {
    console.log("I`m stupid button");
  };

  return (
    <div className="App">
      <Button
        name={"MyYouTubeChanel 1"}
        callBack={() => Button1Foo("I`m Lama", 21, "live in  Moscow")}
      />
      <Button
        name={"MyYouTubeChanel 2"}
        callBack={() => Button2Foo("I`m Lima")}
      />
      <Button name={"STUPID"} callBack={Button3Foo} />
    </div>
  );
}

export default App;

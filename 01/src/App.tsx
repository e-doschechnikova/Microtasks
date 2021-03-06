import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Header title={"HEW HEADER"} />
      <Body titleForBody={"NEW BODY"} />
      <Footer titleForFooter={"NEW FOOTER"} />
    </div>
  );
}

export default App;

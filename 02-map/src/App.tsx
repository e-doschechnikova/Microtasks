import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./NewComponent";
import { topCars } from "./NewComponent";

function App() {
  return (
    <div className="App">
      <NewComponent topCars={topCars} />
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import { NewComponent } from "./NewComponent";

type FilterType = "All" | "RUBLS" | "Dollars";

function App() {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState("All");

  let currentMoney = money;

  if (filter === "Dollars") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === "Dollars"
    );
  }
  if (filter === "RUBLS") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === "RUBLS"
    );
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <div>
      <NewComponent />
      {/* <ul>
        {currentMoney.map(
          (
            objeFromMoneyArr: {
              banknots: string;
              value: number;
              number: string;
            },
            index
          ) => {
            return (
              <li key={index}>
                <span>{objeFromMoneyArr.banknots}</span>

                <span>{objeFromMoneyArr.value}</span>

                <span>{objeFromMoneyArr.number}</span>
              </li>
            );
          }
        )}
      </ul>
      <div style={{ marginLeft: "35px" }}>
        <button onClick={() => onClickFilterHandler("All")}>ALL</button>
        <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
        <button onClick={() => onClickFilterHandler("Dollars")}>DOLLARS</button>
      </div> */}
    </div>
  );
}

export default App;

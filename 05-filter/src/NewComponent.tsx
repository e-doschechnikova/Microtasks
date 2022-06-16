import React from "react";

export const NewComponent = () => {
  return (
    <div>
      <ul>
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
      </div>
    </div>
  );
};

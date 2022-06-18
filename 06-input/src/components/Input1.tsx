import React, { ChangeEvent } from "react";

type InputPropsTyoe = {
  title: string;
  setTitle: (title: string) => void;
};

export const Input = (props: InputPropsTyoe) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value);
  };
  return <input value={props.title} onChange={onChangeInputHandler} />;
};

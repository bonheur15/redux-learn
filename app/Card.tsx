"use client";
import { useState } from "react";
import { store, increment } from "./reduxSlicer/main";
import { useSelector } from "react-redux";

export default function Card() {
  const [value, setValue] = useState(5);
  store.subscribe(() => {
    setValue(store.getState().value);
  });

  return (
    <>
      <div className="px-[20px]">{value}</div>
      <div
        onClick={() => {
          store.dispatch(increment());
        }}
        className=" px-[10px] py-[10px] bg-black text-white w-fit"
      >
        Click me!
      </div>
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const ans = useSelector((state) => state.calculator.display);

  return (
    <div className="screen h-1/3 flex flex-col bg-[#30394f] rounded-t-xl">
      <div
        className="result h-full flex justify-end text-white h-full px-2 items-center text-6xl overflow-hidden"
        id="display"
      >
        {ans}
      </div>
    </div>
  );
}

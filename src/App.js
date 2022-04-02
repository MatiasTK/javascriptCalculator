import React from "react";
import './App.css';

import Display from "./components/Display";
import Keyboard from "./components/keyboard";

export default function App() {
  return (
    <div className="main h-screen bg-gradient-to-br from-green-400 to-blue-500 fade-in" >
      <div className="flex justify-center items-center h-screen">
        <div className="calculator w-80 h-[30rem] shadow-2xl scale-up-center">
          <Display />
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

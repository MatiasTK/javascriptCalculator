import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDisplay, reset } from "../app/slice";

export default function Keyboard() {
  const history = useSelector((state) => state.calculator.display);
  const dispatch = useDispatch();

  const [decimalAllowed, setDecimalAllowed] = React.useState(true);

  const isOperator = (number) => {
    if (number === "+" || number === "-" || number === "/" || number === "*") {
      return true;
    } else {
      return false;
    }
  };

  const updateHistory = (e) => {
    let newHistory = history;
    let lastDigit = history[history.length - 1];
    if (isOperator(lastDigit)) {
      setDecimalAllowed(true);
    }

    if (e !== "-") {
      if (isOperator(lastDigit) && isOperator(e)) {
        newHistory = newHistory.slice(0, -1);
        if (lastDigit === "-") {
          newHistory = newHistory.slice(0, -1);
        }
      }
    }

    if (lastDigit === "0" && e === "0") {
      return;
    }
    if (!decimalAllowed && e === ".") {
      return;
    }
    if (e === ".") {
      setDecimalAllowed(false);
    }

    if (history === 0) {
      dispatch(changeDisplay(e));
    } else {
      newHistory += e;
      dispatch(changeDisplay(newHistory));
    }
  };

  const updateHistoryPercentage = () => {
    let actual = Number(history);
    dispatch(changeDisplay(actual / 100));
  };

  const updateHistorySymbol = () => {
    let actual = Number(history);
    dispatch(changeDisplay(actual * -1));
  };

  const updateHistoryDelete = () => {
    let newHistory = history.slice(0, -1);
    dispatch(changeDisplay(newHistory));
  };

  const updateResult = () => {
    // eslint-disable-next-line no-eval
    let ans = eval(history);
    dispatch(reset());
    dispatch(changeDisplay(ans));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (e) => {
    let key = e.key;
    if (isOperator(key) || Number(key) || key === ".") {
      updateHistory(key);
    } else if (key === "%") {
      updateHistoryPercentage();
    } else if (key === "Backspace") {
      updateHistoryDelete();
    } else if (key === "Enter") {
      updateResult();
    }
  };

  React.useEffect(() => {
    document.onkeydown = handleKeyDown;
  }, [handleKeyDown]);

  return (
    <div className="keyboard h-2/3 grid grid-rows-5">
      <div className="grid grid-cols-4 h-full">
        <div
          className="bg-[#ccc] text-xl flex items-center justify-center border border-[#c2c2c2]/[.50] cursor-pointer hover:bg-[#b4b4b4]"
          id="clear"
          onClick={() => {
            dispatch(reset());
            setDecimalAllowed(true);
          }}
        >
          C
        </div>
        <div
          className="bg-[#ccc] text-xl flex items-center justify-center border border-[#c2c2c2]/[.50] cursor-pointer hover:bg-[#b4b4b4]"
          onClick={() => updateHistorySymbol()}
        >
          +/-
        </div>
        <div
          className="bg-[#ccc] text-xl flex items-center justify-center border border-[#c2c2c2]/[.50] cursor-pointer hover:bg-[#b4b4b4]"
          onClick={() => updateHistoryPercentage()}
        >
          %
        </div>
        <div
          className="bg-green-500 text-xl flex items-center justify-center border border-green-500 cursor-pointer hover:bg-green-600"
          id="divide"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          /
        </div>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="seven"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          7
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="eight"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          8
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="nine"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          9
        </div>
        <div
          className="bg-green-500 text-xl flex items-center justify-center border border-green-500 cursor-pointer hover:bg-green-600"
          id="multiply"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          *
        </div>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="four"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          4
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="five"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          5
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="six"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          6
        </div>
        <div
          className="bg-green-500 text-xl flex items-center justify-center border border-green-500 cursor-pointer hover:bg-green-600"
          id="subtract"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          -
        </div>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="one"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          1
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="two"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          2
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="three"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          3
        </div>
        <div
          className="bg-green-500 text-xl flex items-center justify-center border border-green-500 cursor-pointer hover:bg-green-600"
          id="add"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          +
        </div>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div
          className="bg-white text-xl flex items-center justify-center rounded-bl-lg cursor-pointer hover:bg-[#d5d5d5]"
          id="zero"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          0
        </div>
        <div
          className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]"
          id="decimal"
          onClick={(e) => updateHistory(e.target.innerHTML)}
        >
          .
        </div>
        <div className="bg-white text-xl flex items-center justify-center border border-[#e3e3e3]/[.50] cursor-pointer hover:bg-[#d5d5d5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-backspace"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => updateHistoryDelete()}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
            <path d="M12 10l4 4m0 -4l-4 4" />
          </svg>
        </div>
        <div
          className="bg-blue-500 text-xl flex items-center justify-center rounded-br-lg cursor-pointer hover:bg-blue-600"
          id="equals"
          onClick={(e) => updateResult(e)}
        >
          =
        </div>
      </div>
    </div>
  );
}

import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import { useReducer } from "react";
import { initialState, reducer } from "./store/reducers.jsx";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  result,
  memoryAdd,
  memoryRecall,
  memoryClear,
} from "./store/actions.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperationClick = (operation) => {
    dispatch(changeOperation(operation));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };
  const handleResult = () => {
    dispatch(result());
  };
  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };
  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };
  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  return (
    <div>
      <nav className="text-center py-6 px-4 bg-stone-800 text-white text-xl/none">
        Reducer Challenge
      </nav>

      <div className="mt-12 mx-auto w-75">
        <form name="Cal">
          <TotalDisplay value={state.total} />
          <div className="flex justify-between bg-black text-white text-sm px-3 py-2">
            <span id="operation">
              <b>Operation: </b>
              {state.operation}
            </span>
            <span id="memory">
              <b>Memory:</b> {state.memory}
            </span>
          </div>
          <div className="flex">
            <CalcButton value={"M+"} onClick={handleMemoryAdd} />
            <CalcButton value={"MR"} onClick={handleMemoryRecall} />
            <CalcButton value={"MC"} onClick={handleMemoryClear} />
          </div>
          <div className="flex">
            <CalcButton value={1} onClick={() => handleNumberClick(1)} />
            <CalcButton value={2} onClick={() => handleNumberClick(2)} />
            <CalcButton value={3} onClick={() => handleNumberClick(3)} />
          </div>

          <div className="flex">
            <CalcButton value={4} onClick={() => handleNumberClick(4)} />
            <CalcButton value={5} onClick={() => handleNumberClick(5)} />
            <CalcButton value={6} onClick={() => handleNumberClick(6)} />
          </div>

          <div className="flex">
            <CalcButton value={7} onClick={() => handleNumberClick(7)} />
            <CalcButton value={8} onClick={() => handleNumberClick(8)} />
            <CalcButton value={9} onClick={() => handleNumberClick(9)} />
          </div>
          <div className="flex">
            <CalcButton value={"+"} onClick={() => handleOperationClick("+")} />
            <CalcButton value={0} onClick={() => handleNumberClick(0)} />
            <CalcButton value={"-"} onClick={() => handleOperationClick("-")} />
          </div>
          <div className="flex">
            <CalcButton value={"*"} onClick={() => handleOperationClick("*")} />
            <CalcButton value={"/"} onClick={() => handleOperationClick("/")} />
            <CalcButton value={"CE"} onClick={handleClearDisplay} />
          </div>

          <div className="flex">
            <CalcButton value={"="} onClick={handleResult} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

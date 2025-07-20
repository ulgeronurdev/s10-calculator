import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";

function App() {
  return (
    <div>
      <nav className="text-center py-6 px-4 bg-stone-800 text-white text-xl/none">
        Reducer Challenge
      </nav>

      <div className="mt-12 mx-auto w-75">
        <form name="Cal">
          <TotalDisplay value={"X"} />
          <div className="flex justify-between bg-black text-white text-sm px-3 py-2">
            <span id="operation">
              <b>Operation:</b> X
            </span>
            <span id="memory">
              <b>Memory:</b> X
            </span>
          </div>
          <div className="flex">
            <CalcButton value={"M+"} />
            <CalcButton value={"MR"} />
            <CalcButton value={"MC"} />
          </div>
          <div className="flex">
            <CalcButton value={1} />
            <CalcButton value={2} />
            <CalcButton value={3} />
          </div>

          <div className="flex">
            <CalcButton value={4} />
            <CalcButton value={5} />
            <CalcButton value={6} />
          </div>

          <div className="flex">
            <CalcButton value={7} />
            <CalcButton value={8} />
            <CalcButton value={9} />
          </div>
          <div className="flex">
            <CalcButton value={"+"} />
            <CalcButton value={0} />
            <CalcButton value={"-"} />
          </div>
          <div className="flex">
            <CalcButton value={"*"} />
            <CalcButton value={"/"} />
            <CalcButton value={"CE"} />
          </div>

          <div className="flex">
            <CalcButton value={"="} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

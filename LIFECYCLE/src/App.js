import "./App.css";
import Clock from "./Components/ClassLifecycle/Clock/Clock";
import FetchData from "./Components/FunctionLifecycle/FetchData/FetchData";

function App() {
  return (
    <div className="App">
      <Clock locale="bn-BD"></Clock>
      <FetchData></FetchData>
    </div>
  );
}

export default App;

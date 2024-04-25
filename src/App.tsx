import "./App.css";
import Counter from "./component/Counter";

//store
interface counterState {
  value: Number;
}

//User state
interface userState {
  isSignedIn: boolean;
}

//actions
const increment = { type: "INCREMENT", payload: 1 };
const decrement = { type: "DECREMENT", payload: 1 };

function App() {
  return (
    <>
      <h2>Redux app</h2>
      <Counter />
    </>
  );
}

export default App;

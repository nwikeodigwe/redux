import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/state";
import { decrement, incrementAsync } from "../store/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Counter;

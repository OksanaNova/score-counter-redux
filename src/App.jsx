import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";


function App() {

  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <p>SCORE: {count}</p>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementByAmount(5))} >+ 5</button>
    </div>
  )
}

export default App

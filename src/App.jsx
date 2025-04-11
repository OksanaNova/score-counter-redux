import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount, multiplyByAmount, divideByAmount } from "./redux/counter";


function App() {

  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <p>SCORE: {count}</p>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementByAmount(5))} >+ 5</button>

      <button onClick={() => dispatch(decrementByAmount(5))}>- 5</button>

      <button onClick={() => dispatch(multiplyByAmount(5))}>* 5</button>

      <button onClick={() => dispatch(divideByAmount(5))}>/ 5</button>


    </div>
  )
}

export default App

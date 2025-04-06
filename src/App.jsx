import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";


function App() {

  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <p>SCORE</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default App

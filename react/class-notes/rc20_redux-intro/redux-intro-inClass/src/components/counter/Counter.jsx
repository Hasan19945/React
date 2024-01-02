import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"

import { INC, DEC, CLR } from "../../store/counterReducer"

const Counter = () => {
  //? consuming
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch({ type: INC })}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch({ type: CLR })}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch({ type: DEC })}
        >
          decrease
        </button>
      </div>
    </div>
  )
}

export default Counter

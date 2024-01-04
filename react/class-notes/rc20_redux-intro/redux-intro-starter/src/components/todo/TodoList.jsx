import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clearTodo } from "../../store/todoReducer"

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList)
  const dispatch = useDispatch()

  const handleClearList = () => {
    dispatch(clearTodo())
  }

  return (
    <div>
      <div>
        {todoList?.map((todo, index) => (
          <TodoItem key={index} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList

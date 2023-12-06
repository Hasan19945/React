import { useState } from "react"

const MouseEvent = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseLeave={() => setVisible(false)}
        onMouseEnter={() => setVisible(true)}
      >
        todo item 1
      </div>

      {/* Conditional Rendering */}
      {visible && <span>Aciklama</span>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        todo item 2
      </div>
      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>
      <p>X: and Y:</p>
    </div>
  )
}

export default MouseEvent

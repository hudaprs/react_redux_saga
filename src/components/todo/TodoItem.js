import React from "react"
import PropTypes from "prop-types"

function TodoItem({ todo, checkTodo, deleteTodo, setCurrent }) {
  return (
    <div className='todo-item' onDoubleClick={() => setCurrent(todo)}>
      <div>
        <input
          type='checkbox'
          onChange={() => checkTodo(todo)}
          checked={todo.completed}
        />
        <p
          className={todo.completed ? "checked" : ""}
          style={{ display: "inline-block", marginLeft: "10px" }}
        >
          {todo.title}
        </p>
      </div>

      <em className='fas fa-times' onClick={() => deleteTodo(todo.id)}></em>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

export default TodoItem

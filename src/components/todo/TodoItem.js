import React from "react"
import PropTypes from "prop-types"

function TodoItem({ todo, checkTodo }) {
  return (
    <div className='todo-item'>
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

      <em className='fas fa-times'></em>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkTodo: PropTypes.func.isRequired
}

export default TodoItem

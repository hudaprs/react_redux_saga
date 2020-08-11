import React from "react"
import PropTypes from "prop-types"

function TodoItem({ todo }) {
  return (
    <div className='todo-item'>
      <div>
        <input type='checkbox' />
        <p
          className={!todo.completed ? "" : "checked"}
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
  todo: PropTypes.object.isRequired
}

export default TodoItem

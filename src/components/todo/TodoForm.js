import React from "react"
import PropTypes from "prop-types"

function TodoForm({
  title,
  current,
  setTodotitle,
  createTodo,
  updateTodo,
  clearCurrent
}) {
  const onTodoSubmit = (e) => {
    e.preventDefault()

    if (current) {
      updateTodo({ title, current })
    } else {
      createTodo(title)
    }
  }

  return (
    <div className='mb-2'>
      <form className='form' onSubmit={onTodoSubmit}>
        <input
          type='text'
          placeholder='What needs to be done...'
          onChange={(e) => setTodotitle(e.target.value)}
          value={title}
        />
        <button type='submit' className='btn'>
          {current ? "Update" : "Save"}
        </button>
      </form>
      {current && (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <button
            type='button'
            className='btn text-center btn-clear'
            onClick={() => clearCurrent()}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.object,
  setTodotitle: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
}

export default TodoForm

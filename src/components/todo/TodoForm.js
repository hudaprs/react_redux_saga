import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Actions
import {
  CREATE_TODO_TITLE,
  SET_NEW_TODO
} from "../../redux/actions/todo-actions"

function TodoForm({ title, setTodotitle, createTodo }) {
  const onTodoSubmit = (e) => {
    e.preventDefault()

    createTodo(title)
  }

  return (
    <form className='form' onSubmit={onTodoSubmit}>
      <input
        type='text'
        placeholder='What needs to be done...'
        onChange={(e) => setTodotitle(e.target.value)}
        value={title}
      />
      <button type='submit' className='btn'>
        Save
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTodotitle: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    title: state.todo.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTodotitle: (title) =>
      dispatch({ type: CREATE_TODO_TITLE, payload: title }),
    createTodo: (title) => dispatch({ type: SET_NEW_TODO, payload: title })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

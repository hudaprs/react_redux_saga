import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Components
import MainLayout from "../layout/MainLayout"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

// Actions
import {
  GET_TODOS,
  SET_CHECK_TODO,
  SET_DELETE_TODO
} from "../../redux/actions/todo-actions"

function Todo({ todos, getTodos, checkTodo, deleteTodo }) {
  useEffect(() => {
    getTodos()

    // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <div className='mt-2 container'>
        <TodoForm />
        {todos &&
          todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              key={index}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </MainLayout>
  )
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch({ type: GET_TODOS }),
    checkTodo: (todo) => dispatch({ type: SET_CHECK_TODO, payload: todo }),
    deleteTodo: (id) => dispatch({ type: SET_DELETE_TODO, payload: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

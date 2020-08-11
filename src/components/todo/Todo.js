import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Components
import MainLayout from "../layout/MainLayout"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

// Actions
import { GET_TODOS } from "../../redux/actions/todo-actions"

function Todo({ todos, getTodos }) {
  useEffect(() => {
    getTodos()

    // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <div className='mt-2 container'>
        <TodoForm />
        {todos &&
          todos.map((todo, index) => <TodoItem todo={todo} key={index} />)}
      </div>
    </MainLayout>
  )
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch({ type: GET_TODOS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

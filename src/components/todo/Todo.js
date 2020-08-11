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
  CREATE_TODO_TITLE,
  SET_NEW_TODO,
  SET_CHECK_TODO,
  SET_DELETE_TODO,
  SET_CURRENT,
  SET_UPDATE_TODO,
  SET_CLEAR_CURRENT
} from "../../redux/actions/todo-actions"

function Todo({
  loading,
  todos,
  title,
  current,
  getTodos,
  setTodotitle,
  createTodo,
  checkTodo,
  deleteTodo,
  setCurrent,
  updateTodo,
  clearCurrent
}) {
  useEffect(() => {
    getTodos()

    // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <div className='mt-2 container'>
        <TodoForm
          title={title}
          current={current}
          setTodotitle={setTodotitle}
          createTodo={createTodo}
          updateTodo={updateTodo}
          clearCurrent={clearCurrent}
        />

        {!loading &&
          todos &&
          todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              key={index}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
              setCurrent={setCurrent}
            />
          ))}
      </div>
    </MainLayout>
  )
}

Todo.propTypes = {
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  current: PropTypes.object,
  getTodos: PropTypes.func.isRequired,
  setTodotitle: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    loading: state.todo.loading,
    title: state.todo.title,
    todos: state.todo.todos,
    current: state.todo.current
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch({ type: GET_TODOS }),
    setTodotitle: (title) =>
      dispatch({ type: CREATE_TODO_TITLE, payload: title }),
    createTodo: (title) => dispatch({ type: SET_NEW_TODO, payload: title }),
    checkTodo: (todo) => dispatch({ type: SET_CHECK_TODO, payload: todo }),
    deleteTodo: (id) => dispatch({ type: SET_DELETE_TODO, payload: id }),
    setCurrent: (todo) => dispatch({ type: SET_CURRENT, payload: todo }),
    updateTodo: (current) =>
      dispatch({ type: SET_UPDATE_TODO, payload: current }),
    clearCurrent: () => dispatch({ type: SET_CLEAR_CURRENT, SET_CLEAR_CURRENT })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

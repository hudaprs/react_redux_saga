import {
  SET_TODOS,
  SET_TODO_TITLE,
  CREATE_TODO,
  CLEAR_TODO_TITLE,
  CHECK_TODO,
  DELETE_TODO,
  SET_CURRENT_TODO,
  UPDATE_TODO,
  CLEAR_CURRENT,
  SET_LOADING
} from "../actions/todo-actions"

const initialState = {
  loading: false,
  todos: [],
  title: "",
  current: null,
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_TODO_TITLE:
      return {
        ...state,
        title: payload
      }
    case SET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      }
    case CREATE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos]
      }
    case CLEAR_TODO_TITLE:
      return {
        ...state,
        title: ""
      }
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        )
      }
    case SET_CURRENT_TODO:
      return {
        ...state,
        current: payload
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        )
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state
  }
}

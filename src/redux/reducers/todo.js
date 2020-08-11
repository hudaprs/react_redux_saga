import {
  SET_TODOS,
  CREATE_TODO_TITLE,
  CREATE_TODO,
  CLEAR_TODO_TITLE
} from "../actions/todo-actions"

const initialState = {
  loading: false,
  todos: [],
  title: ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO_TITLE:
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
    default:
      return state
  }
}

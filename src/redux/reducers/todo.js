import { SET_TODOS } from "../actions/todo-actions"

const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: payload
      }
    default:
      return state
  }
}

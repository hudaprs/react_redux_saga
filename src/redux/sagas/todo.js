import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  SET_TODOS
} from "../actions/todo-actions"

// Api
import { getAllTodos } from "../api/todos"

/**
 * @note Every action that in the generator(*) must be use yield from react-saga
 * @note put is used for mutating the state, I should say xD
 * @note call is used for making a async function
 */

function* getTodos() {
  // API if needed
  const todos = yield call(getAllTodos)

  yield put({ type: SET_TODOS, payload: todos })
}

function* createTodo(action) {
  // API if needed
  yield put({ type: CREATE_TODO, payload: action.payload })
}

function* deleteTodo(action) {
  // API if needed
  yield put({ type: DELETE_TODO, payload: action.payload })
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodos)
  yield takeEvery(CREATE_TODO, createTodo)
  yield takeEvery(DELETE_TODO, deleteTodo)
}

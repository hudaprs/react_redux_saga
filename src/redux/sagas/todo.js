import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  SET_TODOS,
  SET_TODO_TITLE,
  CREATE_TODO_TITLE,
  SET_NEW_TODO,
  CLEAR_TODO_TITLE,
  CHECK_TODO,
  SET_CHECK_TODO,
  SET_DELETE_TODO,
  SET_CURRENT_TODO,
  SET_CURRENT,
  UPDATE_TODO,
  SET_UPDATE_TODO,
  CLEAR_CURRENT,
  SET_CLEAR_CURRENT,
  SET_LOADING
} from "../actions/todo-actions"

// Api
import {
  getAllTodos,
  createNewTodo,
  checkExistedTodo,
  deleteExistedTodo,
  updateExistedTodo
} from "../api/todos"

/**
 * @note Every action that in the generator(*) must be use yield from react-saga
 * @note put is used for mutating the state, I should say xD
 * @note call is used for making a async function
 */

//  Get All Todos
function* getTodos() {
  yield put({ type: SET_LOADING })

  // Call Get All Todos API
  const todos = yield call(getAllTodos)

  yield put({ type: SET_TODOS, payload: todos })
}

// Watch Input for Todo
function* setTodoTitle({ payload }) {
  yield put({ type: SET_TODO_TITLE, payload })
}

// Create Todo
function* createTodo({ payload }) {
  if (!payload) {
    alert("Please fill the forms!")
    return
  }

  // Call Create Todo API
  const newTodo = yield call(createNewTodo, payload)

  yield put({ type: CREATE_TODO, payload: newTodo })

  // Clear the title state
  yield put({ type: CLEAR_TODO_TITLE })
}

// Check the todo
function* checkTodo({ payload }) {
  const updatedTodo = yield call(checkExistedTodo, payload)

  yield put({ type: CHECK_TODO, payload: updatedTodo })
}

// Set Current Data for Update
function* setCurrent({ payload }) {
  yield put({ type: SET_TODO_TITLE, payload: payload.title })
  yield put({ type: SET_CURRENT_TODO, payload })
}

// Update the todo
function* updateTodo({ payload }) {
  const updatedTodo = yield call(updateExistedTodo, payload)

  yield put({ type: UPDATE_TODO, payload: updatedTodo })

  // Clear all states
  yield put({ type: CLEAR_CURRENT })
  yield put({ type: CLEAR_TODO_TITLE })
}

// Delete Todo
function* deleteTodo({ payload }) {
  // Call Delete Todo API
  const deletedTodo = yield call(deleteExistedTodo, payload)

  yield put({ type: DELETE_TODO, payload: deletedTodo })
}

// Clear current from state
function* clearCurrent() {
  yield put({ type: CLEAR_CURRENT })
  yield put({ type: CLEAR_TODO_TITLE })
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodos)
  yield takeEvery(CREATE_TODO_TITLE, setTodoTitle)
  yield takeEvery(SET_NEW_TODO, createTodo)
  yield takeEvery(SET_CHECK_TODO, checkTodo)
  yield takeEvery(SET_DELETE_TODO, deleteTodo)
  yield takeEvery(SET_CURRENT, setCurrent)
  yield takeEvery(SET_UPDATE_TODO, updateTodo)
  yield takeEvery(SET_CLEAR_CURRENT, clearCurrent)
}

import axios from "./default-axios"

export const getAllTodos = async () => {
  try {
    const todos = await axios.get(`todos?_limit=10`)

    return todos.data
  } catch (err) {
    return console.err(err)
  }
}

export const createNewTodo = async (title) => {
  try {
    const todo = await axios.post("todos", {
      title,
      completed: false
    })

    return todo.data
  } catch (err) {
    return console.err(err)
  }
}

export const checkExistedTodo = async (todo) => {
  try {
    const updateTodo = await axios.patch(`todos/${todo.id}`, {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    })

    return updateTodo.data
  } catch (err) {
    console.error(err)
  }
}

export const deleteExistedTodo = async (id) => {
  // Confirm when deleting
  if (window.confirm("Delete todo?")) {
    try {
      await axios.delete(`todos/${id}`)

      return id
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateExistedTodo = async ({
  title,
  current: { id, completed }
}) => {
  // Confirm when update
  try {
    const updatedTodo = await axios.patch(`todos/${id}`, {
      id,
      title,
      completed
    })

    return updatedTodo.data
  } catch (err) {
    console.error(err)
  }
}

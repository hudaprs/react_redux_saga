import axios from "./default-axios"

export const getAllTodos = async () => {
  try {
    const todos = await axios.get("todos?_limit=10")

    return todos.data
  } catch (err) {
    return console.log(err)
  }
}

export const createNewTodo = async (title) => {
  // Check the title
  if (!title) {
    alert("Please fill the forms!")
    return
  }

  try {
    const todo = await axios.post("todos", {
      title,
      completed: false
    })

    return todo.data
  } catch (err) {
    return console.log(err)
  }
}

import axios from "axios"

export const getAllTodos = async () => {
  try {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos")

    return todos.data
  } catch (err) {
    return console.log(err)
  }
}

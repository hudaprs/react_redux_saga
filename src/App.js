import React from "react"
import "./App.css"

// Components
import Todo from "./components/Todo"

// Redux
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App

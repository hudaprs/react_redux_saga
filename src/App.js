import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Redux
import { Provider } from "react-redux"
import store from "./redux/store"

// Routes
import PublicRoute from "./routes/PublicRoute"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route component={PublicRoute} />
      </Router>
    </Provider>
  )
}

export default App

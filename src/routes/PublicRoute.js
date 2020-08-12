import React from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Todo from "../components/todo/Todo"
import About from "../components/about/About"

function PublicRoute() {
  return (
    <Switch>
      <Route exact path='/' component={Todo} />
      <Route exact path='/about' component={About} />
    </Switch>
  )
}

export default PublicRoute

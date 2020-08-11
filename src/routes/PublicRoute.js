import React from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Todo from "../components/todo/Todo"

function PublicRoute() {
  return (
    <Switch>
      <Route exact path='/' component={Todo} />
    </Switch>
  )
}

export default PublicRoute

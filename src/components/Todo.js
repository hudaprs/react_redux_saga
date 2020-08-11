import React, { useEffect } from "react"
import { connect } from "react-redux"

// Actions
import { GET_TODOS } from "../redux/actions/todo-actions"

function Todo({ getTodos }) {
  useEffect(() => {
    getTodos()

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <button type='button'>Click Me</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch({ type: GET_TODOS })
  }
}

export default connect(null, mapDispatchToProps)(Todo)

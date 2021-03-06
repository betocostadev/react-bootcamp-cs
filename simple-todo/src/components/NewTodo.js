import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm.css'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = { task: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false })
    this.setState({ task: ''})
  }

  render() {
    return (
      <form className="New-todo-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="task">New To-Do</label>
        <input type="text" id="task" name="task" placeholder="New To-Do"
          value={ this.state.task }
          onChange={ this.handleChange }/>
          <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodo

import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleCompletion = this.handleCompletion.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleUpdate(evt) {
    evt.preventDefault()
    // Take new task data and pass up to the parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({isEditing: !this.state.isEditing})
  }

  handleCompletion() {
    this.props.toggleCompletion(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          <li
            className={ this.props.completed ? 'Todo-task completed' : 'Todo-task' }
            onClick={ this.handleCompletion }
            >{ this.props.task }
          </li>
          <div className="Todo-buttons">
            <button onClick={ this.toggleForm }>
              <i className="fas fa-pen" />
            </button>
            <button onClick={ this.handleRemove }>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )
    }

  return result
    }
}

export default Todo

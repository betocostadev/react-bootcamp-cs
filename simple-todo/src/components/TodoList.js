import React, { Component } from 'react'

import Todo from './Todo'
import NewTodo from './NewTodo'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: [] }

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(td => td.id !== id)
    })
  }

  updateTodo(id, update) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          task: update
        }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  render () {
    // Also passing the id as the key, this way the Todo component will have access to the id that matches the key.
    const todos = this.state.todos.map(td => {
      return (
        <Todo
          key={td.id}
          id={td.id}
          task={td.task}
          completed={td.completed}
          removeTodo={this.remove}
          updateTodo={this.updateTodo}
          toggleCompletion={this.toggleCompletion} />
        )
      })

    return (
      <div className="TodoList">
        <h1>
          TodoList! <span>A simple React Todolist</span>
        </h1>
        <ul>
        { todos }
        </ul>
        <NewTodo createTodo={ this.create } />
      </div>
    )
  }
}

export default TodoList

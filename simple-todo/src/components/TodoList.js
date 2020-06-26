import React, { Component } from 'react'

import Todo from './Todo'
import NewTodo from './NewTodo'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: [] }

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
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

  render () {
    // Also passing the id as the key, this way the Todo component will have access to the id that matches the key.
    const todos = this.state.todos.map(td => <Todo key={td.id} id={td.id} task={td.task} removeTodo={this.remove} updateTodo={this.updateTodo}/>)

    return (
      <div>
        <h2>TodoList</h2>
        <NewTodo createTodo={ this.create } />
        <ul>
         { todos }
        </ul>
      </div>
    )
  }
}

export default TodoList

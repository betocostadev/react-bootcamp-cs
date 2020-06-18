import React, { Component } from 'react'

import Todo from './Todo'
import NewTodo from './NewTodo'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: [ ]}

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
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

  render () {
    // Also passing the id as the key, this way the Todo component will have access to the id that matches the key.
    const todos = this.state.todos.map(td => <Todo key={td.id} id={td.id} task={td.task} removeTodo={this.remove} />)

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

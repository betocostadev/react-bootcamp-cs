import React, { Component } from 'react'

import Todo from './Todo'
import NewTodo from './NewTodo'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: [ { task: 'Skip rope' }, { task: 'Complete quests' } ]}

    this.create = this.create.bind(this)
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    const todos = this.state.todos.map(td => <Todo task={ td.task } />)

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

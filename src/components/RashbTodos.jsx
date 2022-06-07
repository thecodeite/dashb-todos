import React, {Component} from 'react'

import {addTodoAction, deleteTodoAction} from '../actions'
import {readList} from '../apiClient'

function Todo ({store, todo}) {
  return <div>
    {todo.text} -
    <a onClick={() => store.dispatch(deleteTodoAction(todo.id))}> X</a>
  </div>
}

export class TodosApp extends Component {
  constructor () {
    super()
    this.state = {newValue: ''}
  }

  render () {
    return <div>
      <h1>TodoApp</h1>
      <input
        value={this.state.newValue}
        onChange={e => this.setState({newValue: e.target.value})} />
      <button onClick={() => {
        this.props.store.dispatch(addTodoAction(this.state.newValue))
        this.setState({newValue: ''})
      }} >Add</button>
      <ul>
        {this.props.todos.map(todo => <Todo key={todo.id} store={this.props.store} todo={todo} />)}
      </ul>
    </div>
  }
}

export class RashbTodos extends Component {
  constructor (props) {
    super(props)
    props.store.subscribe(() => this.forceUpdate())
  }

  componentDidMount () {
    readList(this.props.store)
  }

  render () {
    const state = this.props.store.getState()
    return <TodosApp {...state} store={this.props.store} />
  }
}









import {addTodo} from '../apiClient'

export function todo (state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

export function todos (state = [], action) {
  switch (action.type) {
    case 'TODO_ADDED':
      return [...state, action.todo]
    case 'DELETE_TODO':
      return state.filter(x => x.id !== action.id)
    case 'SET_TODOS':
      return action.todos
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export function todoApp (state = {}, action) {
  const newState = Object.assign({}, state, {
    todos: todos(state.todos, action)
  })

  switch (action.type) {
    case 'ADD_TODO':
      addTodo({
        id: action.id,
        text: action.text,
        completed: false
      })
      newState.loading = true
  }
  return newState
}

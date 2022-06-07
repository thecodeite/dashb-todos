
let nextId = 1
export const addTodoAction = (text) => ({type: 'ADD_TODO', text, id: nextId++})
export const todoAddedAction = (todo) => ({type: 'TODO_ADDED', todo})

export const deleteTodoAction = (id) => ({type: 'DELETE_TODO', id})

export const setTodos = todos => ({type: 'SET_TODOS', todos})

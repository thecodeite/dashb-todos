import {setTodos} from './actions'

const baseUrl = 'https://a-wunderlist-com.auth.codeite.dev'

export function readList (store) {
  return fetch(baseUrl + '/api/v1/tasks?list_id=300356081', {credentials: 'include'})
    .then(r => r.json())
    .then(tasks => {
      console.log('tasks:', tasks)

      const todos = tasks.map(task => ({
        id: task.id,
        text: task.title,
        completed: task.completed
      }))

      store.dispatch(setTodos(todos))
    })
}

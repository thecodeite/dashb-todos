import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

import {RashbTodos} from './components/RashbTodos'
import {todoApp} from './reducers'

const store = createStore(todoApp)

render(<RashbTodos store={store} />, document.getElementById('app'))

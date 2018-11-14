/* global document */

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import 'antd/dist/antd.css'
import App from './app/layout/App'
import * as registerServiceWorker from './serviceWorker'
import {configureStore} from './app/store/configureStore'
import {loadUsers} from './features/user/userActions'

const store = configureStore()
store.dispatch(loadUsers())

const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  )
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render()

registerServiceWorker.unregister()

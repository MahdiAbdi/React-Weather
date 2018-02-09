import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './js/reducers'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

const store = createStore(Reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))

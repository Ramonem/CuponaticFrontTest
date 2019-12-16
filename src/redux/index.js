import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import esLocale from 'moment/locale/es'
import ES from 'antd/lib/locale-provider/es_ES'
import reducers from './reducers'
moment.locale(`es`, esLocale)
moment.locale(`es`)

const middlewares = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
)

const store = createStore(reducers, middlewares)

export default function Redux({ children }) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={ES}>{children}</ConfigProvider>
    </Provider>
  )
}

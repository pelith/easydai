import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './i18n'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_GA_TOKEN, {
    standardImplementation: true,
  })
} else {
  ReactGA.initialize('test', { testMode: true })
}

const history = createBrowserHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/store'
import theme from './components/ThemeStyle'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('reshub-root-page')
)


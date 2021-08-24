import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/store'
import theme from './components/ThemeStyle'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <ThemeProvider theme={ theme }>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('reshub-root-page')
)


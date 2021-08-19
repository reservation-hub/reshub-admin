//----------------------------------
// redux create sotre modules
//----------------------------------

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { rootReducer } from './reducers/rootReducer'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import setAuthToken from '../utils/setAuthToken'
import Cookies from 'js-cookie'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const enhancedReducer = persistReducer(persistConfig, rootReducer)

const middleware = process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk]

const composeEnhancer =
  ( process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose

const store = createStore(
  enhancedReducer, composeEnhancer(applyMiddleware(...middleware))
)

const token = Cookies.get('refreshToken')
if (token) {
  setAuthToken(token)
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export function typedAction<T extends string>(type: T): { type: T }
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P }
export function typedAction(type: string, payload?: any) {
  return { type, payload }
}

export default store
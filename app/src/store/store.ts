//----------------------------------
// redux create sotre modules
//----------------------------------

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { rootReducer } from './reducers/rootReducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}


const middleware = process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk]

const composeEnhancer =
  ( process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose

const store = createStore(
  rootReducer, composeEnhancer(applyMiddleware(...middleware))
)


export type RootState = ReturnType<typeof store.getState>

export function typedAction<T extends string>(type: T): { type: T }
export function typedAction<T extends string, P extends any>(type: T, payload: P): { type: T; payload: P }
export function typedAction(type: string, payload?: any) { return { type, payload } }

export default store
//----------------------------------
// redux 全てのリデューサを定義する
//----------------------------------

import { combineReducers } from 'redux'
import auth from './authReducer'
import { shopReducer } from './shopReducer'
import { userReducer } from './userReducer'
import location from './locationReducer'

export const rootReducer = combineReducers({
    auth,
    shop: shopReducer,
    user: userReducer,
    location
  })

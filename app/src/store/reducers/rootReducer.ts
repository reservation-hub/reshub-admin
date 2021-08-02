//----------------------------------
// redux 全てのリデューサを定義する
//----------------------------------

import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { shopReducer } from './shopReducer'
import { userReducer } from './userReducer'
import { locationReducer } from './locationReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    shop: shopReducer,
    user: userReducer,
    location: locationReducer
  })

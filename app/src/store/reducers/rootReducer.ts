//----------------------------------
// redux 全てのリデューサを定義する
//----------------------------------

import { combineReducers } from 'redux'
import auth from './authReducer'
import shop from './shopReducer'
import user from './userReducer'
import dashboard from './dashboardReducer'

export const rootReducer = combineReducers({
    auth,
    shop,
    user,
    dashboard
  })

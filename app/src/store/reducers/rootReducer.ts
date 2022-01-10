//----------------------------------
// redux 全てのリデューサを定義する
//----------------------------------

import { combineReducers } from 'redux'
import auth from './authReducer'
import shop from './shopReducer'
import user from './userReducer'
import dashboard from './dashboardReducer'
import location from './locationReducer'
import reservation from './reservationReducer'
import menu from './menuReducer'
import stylist from './stylistReducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

export const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user']
}

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  shop,
  user,
  dashboard,
  location,
  reservation,
  menu,
  stylist
})

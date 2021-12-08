import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Salon from '@pages/shop/Salon'
import Users from '@pages/user/Users'
import Home from '@/pages/choose/Home'
import SalonDashboard from '@pages/dashboards/salon/SalonDashboard'
import Login from '@pages/auth/Login'
import Error from '@pages/error/Error'
import NotLoggedIn from '@/pages/auth/NotloggedIn'

export type TStaticContext = {
  statusCode?: number | undefined
}

export type TRouter = {
  path: string
  exact: boolean
  component?:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, TStaticContext, unknown>>
    | undefined
}

export type TNavMenu = {
  path: string
  value: string
}

export const PRIVATE_PATHS: TRouter[] = [
  { path: '/salon', exact: false, component: Salon },
  { path: '/users', exact: false, component: Users }
]

export const PUBLIC_PATHS: TRouter[] = [
  { path: '/', exact: true, component: Home },
  { path: '/salon_dashboard', exact: false, component: SalonDashboard }
]

export const COMMON_PATHS: TRouter[] = [
  { path: '/auth', exact: true, component: Login },
  { path: '/auth_error', exact: false, component: NotLoggedIn },
  { path: '*', exact: false, component: Error }
]

export const ADMIN_NAV_MENU: TNavMenu[] = [
  { path: '/salon_dashboard', value: 'ダッシュボード' },
  { path: '/users', value: 'ユーザー一覧' },
  { path: '/salon', value: 'サロン一覧' }
]

export const STAFF_NAV_MENU: TNavMenu[] = [
  { path: '/salon_dashboard', value: 'ダッシュボード' },
  { path: '/staff_shop', value: '店舗管理' },
  { path: '/stylist', value: 'スタイリスト一覧' },
  { path: '/reservation', value: '予約管理' }
]

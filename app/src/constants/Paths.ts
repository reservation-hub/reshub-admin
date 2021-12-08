import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Salon from '@pages/shop/Salon'
import Users from '@pages/user/Users'
import Home from '@/pages/choose/Home'
import SalonDashboard from '@pages/dashboards/salon/SalonDashboard'
import Login from '@pages/auth/Login'
import Error from '@pages/error/Error'
import NotLoggedIn from '@/pages/auth/NotloggedIn'
import StaffSalon from '@/pages/staff/shop/StaffSalon'
import Stylist from '@/pages/staff/stylist/Stylist'
import Reservation from '@/pages/staff/reservation/Reservation'

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
  subItem?: TSubItems[]
  value: string
}

export type TSubItems = {
  path: string
  value: string
}

export const PRIVATE_PATHS: TRouter[] = [
  { path: '/salon', exact: false, component: Salon },
  { path: '/users', exact: false, component: Users }
]

export const PUBLIC_PATHS: TRouter[] = [
  { path: '/', exact: true, component: Home },
  { path: '/salon_dashboard', exact: false, component: SalonDashboard },
  { path: '/staff_shop', exact: false, component: StaffSalon },
  { path: '/stylist', exact: false, component: Stylist },
  { path: '/reservation', exact: false, component: Reservation }
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
  {
    path: '/staff_shop',
    value: '店舗管理',
    subItem: [
      { path: '/staff_shop', value: '店舗情報' },
      { path: '/stylist', value: 'スタイリスト管理' },
      { path: '/menus', value: 'メニュー管理' },
      { path: '/reservation', value: '予約管理' }
    ]
  },
  { path: '/settings', value: '設定' }
]

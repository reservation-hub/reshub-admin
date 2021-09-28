import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Salon from '@pages/shop/Salon'
import Users from '@pages/user/Users'
import SalonForms from '@pages/form/SalonForms'
import UserForms from '@pages/form/UserForms'
import Home from '@pages/home/Home'
import SalonDashboard from '@pages/dashboards/salon/SalonDashboard'
import Login from '@pages/auth/Login'
import Error from '@pages/error/Error'

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

export const PRIVATE_PATHS: TRouter[] = [
  { path: '/salon', exact: false, component: Salon },
  { path: '/users', exact: false, component: Users },
  { path: '/form/salon', exact: false, component: SalonForms },
  { path: '/form/user', exact: false, component: UserForms }
]

export const PUBLIC_PATHS: TRouter[] = [
  { path: '/', exact: true, component: Home },
  { path: '/salon_dashboard', exact: false, component: SalonDashboard }
]

export const COMMON_PATHS: TRouter[] = [
  { path: '/auth', exact: true, component: Login },
  { path: '*', exact: false, component: Error }
]

export const NAV_MENU: { path: string; value: string }[] = [
  { path: '/salon_dashboard', value: 'ダッシュボード' },
  { path: '/users', value: 'ユーザー一覧' },
  { path: '/salon', value: 'サロン一覧' }
]

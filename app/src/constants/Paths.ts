import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Salon from '@pages/shop/Salon'
import Users from '@pages/user/Users'
import SalonDashboard from '@pages/dashboards/salon/SalonDashboard'
import Login from '@pages/auth/Login'
import Error from '@pages/error/Error'
import NotLoggedIn from '@pages/auth/NotloggedIn'
import Stylist from '@pages/staff/stylist/Stylist'
import Reservation from '@pages/staff/reservation/Reservation'
import CreateShop from '@pages/staff/shop/CreateShop'
import Menu from '@pages/staff/menu/Menu'
import TestForm from '@pages/test'
import Setting from '@pages/setting/Setting'
import Tags from '@pages/tag/Tags'
import ShopTags from '@/pages/staff/tag/ShopTags'
import Reviews from '@/pages/staff/review/Reviews'

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
  { path: '/shops', exact: false, component: Salon },
  { path: '/dashboard', exact: false, component: SalonDashboard },
  { path: '/stylist', exact: false, component: Stylist },
  { path: '/reservation', exact: false, component: Reservation },
  { path: '/create_shop', exact: false, component: CreateShop },
  { path: '/settings', exact: false, component: Setting },
  { path: '/menu', exact: false, component: Menu },
  { path: '/test', exact: false, component: TestForm },
  { path: '/shop_tags', exact: false, component: ShopTags },
  { path: '/review', exact: false, component: Reviews }
]

export const COMMON_PATHS: TRouter[] = [
  { path: '/auth', exact: true, component: Login },
  { path: '/auth_error', exact: false, component: NotLoggedIn },
  { path: '/tags', exact: false, component: Tags },
  { path: '*', exact: false, component: Error }
]

export const ADMIN_NAV_MENU: TNavMenu[] = [
  { path: '/dashboard', value: 'ダッシュボード' },
  { path: '/users', value: 'ユーザー一覧' },
  {
    path: '/salon',
    value: 'サロン一覧',
    subItem: [{ path: '/shop_tags', value: 'タグ管理' }]
  },
  { path: '/tags', value: 'タグ' }
]

export const STAFF_NAV_MENU: TNavMenu[] = [
  { path: '/dashboard', value: 'ダッシュボード' },
  {
    path: '/shops',
    value: '店舗管理',
    subItem: [
      { path: '/stylist', value: 'スタイリスト管理' },
      { path: '/menu', value: 'メニュー管理' },
      { path: '/reservation', value: '予約管理' },
      { path: '/shop_tags', value: 'タグ管理' },
      { path: '/review', value: '口コミ管理' }
    ]
  },
  { path: '/tags', value: 'タグ' },
  { path: '/settings', value: '設定' }
]

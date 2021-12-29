import React, { useEffect, useState } from 'react'
import Loading from '@components/common/atoms/loading'
import ShopSelect from '@components/list/reservations/ShopSelect'
import {
  fetchReservations,
  fetchReservationsForCalendar
} from '@store/actions/reservationAction'
import { useSelect } from '@utils/hooks/useSelect'
import SubHeader from '@components/common/atoms/SubHeader'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import { MatchParams, selectType } from '@components/common/_PropsType'
import ReservationsList from '@components/list/reservations/ReservationList'
import { HEADER_TYPE } from '@constants/Common'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import history from '@utils/routes/history'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router'
import ReservationDetail from './Detail'
import NewReservation from './New'
import Calendar from '@components/common/atoms/Calendar'
import CustomButton from '@/components/common/atoms/CustomButton'
import Paginate from '@components/common/atoms/Paginate'
import dayjs from 'dayjs'

const Reservation = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, any>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const { option, changeHandler } = useSelect('')
  const [calendar, setCalendar] = useState<boolean>(false)
  const [year, setYear] = useState<string>(dayjs().format('YYYY') || '')
  const [month, setMonth] = useState<string>(dayjs().format('MM') || '')
  const [page, setPage] = useState<number>(currentPage)

  const { shops, loading, reservations } = useSelector(
    (state: RootState) => ({
      shops: state.shop.shops.values,
      loading: state.shop.loading,
      reservations: state.reservation.reservations
    }),
    shallowEqual
  )

  const shopSelect: selectType[] = shops?.map((shop) => ({
    value: String(shop.id),
    name: shop.name
  }))

  const reservationsEvent: {
    id: string
    shopId: string
    title: string
    date: string
  }[] = reservations.values?.map((reservation) => ({
    id: String(reservation.id),
    shopId: String(reservation.shopId),
    title: `${reservation.clientName}/${reservation.menuName}`,
    date: String(reservation.reservationDate)
  }))

  const pageChangeHandler = (data: Record<string, any>) => {
    const pageNum: number = data['selected']
    setPage(pageNum + 1)
    history.push(`/reservation?p=${page}`, { currentPage: pageNum + 1 })
  }

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
    if (option && match.isExact) {
      calendar
        ? dispatch(fetchReservationsForCalendar(Number(option), Number(year), Number(month)))
        : dispatch(fetchReservations(Number(option), Number(page), 'desc'))
    }
  }, [dispatch, option, match.isExact, page, calendar, month])

  return (
    <MainTemplate>
      <Switch>
        <Route exact path='/reservation'>
          {loading ? (
            <Loading />
          ) : (
            <Section>
              {option ? (
                <>
                  <SubHeader
                    title='予約管理'
                    type={HEADER_TYPE.LIST}
                    modalOpenHandler={() => history.push('/reservation/new')}
                  >
                    <ShopSelect
                      data={shopSelect}
                      value={option}
                      onChange={changeHandler}
                      listStyle
                    />
                    <CustomButton
                      onClick={() => setCalendar(!calendar)}
                      classes='min-w-[12rem] ml-2'
                    >
                      {calendar ? 'リストで見る' : 'カレンダーで見る'}
                    </CustomButton>
                  </SubHeader>
                  {calendar ? (
                    <Calendar events={reservationsEvent} />
                  ) : (
                    <>
                      <ReservationsList
                        reservations={option ? reservations.values : []}
                      />
                      <Paginate
                        totalPage={reservations?.totalCount}
                        page={currentPage}
                        pageChangeHandler={pageChangeHandler}
                      />
                    </>
                  )}
                </>
              ) : (
                <ShopSelect
                  data={shopSelect}
                  value={option}
                  onChange={changeHandler}
                />
              )}
            </Section>
          )}
        </Route>
        <Route path='/reservation/new' component={NewReservation} />
        <Route path='/reservation/:id' component={ReservationDetail} />
      </Switch>
    </MainTemplate>
  )
}

export default Reservation

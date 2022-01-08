import React, { createRef, useEffect, useState } from 'react'
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
import CustomButton from '@components/common/atoms/CustomButton'
import FullCalendar from '@fullcalendar/react'
import usePagination from '@utils/hooks/usePagination'

const Reservation = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, any>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const calendarRef = createRef<FullCalendar>()
  const { option, changeHandler } = useSelect('')
  const [calendar, setCalendar] = useState<boolean>(false)
  const [page, setPage] = useState<number>(currentPage)
  const pageChangeHandler = usePagination('reservation', page, setPage)

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

  const callReservationsForCalendar = () => {
    return dispatch(
      fetchReservationsForCalendar(
        Number(option),
        Number(calendarRef.current?.getApi().getDate().getFullYear()),
        Number(calendarRef.current?.getApi().getDate().getMonth()) + 1
      )
    )
  }

  const calendarCustomButton = {
    prev: {
      text: '先月',
      click: () => {
        calendarRef.current?.getApi().prev()
        callReservationsForCalendar()
      }
    },
    next: {
      text: '来月',
      click: () => {
        calendarRef.current?.getApi().next()
        callReservationsForCalendar()
      }
    }
  }

  const reservationsEvent = reservations.values?.map((reservation) => ({
    id: String(reservation.id),
    shopId: String(reservation.shopId),
    title: `${reservation.clientName}/${reservation.menuName}`,
    date: String(reservation.reservationDate)
  }))

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
    if (option && match.isExact) {
      calendar
        ? callReservationsForCalendar()
        : dispatch(fetchReservations(Number(option), Number(page), 'desc'))
    }
  }, [dispatch, option, match.isExact, page, calendar, calendarRef.current])

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
                    <Calendar
                      events={reservationsEvent}
                      calendarRef={calendarRef}
                      customButtons={calendarCustomButton}
                    />
                  ) : (
                    <ReservationsList
                      item={option ? reservations.values : []}
                      page={page}
                      totalPage={reservations?.totalCount}
                      pageChangeHandler={pageChangeHandler}
                      usePaginate
                    />
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

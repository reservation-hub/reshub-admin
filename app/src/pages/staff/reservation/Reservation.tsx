import React, { useEffect, useState } from 'react'
import Loading from '@components/common/atoms/loading'
import ShopSelect from '@components/list/ShopSelect'
import { fetchReservations } from '@store/actions/reservationAction'
import SubHeader from '@components/common/atoms/SubHeader'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import { MatchParams } from '@components/common/_PropsType'
import ReservationsList from '@components/list/reservations/ReservationList'
import { HEADER_TYPE } from '@constants/Common'
import { RootState } from '@store/store'
import history from '@utils/routes/history'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router'
import ReservationDetail from './Detail'
import Form from './Form'
import Calendar from '@components/common/atoms/Calendar'
import CustomButton from '@components/common/atoms/CustomButton'
import usePagination from '@utils/hooks/usePagination'
import { TCurrentPage } from '@components/list/_PropsType'
import { useShopSelect } from '@utils/hooks/useShopSelect'
import { useCalendar } from '@utils/hooks/useCalendar'

const Reservation = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')
  const pageChangeHandler = usePagination('reservation', page, setPage)
  const { option, control, shopSelect, loading } = useShopSelect(page)

  const { reservations } = useSelector((state: RootState) => state.reservation)

  const {
    calendar,
    calendarRef,
    reservationsEvent,
    viewCalendar,
    fetchForCalendar
  } = useCalendar(Number(option), reservations.values)

  const calendarCustomButton = {
    prev: {
      text: '先月',
      click: () => {
        calendarRef.current?.getApi().prev()
        fetchForCalendar()
      }
    },
    next: {
      text: '来月',
      click: () => {
        calendarRef.current?.getApi().next()
        fetchForCalendar()
      }
    }
  }

  useEffect(() => {
    if (option && match.isExact && !calendar) {
      dispatch(fetchReservations(Number(option), Number(page), order))
    }
  }, [dispatch, option, match.isExact, page, order, calendar])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/reservation'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  text='予約管理'
                  type={HEADER_TYPE.LIST}
                  modalOpenHandler={() =>
                    history.push('/reservation/new', { option })
                  }
                >
                  <ShopSelect
                    item={shopSelect}
                    control={control}
                    listStyle
                    name='shopId'
                  />
                  <CustomButton
                    onClick={viewCalendar}
                    classes='min-w-[12rem] ml-2'
                  >
                    {calendar ? 'リストで見る' : 'カレンダーで見る'}
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      order === 'desc' ? setOrder('asc') : setOrder('desc')
                    }
                    classes='min-w-[12rem] ml-2'
                  >
                    並び替え
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
            )}
          </Route>
          <Route path='/reservation/(new|edit)' component={Form} />
          <Route path='/reservation/detail/:id' component={ReservationDetail} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Reservation

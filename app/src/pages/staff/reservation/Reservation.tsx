import Loading from '@components/common/atoms/loading'
import ShopSelect from '@components/list/reservations/ShopSelect'
import { fetchOneRservation } from '@store/actions/reservationAction'
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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router'
import ReservationDetail from './Detail'
import NewReservation from './New'

const Reservation = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, any>) => {
  const { option, changeHandler } = useSelect('')
  const dispatch = useDispatch()

  const { shops, loading, reservations } = useSelector((state: RootState) => ({
    shops: state.shop.shops.values,
    loading: state.shop.loading,
    reservations: state.reservation.reservations
  }))

  console.log(shops)

  const shopSelect: selectType[] = shops?.map((shop) => ({
    value: String(shop.id),
    name: shop.name
  }))

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
    if (option) {
      dispatch(fetchOneRservation(Number(option)))
    }
  }, [dispatch, option])

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
                  </SubHeader>
                  <ReservationsList
                    reservations={option ? reservations.values : []}
                  />
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

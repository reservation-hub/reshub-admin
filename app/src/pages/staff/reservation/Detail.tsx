import React, { useCallback, useEffect } from 'react'
import { MatchParams } from '@components/common/_PropsType'
import ModalAlert from '@components/modal/ModalAlert'
import ModalOverlay from '@components/modal/ModalOverlay'
import {
  deleteReservation,
  getReservation
} from '@store/actions/reservationAction'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import ReservationDetail from '@/components/detail/reservation/ReservationDetail'
import Section from '@/components/common/layout/Section'

export type TLocationStateInId = {
  state: { shopId: string }
}

const Detail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TLocationStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch() 
  const convertId = Number(id)
  const shopId = Number(location.state.state.shopId)
  const { open, modalHandler } = useModal(false)
  console.log('shopId:', location.state.state.shopId, 'state', location.state)

  const { reservation, loading } = useSelector(
    (state: RootState) => state.reservation
  )

  const onDelete = useCallback(() => {
    dispatch(deleteReservation(reservation.shopId, reservation.id))
  }, [dispatch, reservation])

  useEffect(() => {
    dispatch(getReservation(shopId, convertId))
  }, [dispatch, shopId, convertId])

  return (
    <Section>
      <ModalOverlay modalOpen={open} modalCloseHandler={modalHandler}>
        <ModalAlert
          modalCloseHandler={modalHandler}
          alertText='この予約をキャンセルしますか？'
          modalHandler={onDelete}
          buttonText='キャンセル'
        />
      </ModalOverlay>
      <ReservationDetail 
        item={reservation}
      />
    </Section>
  )
}

export default Detail

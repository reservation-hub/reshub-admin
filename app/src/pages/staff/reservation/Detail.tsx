import React, { useCallback, useEffect } from 'react'
import { MatchParams } from '@components/common/_PropsType'
import ModalAlert from '@components/modal/ModalAlert'
import ModalOverlay from '@components/modal/ModalOverlay'
import {
  deleteReservation,
  fetchOneRservation
} from '@store/actions/reservationAction'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'

export type TLocationStateInId = {
  id: number
}

const ReservationDetail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TLocationStateInId>) => {
  console.log(location)
  const { id } = match.params
  const { reservation, loading } = useSelector(
    (state: RootState) => state.reservation
  )
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = location.state.id
  const { open, modalHandler } = useModal(false)

  console.log(reservation)

  const onDelete = useCallback(() => {
    dispatch(deleteReservation(shopId, convertId))
  }, [dispatch, shopId, convertId])

  useEffect(() => {
    dispatch(fetchOneRservation(shopId))
  }, [dispatch, shopId])

  return (
    <>
      <ModalOverlay modalOpen={open} modalCloseHandler={modalHandler}>
        <ModalAlert
          modalCloseHandler={modalHandler}
          alertText='この予約をキャンセルしますか？'
          modalHandler={onDelete}
          buttonText='キャンセル'
        />
      </ModalOverlay>
    </>
  )
}

export default ReservationDetail

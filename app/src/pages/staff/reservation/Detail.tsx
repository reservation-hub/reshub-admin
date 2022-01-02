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

export type TLocationStateInId = {
  shopId: string
}

const ReservationDetail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TLocationStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = Number(location.state.shopId)
  const { open, modalHandler } = useModal(false)

  const { reservation, loading } = useSelector(
    (state: RootState) => state.reservation
  )

  const onDelete = useCallback(() => {
    dispatch(deleteReservation(shopId, convertId))
  }, [dispatch, shopId, convertId])

  useEffect(() => {
    dispatch(getReservation(shopId, convertId))
  }, [dispatch, shopId, convertId])

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

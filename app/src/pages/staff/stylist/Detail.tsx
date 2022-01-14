import React, { useCallback, useEffect } from 'react'
import Loading from '@components/common/atoms/loading'
import { MatchParams } from '@components/common/_PropsType'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { TLocationStateInId } from '../reservation/Detail'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import { deleteStylist, getStylist } from '@store/actions/stylistAction'
import StylistDetail from '@components/detail/stylist/StylistDetail'
import history from '@/utils/routes/history'

const Detail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TLocationStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = Number(location.state?.shopId)
  const { open, modalHandler } = useModal(false)
  const { stylist, loading } = useSelector((state: RootState) => state.stylist)

  const onDelete = useCallback(() => {
    dispatch(deleteStylist(stylist.shopId, stylist.id))
  }, [dispatch, stylist])

  useEffect(() => {
    dispatch(getStylist(shopId, convertId))
  }, [dispatch, shopId, convertId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StylistDetail
          item={stylist}
          modalOpenHandler={() =>
            history.push(`/stylist/edit/${id}`, { stylist })
          }
          subModalHandler={modalHandler}
        />
      )}
      <ModalOverlay modalOpen={open} modalCloseHandler={modalHandler}>
        <ModalAlert
          modalCloseHandler={modalHandler}
          modalHandler={onDelete}
          alertText='このメニューを削除しますか？'
          buttonText='削除'
        />
      </ModalOverlay>
    </>
  )
}

export default Detail

import React, { useCallback, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { deleteShopData, getOneShop } from '@store/actions/shopAction'
import { useModal } from '@utils/useModal'
import { MatchParams } from '@components/common/_PropsType'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import DetailItem from '@components/detail/shop/DetailItem'
import history from '@utils/history'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { shop } = useSelector((state: RootState) => state.shop)
  const convertId = Number(id)
  const dispatch = useDispatch()

  const deleteModal = useModal(false, 'delete')

  const onDelete = useCallback(() => {
    dispatch(deleteShopData(convertId))
  }, [dispatch, convertId])

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [dispatch, convertId])

  return (
    <>
      {/*delete modal*/}
      {deleteModal.modalType === 'delete' && (
        <ModalOverlay
          modalOpen={deleteModal.open}
          modalCloseHandler={deleteModal.closeModal}
        >
          <ModalAlert
            modalCloseHandler={deleteModal.closeModal}
            alertText=''
            modalHandler={onDelete}
          />
        </ModalOverlay>
      )}

      <DetailItem
        shop={shop}
        modalOpenHandler={() => history.push(`/salon/form/${id}`, { shop })}
        subModalHandler={deleteModal.openModal}
      />
    </>
  )
}

export default Detail

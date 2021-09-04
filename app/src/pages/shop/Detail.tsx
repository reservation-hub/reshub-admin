import React, { useEffect, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '../../components/user/_PropsType'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { deleteShopData, getOneShop } from '../../store/actions/shopAction'
import { useModal } from '../../utils/useModal'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalAlert from '../../components/modal/ModalAlert'
import DetailItem from '../../components/shop/DetailItem'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const { id } = match.params
  const { shop } = useSelector((state: RootState) => state.shop)
  const convertId: number = Number(id)
  const dispatch = useDispatch()
  
  const deleteModal = useModal(false, 'delete')
  const formModal = useModal(false, 'form')
  
  const onDelete = useCallback(
    () => {
      dispatch(deleteShopData(convertId))
    },
    [dispatch, convertId]
  )
  
  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [dispatch, convertId])
  
  return (
    <>
      { /*delete modal*/ }
      { deleteModal.modalType === 'delete' &&
      <ModalOverlay
        modalOpen={ deleteModal.open }
        modalCloseHandler={ deleteModal.closeModal }
      >
        <ModalAlert
          modalCloseHandler={ deleteModal.closeModal }
          alertText=''
          onDelete={ onDelete }
        />
      </ModalOverlay>
      }
      
      <DetailItem
        shop={ shop }
        modalOpenHandler={ formModal.openModal }
        subModalHandler={ deleteModal.openModal }
      />
    </>
  )
}

export default Detail

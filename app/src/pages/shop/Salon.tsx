import React, { useEffect } from 'react'
import SalonList from '../../components/shop/SalonList'
import MainTemplate from '../../components/common/layout/MainTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '../../store/actions/shopAction'
import { useState } from 'react'
import { RootState } from '../../store/store'
import { useModal } from '../../utils/useModal'
import ModalOverlay from '../../components/modal/ModalOverlay'

const Salon = () => {
  
  const dispatch = useDispatch()
  
  const [page, setPage] = useState<number>(1)
  const { shops } = useSelector((state: RootState) => state.shop)
  const { open, openModal, closeModal } = useModal(false, 'form')
  
  useEffect(() => {
    dispatch(fetchShopList(page))
  }, [dispatch, page])
  
  return (
    <MainTemplate>
      <SalonList shops={ shops.values } modalOpenHandler={ openModal } />
      <ModalOverlay modalOpen={ open } modalCloseHandler={ closeModal }>
        test
      </ModalOverlay>
    </MainTemplate>
  )
  
}
export default Salon
import React, { useEffect } from 'react'
import SalonList from '../../components/list/Shop/SalonList'
import MainTemplate from '../../components/common/layout/MainTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '../../store/actions/shopAction'
import { useState } from 'react'
import { RootState } from '../../store/store'
import { useModal } from '../../utils/useModal'
import ModalOverlay from '../../components/modal/ModalOverlay'
import Paginate from '../../components/common/atoms/Paginate'
import { Route } from 'react-router-dom'
import Detail from './Detail'
import Loading from '../../components/common/atoms/loading'
import history from '../../utils/history'
import ModalAlert from '../../components/modal/ModalAlert'

const Salon = () => {
  
  const dispatch = useDispatch()
  
  const [page, setPage] = useState<number>(1)
  const { shops, loading } = useSelector((state: RootState) => state.shop)
  const { open, openModal, closeModal } = useModal(false, 'form')
  
  useEffect(() => {
    dispatch(fetchShopList(page))
  }, [page, dispatch])
  
  return (
    <MainTemplate>
      { loading ? <Loading /> :
        <>
          <Route exact path='/salon'>
            <SalonList shops={ shops.values } modalOpenHandler={ openModal } />
            <Paginate totalPage={ shops.totalCount } setPage={ setPage } />
          </Route>
          <Route path='/salon/:id' component={ Detail } />
        </>
      }
      <ModalOverlay modalOpen={ open } modalCloseHandler={ closeModal }>
        <ModalAlert
          modalCloseHandler={ closeModal }
          modalHandler={ () => history.push('/form/salon') }
          alertText='サロンの登録画面に移動しますか？'
          buttonText='移動'
        />
      </ModalOverlay>
    </MainTemplate>
  )
  
}
export default Salon
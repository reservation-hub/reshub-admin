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
import { Route, RouteComponentProps } from 'react-router-dom'
import Detail from './Detail'
import Loading from '../../components/common/atoms/loading'
import history from '../../utils/history'
import ModalAlert from '../../components/modal/ModalAlert'
import { MatchParams } from '../../components/common/_PropsType'

const Salon = ({ match }: RouteComponentProps<MatchParams>) => {

  const dispatch = useDispatch()

  const currentPage = localStorage.getItem('currentPage') ? localStorage.getItem('currentPage') : 1
  const [page, setPage] = useState<number>(Number(currentPage))
  localStorage.setItem('currentPage', String(page))

  const { shops, loading } = useSelector((state: RootState) => state.shop)
  const { open, openModal, closeModal } = useModal(false, 'form')

  useEffect(() => {
    if (match.isExact) dispatch(fetchShopList(Number(currentPage)))
  }, [page, dispatch, currentPage, match.isExact])

  return (
    <MainTemplate>
      { loading ? <Loading/> :
        <>
          <Route exact path="/salon">
            <SalonList shops={ shops.values } modalOpenHandler={ openModal }/>
            <Paginate totalPage={ shops.totalCount } setPage={ setPage } page={ currentPage }/>
          </Route>
          <Route path="/salon/:id" component={ Detail }/>
        </>
      }
      <ModalOverlay modalOpen={ open } modalCloseHandler={ closeModal }>
        <ModalAlert
          modalCloseHandler={ closeModal }
          modalHandler={ () => history.push('/form/salon') }
          alertText="サロンの登録画面に移動しますか？"
          buttonText="移動"
        />
      </ModalOverlay>
    </MainTemplate>
  )

}
export default Salon
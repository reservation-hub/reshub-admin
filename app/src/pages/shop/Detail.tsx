import React, { useCallback, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { deleteShopData, getOneShop } from '@store/actions/shopAction'
import { useModal } from '@utils/hooks/useModal'
import { MatchParams } from '@components/common/_PropsType'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import history from '@utils/routes/history'
import Loading from '@components/common/atoms/loading'
import Section from '@components/common/layout/Section'
import ShopDetail from '@components/detail/shop/ShopDetail'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { shop, loading, user } = useSelector(
    (state: RootState) => ({
      shop: state.shop.shop,
      loading: state.shop.loading,
      user: state.auth.user
    }),
    shallowEqual
  )
  const convertId = Number(id)
  const dispatch = useDispatch()

  const authCheck = user.role.name === 'admin'
  const itme = {
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }
  console.log(itme['name'])

  const { open, modalHandler } = useModal(false)

  const onDelete = useCallback(() => {
    dispatch(deleteShopData(convertId))
  }, [dispatch, convertId])

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [dispatch, convertId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Section>
          <ModalOverlay modalOpen={open} modalCloseHandler={modalHandler}>
            <ModalAlert
              modalCloseHandler={modalHandler}
              alertText='本当にこの店舗を削除しますか？'
              modalHandler={onDelete}
              buttonText='削除'
            />
          </ModalOverlay>
          <ShopDetail
            item={shop}
            modalOpenHandler={() =>
              history.push(
                authCheck ? `/salon/form/${id}` : `/shops/form/${id}`,
                { shop }
              )
            }
            subModalHandler={modalHandler}
          />
        </Section>
      )}
    </>
  )
}

export default Detail

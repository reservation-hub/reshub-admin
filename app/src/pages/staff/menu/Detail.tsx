import React, { useCallback, useEffect } from 'react'
import Loading from '@components/common/atoms/loading'
import { MatchParams } from '@components/common/_PropsType'
import { deleteMenu, getMenu } from '@store/actions/menuAction'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import MenuDetail from '@components/detail/menu/MenuDetail'
import history from '@utils/routes/history'
import { TStateInId } from '@/components/detail/_PropsType'

const Detail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = Number(location.state?.shopId)
  const { open, modalHandler } = useModal(false)
  const { menu, loading } = useSelector((state: RootState) => state.menu)

  const onDelete = useCallback(() => {
    dispatch(deleteMenu(menu.shopId, menu.id))
  }, [dispatch, menu])

  useEffect(() => {
    dispatch(getMenu(shopId, convertId))
  }, [dispatch, shopId, convertId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MenuDetail
          item={menu}
          subModalHandler={modalHandler}
          modalOpenHandler={() => history.push(`/menu/edit/${id}`, { menu })}
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

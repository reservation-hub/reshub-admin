import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getOneUser } from '@store/actions/userAction'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import history from '@utils/routes/history'
import { MatchParams } from '@components/common/_PropsType'
import Loading from '@components/common/atoms/loading'
import UserDetail from '@components/detail/user/UserDetail'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { user, loading } = useSelector((state: RootState) => state.user)
  const convertId = Number(id)
  const dispatch = useDispatch()
  const { open, modalHandler } = useModal(false)

  const onDelete = useCallback(() => {
    dispatch(deleteUser(convertId))
  }, [dispatch, convertId])

  useEffect(() => {
    dispatch(getOneUser(convertId))
  }, [dispatch, convertId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ModalOverlay modalOpen={open} modalCloseHandler={modalHandler}>
            <ModalAlert
              modalCloseHandler={modalHandler}
              modalHandler={onDelete}
              alertText='このユーザーを削除しますか？'
              buttonText='削除'
            />
          </ModalOverlay>
          <UserDetail
            item={user}
            modalOpenHandler={() => history.push(`/users/form/${id}`, { user })}
            subModalHandler={modalHandler}
          />
        </>
      )}
    </>
  )
}

export default React.memo(Profile)

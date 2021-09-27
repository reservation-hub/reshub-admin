import React, { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getOneUser } from '@store/actions/userAction'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '@store/store'
import { useModal } from '@utils/useModal'
import ProfileItem from '@components/detail/User/ProfileItem'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import history from '@utils/history'
import { MatchParams } from '@components/common/_PropsType'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { user } = useSelector((state: RootState) => state.user)
  const convertId = Number(id)
  const dispatch = useDispatch()

  const deleteModal = useModal(false, 'delete')

  const onDelete = useCallback(() => {
    dispatch(deleteUser(convertId))
  }, [dispatch, convertId])

  useEffect(() => {
    dispatch(getOneUser(convertId))
  }, [dispatch, convertId])

  // TODO スタイルを指定
  return (
    <>
      {deleteModal.modalType === 'delete' && (
        <ModalOverlay
          modalOpen={deleteModal.open}
          modalCloseHandler={deleteModal.closeModal}
        >
          <ModalAlert
            modalCloseHandler={deleteModal.closeModal}
            modalHandler={onDelete}
            alertText='このユーザーを削除しますか？'
            buttonText='削除'
          />
        </ModalOverlay>
      )}
      <ProfileItem
        user={user}
        modalOpenHandler={() => history.push(`/form/user/${id}`, { user })}
        subModalHandler={deleteModal.openModal}
      />
    </>
  )
}

export default Profile

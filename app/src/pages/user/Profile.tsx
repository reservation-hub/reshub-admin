import React, { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getOneUser } from '../../store/actions/userAction'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store/store'
import { MatchParams } from '../../components/user/_PropsType'
import { useModal } from '../../utils/useModal'

import ProfileItem from '../../components/user/profile/ProfileItem'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalAlert from '../../components/modal/ModalAlert'
import history from '../../utils/history'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {

  const { id } = match.params
  const { user } = useSelector((state: RootState) => state.user)
  const convertId: number = Number(id)
  const dispatch = useDispatch()

  const formModal = useModal(false, 'form')
  const deleteModal = useModal(false, 'delete')

  const onDelete = useCallback(
    () => {
      dispatch(deleteUser(convertId))
    }, [dispatch, convertId]
  )

  useEffect(() => {
    dispatch(getOneUser(convertId))
  }, [dispatch, convertId])

  // TODO スタイルを指定
  return (
    <>
      { formModal.modalType === 'form' &&
      <ModalOverlay
        modalOpen={ formModal.open }
        modalCloseHandler={ formModal.closeModal }
      >
        <ModalAlert
          modalCloseHandler={ formModal.closeModal }
          modalHandler={ () => history.push(`/form/user/${ id }`, { user }) }
          alertText="ユーザー編集に移動しますか？"
          buttonText="移動"
        />
      </ModalOverlay>
      }
      { deleteModal.modalType === 'delete' &&
      <ModalOverlay
        modalOpen={ deleteModal.open }
        modalCloseHandler={ deleteModal.closeModal }
      >
        <ModalAlert
          modalCloseHandler={ deleteModal.closeModal }
          modalHandler={ onDelete }
          alertText="このユーザーを削除しますか？"
          buttonText="削除"
        />
      </ModalOverlay>
      }
      <ProfileItem
        user={ user }
        modalOpenHandler={ formModal.openModal }
        subModalHandler={ deleteModal.openModal }
      />
    </>
  )
}

export default Profile

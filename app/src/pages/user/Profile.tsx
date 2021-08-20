import React, { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getOneUser } from '../../store/actions/userAction'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store/store'
import { MatchParams } from '../../components/user/_PropsType'
import { useModal } from '../../utils/useModal'

import ProfileItem from '../../components/user/profile/ProfileItem'
import ModalOverlay from '../../components/modal/ModalOverlay'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const { id } = match.params
  const { user } = useSelector((state: RootState) => state.user)
  const convertId: number = Number(id)
  const dispatch = useDispatch()
  
  const { open, openModal, closeModal } = useModal(false)
  
  const onDelete = useCallback(
    () => {
      dispatch(deleteUser(convertId))
    }, [convertId, dispatch]
  )
  
  useEffect(() => {
    dispatch(getOneUser(convertId))
  }, [dispatch, convertId])
  // TODO スタイルを指定
  return (
    <>
      <ModalOverlay
        modalOpen={ open }
        modalCloseHandler={ closeModal }
        modalTitle='ユーザ編集'
      >
        test
      </ModalOverlay>
      <ProfileItem
        user={ user }
        modalOpenHandler={ openModal }
        onDelete={ onDelete }
      />
    </>
  )
}

export default Profile

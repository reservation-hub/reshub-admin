import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getOneUser } from '../../store/actions/userAction'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store/store'
import { MatchParams } from '../../components/user/_PropsType'
import { useModal } from '../../utils/useModal'

import ProfileItem from '../../components/user/profile/ProfileItem'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalAlert from '../../components/modal/ModalAlert'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const { id } = match.params
  const { user } = useSelector((state: RootState) => state.user)
  const convertId: number = Number(id)
  const dispatch = useDispatch()
  
  const [modalStat, setModalStat] = useState<string>('')
  const { open, openModal, closeModal } = useModal(false)
  
  const deleteModalOpen = useCallback(
    () => {
      setModalStat('deleteModal')
      openModal()
    }, [openModal]
  )
  
  const modalCloseHandler = useCallback(
    () => {
      setModalStat('')
      closeModal()
    },
    [closeModal]
  )
  
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
      { modalStat === 'deleteModal'
        ? <ModalOverlay
          modalOpen={ open }
          modalCloseHandler={ modalCloseHandler }
          modalTitle='gaga'
        >
          <ModalAlert
            modalCloseHandler={ modalCloseHandler }
            alertText='本当にこのユーザーを削除しますか？'
            onDelete={ onDelete }
          />
        </ModalOverlay>
        : <ModalOverlay
          modalOpen={ open }
          modalCloseHandler={ closeModal }
          modalTitle='ユーザ編集'
        >
          test
        </ModalOverlay>
      }
      <ProfileItem
        user={ user }
        modalOpenHandler={ openModal }
        subModalHandler={ deleteModalOpen }
      />
    </>
  )
}

export default Profile

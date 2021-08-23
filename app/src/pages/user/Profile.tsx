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
import FormHeader from '../../components/modal/FormHeader'

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const { id } = match.params
  const { user } = useSelector((state: RootState) => state.user)
  const convertId: number = Number(id)
  const dispatch = useDispatch()
  
  const deleteModal = useModal(false, 'delete')
  const formModal = useModal(false, 'form')
  
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
      { deleteModal.modalStat === 'delete'
      && <ModalOverlay
        modalOpen={ deleteModal.open }
        modalCloseHandler={ deleteModal.closeModal }
      >
        <ModalAlert
          modalCloseHandler={ deleteModal.closeModal }
          alertText='本当にこのユーザーを削除しますか？'
          onDelete={ onDelete }
        />
      </ModalOverlay>
      }
      { formModal.modalStat === 'form'
      && <ModalOverlay
        modalOpen={ formModal.open }
        modalCloseHandler={ formModal.closeModal }
      >
        <FormHeader modalTitle='test' modalCloseHandler={ formModal.closeModal } />
        test
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

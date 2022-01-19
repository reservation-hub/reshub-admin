import { InsertShopQuery } from '@utils/api/request-response-types/Shop'
import CenterBox from '@components/common/layout/CenterBox'
import SubTemplate from '@components/common/layout/SubTemplate'
import SalonForm from 'components/form/shop/SalonForm'
import { addShop } from '@store/actions/shopAction'
import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

const CreateShop = () => {
  const dispatch = useDispatch()

  const centerBarStyled =
    'w-[80rem] h-[50rem] rounded-[.5rem] bg-secondary-main overflow-scroll'

  return (
    <SubTemplate>
      <CenterBox classes={centerBarStyled}>
        {/* <SalonForm
          submitHandler={onSubmit}
          formValue={form}
          changeHandlers={changeHandlers}
        /> */}
      </CenterBox>
    </SubTemplate>
  )
}

export default CreateShop

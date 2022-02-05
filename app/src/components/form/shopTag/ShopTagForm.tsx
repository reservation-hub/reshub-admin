import React from 'react'
import { IFormProps } from '@components/form/_PropsType'
import FormWrapper from '@components/form/FormWrapper'
import { TagSchema } from './shopTagSchema'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import AsyncSelector from '@components/common/atoms/AsyncSelector'
import { useLoadOptions } from '@utils/hooks/useLoadOptions'

export interface IShopTagFormProps<T> extends IFormProps<T> {
  formValue: Record<string, any>
}

const ShopTagForm = <T extends TagSchema>({
  submitHandler,
  formState,
  error,
  defaultValue,
  control
}: IShopTagFormProps<T>) => {
  const loadTags = useLoadOptions(baseEndpoint.tags, undefined, undefined, true)
  return (
    <FormWrapper submitHandler={submitHandler} text={'新規登録'}>
      <AsyncSelector
        id='tagIds'
        label='タグ'
        autoComplete='off'
        placeholder='タグを入力してください'
        classes='my-3'
        name='tagIds'
        defaultAdditional={{ page: 1 }}
        value={defaultValue?.tagIds}
        loadOptions={loadTags.loadMore}
        control={control}
        error={error?.tagIds}
        errorTxt={error?.tagIds?.message}
        isMulti
        numric
      />
    </FormWrapper>
  )
}

export default React.memo(ShopTagForm)

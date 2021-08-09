import React from 'react'

import { TextField, Select, InputLabel, Input, Container } from '@material-ui/core'

const ModalUserForm = () => {
  // todo モーダルフォーム作成
  return (
    <Container>
      <form className='user-create-form'>
        <TextField
            label='メールアドレス'
            name='email'
            autoComplete='off'
            fullWidth
        />
        <div className='user-name-kanji'>
          <TextField
              label='性'
              name='name'
              autoComplete='off'
          />
          <TextField
              label='名'
              name='name'
              autoComplete='off'
          />
        </div>
        <div className='user-name-kana'>
          <TextField
              label='セイ'
              name='name'
              autoComplete='off'
          />
          <TextField
              label='メイ'
              name='name'
              autoComplete='off'
          />
        </div>
        <TextField
            label='パスワード'
            name='password'
            autoComplete='off'
            fullWidth
        />
        <div className='user-gender'>
          <input type="button" value='男性'/>
          <input type="button" value='女性'/>
        </div>
        <div className='user-birthday'>
          <TextField
              label='年'
              name='date'
              autoComplete='off'
          />
          <TextField
              label='月'
              name='date'
              autoComplete='off'
          />
          <TextField
              label='日'
              name='date'
              autoComplete='off'
          />
        </div>
        <div className='access-role'>
          <InputLabel htmlFor='select-label' >権限</InputLabel>
          <Select name="role" input={ <Input id='select-label' /> } >
            <option value="admin">admin</option>
            <option value="salon staff">salon staff</option>
          </Select>
        </div>
        <button disabled >この情報で登録</button>
      </form>
    </Container>
  )

}

export default ModalUserForm

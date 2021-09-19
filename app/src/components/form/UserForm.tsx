import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './Header'
import FormStyle, { StyledInput } from './FormStyle'
import CustomButton from '../common/atoms/CustomButton'
import { IUserForm } from './_PropsType'
import { VALIDATION_TEXT } from '../../constants/FormValid'
import RoleSelector from '../common/atoms/RoleSelector'
import DayPicker from '../common/atoms/DayPicker'
import dayjs from 'dayjs'

const UserForm = ({
  submitHandler,
  formState,
  formValue,
  changeHandler,
  error
}: IUserForm) => {
  
  const classes = FormStyle()
  let disabled: boolean = false

  for (const value of Object.values(formValue)) {
    disabled = value.length === 0
  }

  return (
    <Container maxWidth="sm" className={ classes.container }>
      <Header
        title={ formState?.user ? `${ formState.user.email }編集` : '新規登録' }
      />
      <div className="form-box">
        <form onSubmit={ submitHandler }>
          <div className="input-box">
            <StyledInput
              label="メールアドレス"
              autoComplete="off"
              placeholder="メールアドレスを入力してください。"
              fullWidth
              variant="outlined"
              name="email"
              value={ formValue.email }
              error={ error.email }
              onChange={ changeHandler }
              onBlur={ changeHandler }
              helperText={
                error.email &&
                VALIDATION_TEXT.EMAIL
              }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="ユーザーネーム"
              autoComplete="off"
              placeholder="ユーザーネームを入力してください。"
              fullWidth
              variant="outlined"
              name="username"
              onChange={ changeHandler }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="性"
              autoComplete="off"
              placeholder="お名前（名字）を入力してください。"
              variant="outlined"
              name="firstNameKanji"
              className="kanji-kana-name"
              value={ formValue.firstNameKanji }
              onChange={ changeHandler }
              onBlur={ changeHandler }
            />
            <StyledInput
              label="名"
              autoComplete="off"
              placeholder="お名前を入力してください。"
              variant="outlined"
              name="lastNameKanji"
              className="kanji-kana-name"
              value={ formValue.lastNameKanji }
              onChange={ changeHandler }
              onBlur={ changeHandler }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="セイ"
              autoComplete="off"
              placeholder="お名前（名字）を入力してください。"
              variant="outlined"
              name="firstNameKana"
              className="kanji-kana-name"
              value={ formValue.firstNameKana }
              error={ error.firstNameKana }
              onChange={ changeHandler }
              onBlur={ changeHandler }
              helperText={
                error.firstNameKana &&
                VALIDATION_TEXT.KANA_NAME
              }
            />
            <StyledInput
              label="メイ"
              autoComplete="off"
              placeholder="お名前を入力してください。"
              variant="outlined"
              name="lastNameKana"
              className="kanji-kana-name"
              value={ formValue.lastNameKana }
              error={ error.lastNameKana }
              onChange={ changeHandler }
              onBlur={ changeHandler }
              helperText={
                error.lastNameKana &&
                VALIDATION_TEXT.KANA_NAME
              }
            />
          </div>
          {
            !formState?.user &&
            <>
              <div className="input-box">
                <StyledInput
                  label="パスワード"
                  autoComplete="off"
                  placeholder="パスワードを入力してください。"
                  fullWidth
                  variant="outlined"
                  name="password"
                  type="password"
                  error={ error.password || error.duplicated }
                  onChange={ changeHandler }
                  onBlur={ changeHandler }
                  helperText={
                    error.password &&
                    VALIDATION_TEXT.PASSWORD
                  }
                />
              </div>
              <div className="input-box">
                <StyledInput
                  label="パスワード確認"
                  autoComplete="off"
                  placeholder="確認用パスワードを入力してください。"
                  fullWidth
                  variant="outlined"
                  name="confirm"
                  type="password"
                  error={ error.confirm || error.duplicated }
                  onChange={ changeHandler }
                  onBlur={ changeHandler }
                  helperText={
                    error.confirm &&
                    VALIDATION_TEXT.PASSWORD
                  }
                />
              </div>
            </>
          }
          <div className="input-box genderRadio">
            <input
              type="radio"
              id="genderMale"
              name="gender"
              value="male"
              onChange={ changeHandler }
            />
            <label htmlFor="genderMale">男性</label>
            <input
              type="radio"
              id="genderFemale"
              name="gender"
              value="female"
              onChange={ changeHandler }
            />
            <label htmlFor="genderFemale">女性</label>
            <input
              type="radio"
              id="genderOther"
              name="gender"
              value="other"
              onChange={ changeHandler }
            />
            <label htmlFor="genderOther">その他</label>
          </div>
          <div className="input-box">
            <DayPicker
              id="year"
              label="年"
              name="birthdayY"
              classes="birthday"
              selectHandler={ changeHandler }
              from={ 1900 }
              to={ dayjs().year() }
              option={ formValue.birthdayY }
            />
            <DayPicker
              id="month"
              label="月"
              name="birthdayM"
              classes="birthday"
              selectHandler={ changeHandler }
              from={ 1 }
              to={ 12 }
              option={ formValue.birthdayM }
            />
            <DayPicker
              id="day"
              label="日"
              name="birthdayD"
              classes="birthday"
              selectHandler={ changeHandler }
              from={ 1 }
              to={ 31 }
              option={ formValue.birthdayD }
            />
          </div>
          <div className="input-box">
            <RoleSelector
              option={ formValue.role }
              selectHandler={ changeHandler }
            />
          </div>
          { error.duplicated && VALIDATION_TEXT.DUPLICATED }
          <CustomButton
            className={
              disabled ?
                'disabled-button' :
                'submit-button'
            }
            disabled={ disabled }
          >
            登録
          </CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default UserForm
import React from 'react'
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core'
import ModalFormStyle, { ModalInput, ModalSelect } from './ModalFormStyle'
import CustomButton from '../common/atoms/CustomButton'
import { UserModalForm } from './_PropsType'

const ModalUserForm: UserModalForm = ({
  onSubmit,
  validation,
  formInitialState
}) => {
  const classes = ModalFormStyle()

  // const [formik] = useValidation(formInitialState, validation, onSubmit)

  return (
    <React.Fragment>
      {/*<form onSubmit={ formik.handleSubmit } className="modalInputForm">*/ }
      {/*  <div className="inputBox">*/ }
      {/*    <ModalInput*/ }
      {/*      label="メールアドレス"*/ }
      {/*      name="email"*/ }
      {/*      autoComplete="off"*/ }
      {/*      fullWidth*/ }
      {/*      variant="outlined"*/ }
      {/*      value={ formik.values.email }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      error={ formik.touched.email && Boolean(formik.errors.email) }*/ }
      {/*      helperText={ formik.touched.email && formik.errors.email }*/ }
      {/*    />*/ }
      {/*  </div>*/ }
      {/*  <div className="inputBox">*/ }
      {/*    <div className="flexBetweenDiv">*/ }
      {/*      <ModalInput*/ }
      {/*        label="性"*/ }
      {/*        name="lastNameKanji"*/ }
      {/*        autoComplete="off"*/ }
      {/*        variant="outlined"*/ }
      {/*        className="inputSize"*/ }
      {/*        value={ formik.values.lastNameKanji }*/ }
      {/*        onChange={ formik.handleChange }*/ }
      {/*        error={ formik.touched.lastNameKanji && Boolean(formik.errors.lastNameKanji) }*/ }
      {/*        helperText={ formik.touched.lastNameKanji && formik.errors.lastNameKanji }*/ }
      {/*      />*/ }
      {/*      <ModalInput*/ }
      {/*        label="名"*/ }
      {/*        name="firstNameKanji"*/ }
      {/*        autoComplete="off"*/ }
      {/*        variant="outlined"*/ }
      {/*        className="inputSize"*/ }
      {/*        value={ formik.values.firstNameKanji }*/ }
      {/*        onChange={ formik.handleChange }*/ }
      {/*        error={ formik.touched.firstNameKanji && Boolean(formik.errors.firstNameKanji) }*/ }
      {/*        helperText={ formik.touched.firstNameKanji && formik.errors.firstNameKanji }*/ }
      {/*      />*/ }
      {/*    </div>*/ }
      {/*  </div>*/ }
      {/*  <div className="flexBetweenDiv">*/ }
      {/*    <ModalInput*/ }
      {/*      label="セイ"*/ }
      {/*      name="lastNameKana"*/ }
      {/*      autoComplete="off"*/ }
      {/*      variant="outlined"*/ }
      {/*      className="inputSize"*/ }
      {/*      value={ formik.values.lastNameKana }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      error={ formik.touched.lastNameKana && Boolean(formik.errors.lastNameKana) }*/ }
      {/*      helperText={ formik.touched.lastNameKana && formik.errors.lastNameKana }*/ }
      {/*    />*/ }
      {/*    <ModalInput*/ }
      {/*      label="メイ"*/ }
      {/*      name="firstNameKana"*/ }
      {/*      autoComplete="off"*/ }
      {/*      variant="outlined"*/ }
      {/*      className="inputSize"*/ }
      {/*      value={ formik.values.firstNameKana }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.firstNameKana && Boolean(formik.errors.firstNameKana) }*/ }
      {/*      helperText={ formik.touched.firstNameKana && formik.errors.firstNameKana }*/ }
      {/*    />*/ }
      {/*  </div>*/ }
      {/*  <div className="inputBox">*/ }
      {/*    <ModalInput*/ }
      {/*      label="パスワード"*/ }
      {/*      name="password"*/ }
      {/*      type="password"*/ }
      {/*      autoComplete="off"*/ }
      {/*      fullWidth*/ }
      {/*      variant="outlined"*/ }
      {/*      value={ formik.values.password }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.password && Boolean(formik.errors.password) }*/ }
      {/*      helperText={ formik.touched.password && formik.errors.password }*/ }
      {/*    />*/ }
      {/*  </div>*/ }
      {/*  <div className="inputBox">*/ }
      {/*    <ModalInput*/ }
      {/*      label="パスワード確認"*/ }
      {/*      name="confirm"*/ }
      {/*      type="password"*/ }
      {/*      autoComplete="off"*/ }
      {/*      fullWidth*/ }
      {/*      variant="outlined"*/ }
      {/*      value={ formik.values.confirm }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.confirm && Boolean(formik.errors.confirm) }*/ }
      {/*      helperText={ formik.touched.confirm && formik.errors.confirm }*/ }
      {/*    />*/ }
      {/*  </div>*/ }
      {/*  <div className="genderRadio">*/ }
      {/*    <FormControl component="fieldset" className="genderRadio">*/ }
      {/*      <FormLabel component="legend"*/ }
      {/*                 error={ formik.touched.gender && Boolean(formik.errors.gender) }>性別</FormLabel>*/ }
      {/*      <RadioGroup*/ }
      {/*        aria-label="gender"*/ }
      {/*        row*/ }
      {/*        name="gender"*/ }
      {/*        value={ formik.values.gender }*/ }
      {/*        onChange={ formik.handleChange }*/ }
      {/*        onBlur={ formik.handleBlur }*/ }
      {/*      >*/ }
      {/*        <FormControlLabel value="male" control={ <Radio color={ 'primary' }/> } label="男性"/>*/ }
      {/*        <FormControlLabel value="female" control={ <Radio color={ 'primary' }/> } label="女性"/>*/ }
      {/*      </RadioGroup>*/ }
      {/*      <FormHelperText error={ formik.touched.gender && Boolean(formik.errors.gender) }>*/ }
      {/*        { formik.touched.gender && Boolean(formik.errors.gender) ? '選んでください' : '' }*/ }
      {/*      </FormHelperText>*/ }
      {/*    </FormControl>*/ }
      {/*  </div>*/ }
      {/*  <div className="flexBetweenDiv">*/ }
      {/*    <ModalInput*/ }
      {/*      label="年"*/ }
      {/*      name="birthdayY"*/ }
      {/*      autoComplete="off"*/ }
      {/*      variant="outlined"*/ }
      {/*      className="birthday"*/ }
      {/*      value={ formik.values.birthdayY }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.birthdayY && Boolean(formik.errors.birthdayY) }*/ }
      {/*      helperText={ formik.touched.birthdayY && formik.errors.birthdayY }*/ }
      {/*    />*/ }
      {/*    <ModalInput*/ }
      {/*      label="月"*/ }
      {/*      name="birthdayM"*/ }
      {/*      autoComplete="off"*/ }
      {/*      variant="outlined"*/ }
      {/*      className="birthdayMD"*/ }
      {/*      value={ formik.values.birthdayM }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.birthdayM && Boolean(formik.errors.birthdayM) }*/ }
      {/*      helperText={ formik.touched.birthdayM && formik.errors.birthdayM }*/ }
      {/*    />*/ }
      {/*    <ModalInput*/ }
      {/*      label="日"*/ }
      {/*      name="birthdayD"*/ }
      {/*      autoComplete="off"*/ }
      {/*      variant="outlined"*/ }
      {/*      className="birthdayMD"*/ }
      {/*      value={ formik.values.birthdayD }*/ }
      {/*      onChange={ formik.handleChange }*/ }
      {/*      onBlur={ formik.handleBlur }*/ }
      {/*      error={ formik.touched.birthdayD && Boolean(formik.errors.birthdayD) }*/ }
      {/*      helperText={ formik.touched.birthdayD && formik.errors.birthdayD }*/ }
      {/*    />*/ }
      {/*  </div>*/ }
      {/*  <div className="inputBox">*/ }
      {/*    <ModalSelect variant="outlined"*/ }
      {/*    >*/ }
      {/*      <InputLabel id="roles-select-outlined-label" error={ formik.touched.role && Boolean(formik.errors.role) }>*/ }
      {/*        権限*/ }
      {/*      </InputLabel>*/ }
      {/*      <Select*/ }
      {/*        labelId="roles-select-outlined-label"*/ }
      {/*        id="roles-select-outlined"*/ }
      {/*        name="role"*/ }
      {/*        label="権限"*/ }
      {/*        style={ { fontSize: '1.6rem' } }*/ }
      {/*        value={ formik.values.role }*/ }
      {/*        onChange={ formik.handleChange }*/ }
      {/*        onBlur={ formik.handleBlur }*/ }
      {/*        error={ formik.touched.role && Boolean(formik.errors.role) }*/ }
      {/*      >*/ }
      {/*        /!* TODO: ここはapiからroleのリストを取得してここで使うようにするのが適切 */ }
      {/*        <MenuItem value="1">client</MenuItem>*/ }
      {/*        <MenuItem value="2">admin</MenuItem>*/ }
      {/*        <MenuItem value="3">salon staff</MenuItem>*/ }
      {/*      </Select>*/ }
      {/*      <FormHelperText error={ formik.touched.role && Boolean(formik.errors.role) }>*/ }
      {/*        { Boolean(formik.errors.role) && formik.touched.role ? formik.errors.role : '' }*/ }
      {/*      </FormHelperText>*/ }
      {/*    </ModalSelect>*/ }
      {/*  </div>*/ }
      {/*  <CustomButton className={ classes.submitButton }>*/ }
      {/*    この情報で登録*/ }
      {/*  </CustomButton>*/ }
      {/*</form>*/ }
    </React.Fragment>
  )

}

export default ModalUserForm

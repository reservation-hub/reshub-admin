import React from 'react'
import H1 from '../common/atoms/H1'
import CustomButton from '../common/atoms/CustomButton'
import history from '../../utils/history'
import FormStyle, { StyledInput } from './FormStyle'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '../user/_PropsType'

const SalonForm = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const classes = FormStyle()
  
  return (
    <Container maxWidth='sm' className={ classes.container }>
      {　/*TODO こっちコンポーネントにした方が良さそう*/ }
      <Grid container justifyContent='space-between'>
        <H1 color='primary'>
          form
        </H1>
        <CustomButton onClick={ () => history.goBack() }>
          戻る
        </CustomButton>
      </Grid>
      {
        match.params.id ?
          //todo edit form作成
          'edit form'
          : (
            <div className='form-box'>
              <form>
                <div className='input-box'>
                  <StyledInput
                    label='サロン名'
                    autoComplete='off'
                    placeholder='サロン名を入力してください。'
                    fullWidth
                    variant='outlined'
                  />
                </div>
                <div className='input-box'>
                  <StyledInput
                    label='住所'
                    autoComplete='off'
                    placeholder='住所を入力してください。'
                    fullWidth
                    variant='outlined'
                  />
                </div>
                <div className='input-box'>
                  たぶんここエリア
                </div>
                <div className='input-box'>
                  <StyledInput
                    label='営業日'
                    autoComplete='off'
                    placeholder='定休日を入力してください。 例）木'
                    fullWidth
                    variant='outlined'
                  />
                </div>
                <div className='input-box'>
                  ここで営業時間セレクト
                </div>
                <div className='input-box'>
                  ここは画像？
                </div>
                <div className='input-box'>
                  <TextField
                    label='詳細'
                    autoComplete='off'
                    fullWidth
                    multiline
                    rows={ 4 }
                    variant='outlined'
                  />
                </div>
                <CustomButton className='submit-button'>
                  登録
                </CustomButton>
              </form>
            </div>
          )
      }
    </Container>
  )
}

export default SalonForm

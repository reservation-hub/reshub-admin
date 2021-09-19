import React from 'react'
import H1 from '../common/atoms/H1'
import CustomButton from '../common/atoms/CustomButton'
import history from '../../utils/history'
import Grid from '@material-ui/core/Grid'
import { IFormType } from './_PropsType'

const Header = ({ title }: IFormType) => {
  return (
    <Grid container justifyContent="space-between">
      <H1 color="primary">
        { title }
      </H1>
      <CustomButton onClick={ () => history.goBack() }>
        戻る
      </CustomButton>
    </Grid>
  )
}

export default Header

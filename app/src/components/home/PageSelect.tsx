import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import PageSelectStyle from './PageSelectStyle'

const PageSelect = () => {
  const classes = PageSelectStyle()

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        className={classes.selectBox}
      >
        <Grid item xs={6} className='salon'>
          <Link to='/salon_dashboard' className='link-button'>
            サロン
          </Link>
        </Grid>
        <Grid item xs={6} className='restaurant'>
          <Link to='/restaurant_dashboard' className='link-button'>
            レストラン
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PageSelect

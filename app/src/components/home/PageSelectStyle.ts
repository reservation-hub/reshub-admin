import { makeStyles, Theme } from '@material-ui/core/styles'

const PageSelectStyle = makeStyles((theme: Theme) => ({
  selectBox: {
    height: '15.1rem',
    background: theme.palette.secondary.main,
    borderRadius: '1rem',
    textAlign: 'center',
    fontSize: '2.8rem',
    '& .link-button': {
      width: '100%',
      height: '100%',
      display: 'inline-block',
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        color: '#999',
        textDecoration: 'underline',
        transition: 'all .5s ease'
      }
    }

  }
}))

export default PageSelectStyle
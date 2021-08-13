import { makeStyles, Theme } from '@material-ui/core/styles'

const PageSelectStyle = makeStyles((theme: Theme) => ({
  selectBox: {
    height: '151px',
    background: theme.palette.secondary.main,
    borderRadius: '1rem',
    textAlign: 'center',
    fontSize: '1.5rem',
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
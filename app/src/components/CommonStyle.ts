import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Paper } from '@material-ui/core'

//-----------------------------------------------------------
// reshub-adminの共通のスタイルを指定する
//-----------------------------------------------------------

export const StyledPaper = withStyles((theme: Theme) => ({
  root: {
    width: '1120px',
    margin: '0 auto',
    justifyContent: 'center',
    boxSahdow: 'none'
  }
}))(Paper)

export const StyledHeader = withStyles((theme: Theme) => ({
  root: {
    height: '4.375rem',
    boxShadow: 'none',
    '& .header-items': {
      height: '100%',
      paddingLeft: '3.5rem',
      paddingRight: '3.5rem'
    }
  }
}))(AppBar)

const CommonStyle = makeStyles((theme: Theme) => ({
  mainBackground: {
    width: '100%',
    paddingTop: '5rem',
    position: 'relative',
    background: theme.palette.adBgColor.main
  },
  loginSelectBackground: {
    position: 'relative',
    background: theme.palette.primary.main
  },
  boxCenter: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    right: '25%',
    bottom: '25%'
  },
  buttonRoot: {
    fontSize: '1rem',
    border: `1px solid ${ theme.palette.primary.main }`,
    borderRadius: '.25rem',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    color: '#999',
    transition: 'all .5s ease 0s',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      transition: 'all .5s ease 0s',
      transform: 'translateY(0.2rem)'
    }
  },
  appBarHeader: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    background: theme.palette.adBgColor.main
  }
}))

export default CommonStyle
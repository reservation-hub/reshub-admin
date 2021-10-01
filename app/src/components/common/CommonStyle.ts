import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Alert from '@material-ui/lab/Alert'

//-----------------------------------------------------------
// reshub-adminの共通のスタイルを指定する
//-----------------------------------------------------------

export const StyledPaper = withStyles(() => ({
  root: {
    justifyContent: 'center',
    boxShadow: 'none',
    background: 'none'
  }
}))(Paper)

export const StyledHeader = withStyles((theme: Theme) => ({
  root: {
    height: '7.5rem',
    boxShadow: 'none',
    '& .header-items': {
      height: '100%',
      padding: '0 3.5rem 0 3.5rem'
    },
    '& .logout-button': {
      width: '11rem',
      height: '3.5rem',
      filter: 'none',
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: 'rgba(250, 250, 250, 0.3)',
        transition: 'all .5s ease 0s',
        transform: 'translateY(0.2rem)'
      }
    }
  }
}))(AppBar)

export const StyledAlert = withStyles(() => ({
  root: {
    position: 'absolute',
    top: '5rem',
    right: '.5rem',
    width: '35rem',
    background: 'rgb(189, 86, 66, 0.7)'
  }
}))(Alert)

const CommonStyle = makeStyles((theme: Theme) => ({
  mainBackground: {
    width: '82.5%',
    margin: '5.5rem 22rem 0',
    position: 'relative'
  },
  loginSelectBackground: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: theme.palette.primary.main
  },
  sideBar: {
    width: '18rem',
    position: 'absolute',
    left: '0',
    bottom: '0',
    top: '7rem',
    background: theme.palette.primary.main,
    '& span': {
      fontSize: '2.2rem'
    },
    '& .nav-wrapper': {
      margin: '3rem 0 1rem 0',
      fontSize: '2.4rem',
      '& .user-profile-link': {
        color: theme.palette.secondary.main,
        '& .user-name': {
          margin: '0'
        },
        '& svg': {
          width: '6rem',
          height: '6rem'
        }
      }
    },
    '& a': {
      zIndex: '10',
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '& .nav-items': {
        borderBottom: '1px solid'
      }
    },
    '& .active': {
      color: theme.palette.primary.main,
      '& div': {
        background: theme.palette.secondary.main
      }
    },
    '& footer': {
      margin: '.55rem',
      position: 'absolute',
      bottom: '0',
      '& span': {
        height: '2rem',
        marginRight: '.4rem',
        color: theme.palette.secondary.main,
        fontSize: '1.4rem',
        '& a > svg': {
          height: '2rem'
        }
      }
    }
  },
  boxCenter: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    right: '25%',
    bottom: '25%'
  }
}))

export default CommonStyle

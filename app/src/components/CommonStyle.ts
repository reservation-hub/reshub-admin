import {
  Paper
} from '@material-ui/core'

import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles'


//-----------------------------------------------------------
// reshub-adminの共通のスタイルを指定する
//-----------------------------------------------------------

export const StyledPaper = withStyles((theme: Theme) => ({
  root: {
    width: '1120px',
    margin: '0 auto',
    justifyContent: 'center',
    boxSahdow: 'none',
    background: theme.palette.secondary.main
  }
}))(Paper)

const CommonStyle = makeStyles((theme: Theme) =>
  createStyles({
    mainBackground: {
      position: 'relative',
      background: theme.palette.background.main
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
      fontSize: '.85rem',
      border: `1px solid ${ theme.palette.primary.main }`,
      borderRadius: '.25rem',
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer',
      color: '#999',
      transition: 'all .5s ease 0s',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      '&:hover': {
        color: '#fafafa',
        backgroundColor: theme.palette.primary.main,
        transition: 'all .5s ease 0s',
        transform: 'translateY(0.2rem)'
      }
    }
  }
))

export default CommonStyle
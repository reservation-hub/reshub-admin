import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Paper } from '@material-ui/core'

//-----------------------------------------------------------
// reshub-adminの共通のスタイルを指定する
//-----------------------------------------------------------

export const StyledPaper = withStyles((theme: Theme) => ( {
  root: {
    justifyContent: 'center',
    boxShadow: 'none',
    backgroundColor: theme.palette.adBgColor.main
  }
} ))(Paper)

export const StyledHeader = withStyles((theme: Theme) => ( {
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
} ))(AppBar)

const CommonStyle = makeStyles((theme: Theme) => ( {
  mainBackground: {
    width: '82.5%',
    margin: '5.5rem 3.5rem 0',
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
    height: '100%',
    float: 'right',
    background: theme.palette.primary.main,
    '& span': {
      fontSize: '2.2rem'
    },
    '& .nav-wrapper': {
      margin: '3rem 0 1rem 0',
      textAlign: 'center',
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
      display: 'flex',
      alignItems: 'center',
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
  }
  ,
  boxCenter: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    right: '25%',
    bottom: '25%'
  },
  buttonRoot: {
    width: '11rem',
    height: '3.5rem',
    border: `1px solid ${ theme.palette.primary.main }`,
    borderRadius: '.5rem',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    color: '#999',
    transition: 'all .5s ease 0s',
    lineHeight: 'unset',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      transition: 'all .5s ease 0s',
      transform: 'translateY(0.2rem)'
    }
  },
  appBarHeader: {
    padding: '0 1.5rem 1.5rem 1.5rem',
    background: theme.palette.adBgColor.main,
    '& .item-header': {
      color: theme.palette.primary.main
    },
    '& .item-button': {
      width: '35rem',
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  pagingBox: {
    '& .paging-container': {
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      '& li': {
        marginLeft: '.5rem',
        marginRight: '.5rem',
        border: `1px solid ${ theme.palette.primary.main }`,
        borderRadius: '.25rem',
        color: '#ABB0AD',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: '600',
        height: '4rem',
        lineHeight: '4rem',
        background: theme.palette.secondary.main,
        '& a': {
          width: '4rem',
          display: 'inline-block'
        }
      },
      '& .active': {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
      }
    }
  }
} ))

export default CommonStyle
import { makeStyles } from '@material-ui/core/styles'

//-----------------------------------------------------------
// reshub-adminの共通のスタイルをしてする
//-----------------------------------------------------------

const CommonStyle = makeStyles(theme => ({
  boxCenter: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    right: '25%',
    bottom: '25%'
  },
  buttonRoot: {
    fontSize: '.85rem',
    border: `1px solid ${ theme.maincolor }`,
    borderRadius: '.25rem',
    backgroundColor: theme.subcolor,
    cursor: 'pointer',
    color: '#999',
    transition: 'all .5s ease 0s',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    '&:hover': {
      color: '#fafafa',
      backgroundColor: theme.maincolor,
      transition: 'all .5s ease 0s',
      transform: 'translateY(0.2rem)'
    }
  }
}))

export default CommonStyle
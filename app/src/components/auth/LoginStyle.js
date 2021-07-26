import { makeStyles } from '@material-ui/core/styles'

const LoginStyle = makeStyles(theme => ({
  formBox: {
    height: '302px',
    padding: '1.5rem',
    borderRadius: '.5rem',
    backgroundColor: theme.subcolor
  },
  input: {
    '& label': {
      color: '#999'
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${ theme.palette.primary.main }`
    }
  },
  loginButton: {
    width: '100%',
    height: '35px',
    marginTop: '1.115rem',
    marginBottom: '1.5rem',
  },
  socialRoot: {
    width: '100%',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '.85rem',
    border: `1px solid #999`,
    borderRadius: '.25rem',
    backgroundColor: theme.subcolor,
    cursor: 'pointer',
    color: '#999',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    '&:hover': {
      backgroundColor: 'rgba(250, 250, 250, 0.3)',
      transition: 'all .5s ease 0s',
      transform: 'translateY(0.2rem)'
    },
    '& .google-icon > svg': {
      paddingTop: '.25rem',
      paddingLeft: '.5rem',
      width: '25px',
      height: '25px'
    },
    '& .button-text': {
      paddingRight: '1rem',
      width: '100%'
    }
  }
}))

export default LoginStyle
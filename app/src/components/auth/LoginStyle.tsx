import { makeStyles, Theme } from '@material-ui/core/styles'

const LoginStyle = makeStyles((theme: Theme) => ({
  formBox: {
    height: '30.2rem',
    padding: '3rem',
    borderRadius: '.5rem',
    backgroundColor: theme.palette.secondary.main,
    '& .inputBox': {
      '& label': {
        color: '#999'
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${theme.palette.primary.main}`
      }
    },
    '& .loginButton': {
      width: '100%',
      height: '3.5rem',
      marginTop: '2.5rem',
      marginBottom: '2.5rem'
    },
    '& .socialRoot': {
      width: '100%',
      height: '3.2rem',
      display: 'flex',
      alignItems: 'center',
      border: `1px solid #999`,
      borderRadius: '.5rem',
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer',
      color: '#999',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      '&:hover': {
        color: theme.palette.primary.main,
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
        paddingRight: '1.5rem',
        width: '100%',
        fontSize: '1.4rem'
      }
    }
  }
}))

export default LoginStyle

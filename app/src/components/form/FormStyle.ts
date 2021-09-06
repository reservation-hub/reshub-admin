import { Theme, withStyles } from '@material-ui/core/styles'
import { makeStyles, TextField } from '@material-ui/core'

export const StyledInput = withStyles((theme: Theme) => ( {
  root: {
    '& .MuiOutlinedInput-root': {
      height: '4rem'
    },
    '& .MuiOutlinedInput-input': {
      padding: '1.25rem'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(13px, -3px) scale(0.80)'
    }
  }
} ))(TextField)

const FormStyle = makeStyles((theme: Theme) => ( {
  container: {
    padding: '2rem',
    background: theme.palette.secondary.main,
    borderRadius: '.25rem',
    '& .form-box': {
      marginTop: '2rem',
      '& .input-box': {
        marginBottom: '2rem',
        '& .display-flex': {
          display: 'flex'
        },
        '& .justify-between': {
          justifyContent: 'space-between'
        },
        '& .w-15': {
          width: '13rem'
        },
        '& .font-16': {
          fontSize: '1.6rem'
        }
      },
      '& .submit-button': {
        width: '56rem',
        height: '4.5rem',
        marginTop: '.5rem',
        background: theme.palette.primary.main,
        color: '#fff',
        border: 'none'
      }
    }
  }
} ))

export default FormStyle


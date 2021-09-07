import { Theme, withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'

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

export const StyledContr = withStyles((theme: Theme) => ( {
  root: {
    '& .MuiInputLabel-formControl': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(13px, -3px) scale(0.80)'
    }
  }
} ))(FormControl)

const FormStyle = makeStyles((theme: Theme) => ( {
  container: {
    padding: '2rem',
    background: theme.palette.secondary.main,
    borderRadius: '.25rem',
    '& .form-box': {
      marginTop: '2rem',
      '& .input-box': {
        marginBottom: '2rem'
      },
      '& .submit-button': {
        width: '56rem',
        height: '4.5rem',
        marginTop: '.5rem',
        background: theme.palette.primary.main,
        color: '#fff',
        border: 'none'
      },
      '& .label': {
        marginBottom: '.5rem',
        paddingLeft: '1rem',
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '400'
      }
    }
  }
} ))

export default FormStyle


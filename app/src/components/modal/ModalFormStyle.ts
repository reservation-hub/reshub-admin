import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { FormControl, TextField } from '@material-ui/core'

//-----------------------------------------------------------
// reshhub-adminのモーダル画面のデフォルトスタイル
//-----------------------------------------------------------

export const ModalInput = withStyles(( theme: Theme ) => ({
  root: {
    '& .MuiInputBase-root': {
      fontSize: '.9rem'
    },
    '& .MuiOutlinedInput-root': {
      height: '2.4rem'
    },
    '& .MuiOutlinedInput-input': {
      padding: '.65rem'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(13px, -3px) scale(0.80)',
    }
  }
}))(TextField)

export const ModalSelect = withStyles((theme: Theme) => ({
  root: {
    width: '11.25rem',
    '& .MuiOutlinedInput-input': {
      padding: '.65rem'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(13px, -3px) scale(0.80)',
    }
  }
}))(FormControl)

const ModalFormStyle = makeStyles((theme: Theme) => ({
  modalContainer: {
    width: '500px',
    height: '550px',
    '& .modalInputForm': {
      margin: '1rem auto',
      width: '450px',
      height: '435px',
      '& .inputBox': {
        marginTop: '1rem'
      },
      '& .flexBetweenDiv': {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        '& .birthdayY': {
          width: '11.25rem'
        },
        '& .birthdayMD': {
          width: '7.313rem'
        }
      },
      '& .genderRadio': {
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& input[type=radio]': {
          display: 'none',
          '& + label': {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            display: 'inlineBlock',
            cursor: 'pointer',
            height: '2.362rem',
            width: '13.3rem',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '4px',
            lineHeight: '2.5rem',
            textAlign: 'center',
            fontSize: '1rem',
            color: 'rgba(0, 0, 0, 0.54)',
            '&:hover': {
              color: theme.palette.secondary.main,
              background: theme.palette.primary.main,
              transition: 'all .5s ease 0s'
            },
          },
        },
        '& input[type=radio]:checked + label': {
          background: theme.palette.primary.main,
          color: theme.palette.secondary.main
        }
      }
    },
    '& .inputSize': {
      width: '13.3rem'
    }
  },
  modalHeader: {
    height: '3.75rem',
    marginBottom: '.5rem',
    padding: '0 1.6rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.primary.main
  },
  submitButton: {
    width: '28.125rem',
    height: '2.813rem',
    marginTop: '1.5rem',
    background: theme.palette.primary.main,
    color: '#fff',
    fontSize: '1.2rem',
    boxShadow: '10px 10px',
    border: 'none',
    cursor: 'pointer'
  }
}))

export default ModalFormStyle
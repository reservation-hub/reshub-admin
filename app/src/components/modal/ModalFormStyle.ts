import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { FormControl, TextField } from '@material-ui/core'

//-----------------------------------------------------------
// reshhub-adminのモーダル画面のデフォルトスタイル
//-----------------------------------------------------------

export const ModalInput = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      height: '4rem',
    },
    '& .MuiOutlinedInput-input': {
      padding: '1.25rem'
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
    width: '18rem',
    height: '4rem',
    '& .MuiInputBase-root': {
      width: '19.1rem',
      height: '4rem'
    },
    '& .MuiFormLabel-root': {
      fontSize: '1.6rem'
    },
    '& .MuiOutlinedInput-input': {
      padding: '1.25rem'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(13px, -3px) scale(0.80)',
    },
    '& .MuiSelect-icon': {
      top: 'calc(50% - 8px)'
    }
  }
}))(FormControl)

const ModalFormStyle = makeStyles((theme: Theme) => ({
  modalContainer: {
    width: '50rem',
    height: '60rem',
    '& .modalInputForm': {
      margin: '3rem auto',
      width: '45rem',
      height: '46.5rem',
      '& .inputBox': {
        marginTop: '1.5rem'
      },
      '& .flexBetweenDiv': {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        '& .birthdayY': {
          width: '18rem'
        },
        '& .birthdayMD': {
          width: '11.7rem'
        }
      },
      '& .genderRadio': {
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // '& input[type=radio]': {
        //   display: 'none',
        //   '& + label': {
        //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        //     display: 'inlineBlock',
        //     cursor: 'pointer',
        //     height: '4rem',
        //     border: '1px solid rgba(0, 0, 0, 0.23)',
        //     borderRadius: '4px',
        //     lineHeight: '4rem',
        //     textAlign: 'center',
        //     color: 'rgba(0, 0, 0, 0.54)',
        //     '&:hover': {
        //       color: theme.palette.secondary.main,
        //       background: theme.palette.primary.main,
        //       transition: 'all .5s ease 0s'
        //     },
        //   },
        // },
        // '& input[type=radio]:checked + label': {
        //   background: theme.palette.primary.main,
        //   color: theme.palette.secondary.main
        // }
      }
    },
    '& .inputSize': {
      width: '21.5rem'
    }
  },
  modalHeader: {
    height: '6rem',
    padding: '0 2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.primary.main
  },
  submitButton: {
    width: '45rem',
    height: '4.5rem',
    marginTop: '1.5rem',
    background: theme.palette.primary.main,
    color: '#fff',
    border: 'none',
  }
}))

export default ModalFormStyle
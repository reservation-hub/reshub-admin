import { makeStyles, Theme } from '@material-ui/core/styles'


const ModalFormStyle = makeStyles((theme: Theme) => ({
  modalContainer: {
    width: '500px',
    height: '550px'
  },
  modalInputForm: {
    marginTop: '1rem',
    width: '450px',
    height: '435px'
  },
  flexBetweenDiv: {
    marginTop: '.5rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  genderRadio: {
    padding: '15px 10px',
    '& input[type=radio]': {
      display: 'none',
      '& + label': {
        display: 'inlineBlock',
        cursor: 'pointer',
        height: '24px',
        width: '90px',
        border: '1px solid black',
        lineHeight: '24px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '13px',
        background: '#fff',
        color: '#333'
      }
    },
    '& input[type=radio]:checked + label': {
      background: '#333',
      color: '#fff'
    }
  },
  submitButton: {
    width: '450px',
    height: '45px',
    background: '#669999',
    color: '#fff',
    fontSize: '1.2rem',
    boxShadow: '10px 10px',
    border: 'none'
  }
}))

export default ModalFormStyle
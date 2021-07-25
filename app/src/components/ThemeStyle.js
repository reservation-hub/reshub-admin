import { createTheme } from '@material-ui/core/styles'

//-----------------------------------------------------------
// reshub-adminのメインテーマとなるスタイルをしてする
//-----------------------------------------------------------

const theme = createTheme({
  maincolor: '#669999',
  subcolor: '#fff',
  theadColor: '#e5e5e5',
  theadFontColor: '#ABB0AD',
  tableFontColor: '#94B8B8',
  palette: {
    primary: {
      main: '#669999'
    },
    secondary: {
      main: '#999999'
    }
  }
})

export default theme
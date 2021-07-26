import { createTheme } from '@material-ui/core/styles'

//-----------------------------------------------------------
// reshub-adminのメインテーマとなるスタイルをしてする
//-----------------------------------------------------------

const theme = createTheme({
  sectionWidth: '1120px',
  palette: {
    primary: {
      main: '#669999'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      main: '#F0F5F5'
    },
    thead: {
      main: '#E5E5E5'
    },
    theadFontColor: {
      main: '#ABB0AD'
    },
    tbodyFontColor: {
      main: '#94B8B8'
    }
  }
})

export default theme
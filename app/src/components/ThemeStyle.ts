import { createTheme } from '@material-ui/core/styles'

//-----------------------------------------------------------
// reshub-adminのメインテーマとなるスタイルを指定する
//-----------------------------------------------------------

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    adBgColor?: PaletteColorOptions
    adTheadColor?: PaletteColorOptions
    adThFontColor?: PaletteColorOptions
    adTbFontColor?:PaletteColorOptions
  }
  interface Palette {
    adBgColor: PaletteColor
    adTheadColor: PaletteColor
    adThFontColor: PaletteColor
    adTbFontColor: PaletteColor
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#669999'
    },
    secondary: {
      main: '#FFFFFF'
    },
    adBgColor: {
      main: '#F0F5F5'
    },
    adTheadColor: {
      main: '#E5E5E5'
    },
    adThFontColor: {
      main: '#ABB0AD'
    },
    adTbFontColor: {
      main: '#94B8B8'
    }
  }
})

export default theme
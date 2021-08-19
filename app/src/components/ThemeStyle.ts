import { createTheme } from '@material-ui/core/styles'
import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { PaletteColorOptions } from '@material-ui/core'

//-----------------------------------------------------------
// reshub-adminのメインテーマとなるスタイルを指定する
// すべてのサイズはpxではなく％かremで指定すること
// ex ) fontSize: '15px' => fontSize: '1.5rem'
// 1rem = 10pxで計算できる。
//-----------------------------------------------------------

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    adBgColor?: PaletteColorOptions
    adTheadColor?: PaletteColorOptions
    adThFontColor?: PaletteColorOptions
    adTbFontColor?: PaletteColorOptions
  }
  
  interface Palette {
    adBgColor: PaletteColor
    adTheadColor: PaletteColor
    adThFontColor: PaletteColor
    adTbFontColor: PaletteColor
  }
}

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontSize: 14
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: '0',
          padding: '0',
          fontSize: '62.5%',
          fontFamily: '-apple-system, sans-serif, "メイリオ"',
          height: '100%'
        },
        body: {
          height: '100%',
          '& #reshub-root-page': {
            background: '#F0F5F5',
            height: '100%',
            '& input': {
              fontSize: '1.6rem'
            },
            '& label': {
              fontSize: '1.6rem'
            }
          }
        }
      }
    }
  },
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
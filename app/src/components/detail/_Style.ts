import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export const DataGrid = withStyles((theme) => ({
  root: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.secondary.main,
    '& .row': {
      display: 'flex',
      '& .header, .body': {
        display: 'inline-block',
        padding: '2rem',
        border: `2px solid ${theme.palette.primary.main}`,
        borderBottomWidth: '0px'
      },
      '& .header': {
        minWidth: '15rem',
        fontWeight: 'bold',
        fontSize: '1.6rem',
        borderRightWidth: '0px'
      },
      '& .body': {
        flex: '1 1 0%',
        fontSize: '1.6rem',
        margin: '0'
      }
    }
  }
}))(Grid)

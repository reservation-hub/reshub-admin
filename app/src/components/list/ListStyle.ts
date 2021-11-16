import { Theme, withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

export const StyledTableCell = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.adTbFontColor.main,
    borderTop: `1px solid ${theme.palette.adTheadColor.main}`,
    borderBottom: 'none',
    fontSize: '1.4rem',
    cursor: 'pointer',
    textAlign: 'center'
  }
}))(TableCell)

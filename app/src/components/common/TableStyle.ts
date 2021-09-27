import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'

//-----------------------------------------------------------
// reshub-adminのテーブルのデフォルトスタイルを指定する
//-----------------------------------------------------------

export const StyledTable = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.palette.secondary.main,
    '& .table-index': {
      width: '76px',
      padding: '0',
      textAlign: 'center'
    }
  }
}))(Table)

export const StyledTableHead = withStyles((theme: Theme) => ({
  root: {
    background: theme.palette.adTheadColor.main
  }
}))(TableHead)

export const StyledTableCell = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.adTbFontColor.main,
    borderTop: `1px solid ${theme.palette.adTheadColor.main}`,
    borderBottom: 'none',
    fontSize: '1.4rem',
    cursor: 'pointer'
  }
}))(TableCell)

const LocationStyle = makeStyles((theme: Theme) => ({
  tableHeadCell: {
    color: theme.palette.adThFontColor.main,
    fontWeight: 'bold',
    fontSize: '1.8rem'
  },
  tableHeader: {
    paddingLeft: '1rem'
  }
}))

export default LocationStyle

import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { Table, TableCell, TableHead } from '@material-ui/core'

//-----------------------------------------------------------
// reshub-adminのテーブルのデフォルトスタイルを指定する
//-----------------------------------------------------------

export const StyledTable = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
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
    borderTop: `1px solid ${ theme.palette.adTheadColor.main }`,
    borderBottom: 'none',
    fontSize: '1.4rem'
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
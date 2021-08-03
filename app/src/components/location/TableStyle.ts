import {
  Table,
  TableHead
} from '@material-ui/core'
import {
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles'

//-----------------------------------------------------------
// reshub-adminのテーブルのデフォルトスタイルを指定する
//-----------------------------------------------------------

export const StyledTable = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '654px'
  }
}))(Table)

export const StyledTableHead = withStyles((theme: Theme) => ({
  root: {
    background: theme.palette.adTheadColor.main
  }
}))(TableHead)

const LocationStyle = makeStyles((theme: Theme) => ({
  tableHeadCell: {
    color: theme.palette.adThFontColor.main,
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  tableBodyCell: {
    color: theme.palette.adTbFontColor.main,
    borderTop: `1px solid ${ theme.palette.adTheadColor.main }`,
    borderBottom: 'none'
  },
  tableHeader: {
    paddingLeft: '1rem'
  }
}))

export default LocationStyle
import {
  Table,
  TableHead
} from '@material-ui/core'

import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles'

export const StyledTable = withStyles(theme => ({
  root: {
    width: '100%',
    height: '654px'
  }
}))(Table)

export const StyledTableHead = withStyles(theme => ({
  root: {
    background: theme.palette.thead.main
  }
}))(TableHead)

const LocationStyle = makeStyles(theme => ({
  tableHeadCell: {
    color: theme.palette.theadFontColor.main,
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  tableBodyCell: {
    color: theme.palette.tbodyFontColor.main,
    borderTop: `1px solid ${ theme.palette.thead.main }`,
    borderBottom: 'none'
  },
  tableHeader: {
    paddingLeft: '1rem'
  }
}))

export default LocationStyle
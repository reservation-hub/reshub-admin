import {
  Paper, 
  Table,
  TableHead, 
  TableBody, 
  TableRow,
  TableCell,
  Typography  
} from '@material-ui/core'
import CityItem from './CityItem'

const CityList = ({ cities }) => {
  
  return (
    <Paper>
      <Typography variant='h4'>
        市区町村一覧
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              No
            </TableCell>
            <TableCell>
              市区町村
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { cities && cities.data.map(
            (city, index) => (
              <CityItem
                key={ index }
                cityNo={ city.id }
                cityName={ city.name }
              />
            )
          ) }
        </TableBody>
      </Table>
    </Paper>
  )
}

export default CityList

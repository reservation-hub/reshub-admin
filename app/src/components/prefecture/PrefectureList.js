import React from 'react'
import PrefectureItem from './PrefectureItem'
import {
  Paper, 
  Table,
  TableHead, 
  TableBody, 
  TableRow,
  TableCell,
  Typography  
} from '@material-ui/core'

const PrefectureList = ({ prefecture }) => {

  return (
    <Paper>
      <Typography variant='h4'>
        Prefecture List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              No
            </TableCell>
            <TableCell>
              Prefecture
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { prefecture && prefecture.docs.map(
            (pre, index) => (
              <PrefectureItem 
                key={ index } 
                preNo={ index } 
                preName={ pre.name } 
              />
            )
          ) }
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PrefectureList
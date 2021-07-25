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
        県一覧
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              No
            </TableCell>
            <TableCell>
              県
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { prefecture && prefecture.data.map(
            (pre, index) => (
              <PrefectureItem 
                key={ index } 
                preNo={ pre.id } 
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
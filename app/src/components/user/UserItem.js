import { Link } from 'react-router-dom'
import { 
  TableRow,
  TableCell  
} from '@material-ui/core'

const UserItem = ({
  userId,
  userNo,
  userFirstname,
  userLastname,
  userEmail
}) => {
  return (
    <TableRow>
      <TableCell>
        { userNo + 1 }
      </TableCell>
      <TableCell>
        <Link to={ `/users/${ userId }` }>
          { userFirstname } { userLastname }
        </Link>
      </TableCell>
      <TableCell>
        { userEmail }
      </TableCell>
    </TableRow>
  )
}

export default UserItem

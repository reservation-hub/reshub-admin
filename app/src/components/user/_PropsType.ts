import { User } from '../../entities/User'

export type ListTopBarProps = {
	title: string
	modalOpenHandler?: () => void
}

export type UserListProps = {
	users?: User[]
	user?: User
	modalOpenHandler?: () => void
}

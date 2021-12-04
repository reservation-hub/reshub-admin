import { Role } from '@entities/Role'

export const useRole = (r: Role | undefined) => {
  return r?.name
}

export default useRole

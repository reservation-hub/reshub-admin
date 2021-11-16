import { Role } from '@entity/Role'

export const useRole = (r: Role | undefined) => {
  return r?.name
}

export default useRole

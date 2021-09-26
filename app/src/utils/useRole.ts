import { Role } from '@entity/Role'

export const useRole = (r: Role[] | undefined) => {
  return r?.map((r) => r.name)
}

export default useRole

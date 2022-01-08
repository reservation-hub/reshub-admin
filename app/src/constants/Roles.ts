import { Role, RoleSlug } from "@utils/api/request-response-types/models/Role";

export const ROLES: Role[] = [
  { name: 'client', slug: RoleSlug.CLIENT},
  { name: 'admin', slug: RoleSlug.ADMIN },
  { name: 'shop staff', slug: RoleSlug.SHOP_STAFF }
]

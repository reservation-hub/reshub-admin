export interface User {

  id: number,
  username?: string,
  email: string
  roles: Role[]
  lastNameKanji: string
  firstNameKanji: string
  lastNameKana: string
  firstNameKana: string
  birthday: Date
  gender: string
  oAuthIDs?: string

}

export interface Role {
  id: number
  name: string
  description: string
  slug: string
}

export interface Location {
  
}
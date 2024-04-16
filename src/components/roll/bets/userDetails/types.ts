export interface IUserDetails {
  user: {
    id: number
    name: string
    avatar: string
    color: string
    chance: number
  }
  bet: {
    from: number
    to: number
  }
}

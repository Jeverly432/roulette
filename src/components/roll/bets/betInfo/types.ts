export interface IBetInfo {
  bet: {
    team?: {
      id: number
      name: string
    } | null
    price: number
  }
  users: {
    id: number
    color: string
    chance: number
  }[]
}

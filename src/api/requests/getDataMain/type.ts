import { User } from "@/types/types"

export interface GameResponse {
  game: Game
  percents: Percent[]
  bank: string
  bets: Bet[]
}

export interface Game {
  id: number
  random: string
  status: number
  signature: string
  price: number
}

export interface Percent {
  users: User[]
  id: number
  name: string
  sum: number
  chance: number
}

export interface Bet {
  id: number
  user_id: number
  team?: Team | null
  items: Item[]
  from: number
  price: number
  to: number
}

export interface Team {
  id: number
  name: string
}

export interface Item {
  store: number
  name: string
  image: string
  price: number
}

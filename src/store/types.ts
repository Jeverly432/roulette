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

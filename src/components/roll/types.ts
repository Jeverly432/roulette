import { User } from '@/types/types'

interface GameWinner {
  id: number
  name: string
  vk: number
  avatar: string
  team_id: null | number
}

interface Game {
  winner: GameWinner
  price: number
}

export interface ISlider {
  room: string
  game: Game
  ticket: number[]
  random: string
  signature: string
  users: User[]
  chance: number
  time: number
}

interface SliderGame {
  winner: {
    id: number
    name: string
    vk: number
    avatar: string
    team_id: number | null
  }
  price: number
}

interface Data {
  type: string
  data: {
    room: string
    game: SliderGame
    ticket: number[]
    random: string
    signature: string
    users: User[]
    chance: number
    time: number
  }
  room: string
}

export interface ISliderWinner {
  channel: string
  data: Data
}

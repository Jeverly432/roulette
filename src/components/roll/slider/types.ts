import { GameResponse } from '@/api/requests/getDataMain/type'
import { Bet } from '@/api/requests/getDataMain/type'
import { ISlider, ISliderWinner } from '../types'

export interface GameWinner {
  id: number
  name: string
  vk: number
  avatar: string
  team_id: null | number
}

export interface Game {
  winner: GameWinner
  price: number
}

interface RandomData {
  method: string
  hashedApiKey: string
  n: number
  min: number
  max: number
  replacement: boolean
  base: number
  data: number[]
  license: {
    type: string
    text: string
    infoUrl: null | string
  }
  userData: string
  completionTime: string
  serialNumber: number
}

export interface User {
  chance: number
  avatar: string
  name: string
  color: string
}

export interface Slider {
  room: string
  game: Game
  ticket: number[]
  random: string
  signature: string
  users: User[]
  chance: number
  time: number
}

export interface ISliderProps {
  data: Slider | null
  gameWinner: ISlider | null
}

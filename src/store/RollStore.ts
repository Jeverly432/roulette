/* eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwIiwiaW5mbyI6W119.bw8M6WYc3jrIx8-4T_9bc97TwJ-KpUGf8gHIMJINLZo */
import { makeObservable, observable, action, runInAction } from 'mobx'
import Centrifuge from 'centrifuge'
import { getDataMain } from '@/api/requests/getDataMain'
import { GameResponse } from '@/api/requests/getDataMain/type'
import { Bet } from './types'
import { ISlider } from '@/components/roll/types'

export default class RollStore {
  messages: GameResponse | null = null
  bets: Bet[] = []
  sliderData: any = null
  gameWinner: ISlider | null = null
  centrifugeInstance: Centrifuge | null = null

  constructor() {
    makeObservable(this, {
      messages: observable,
      bets: observable,
      sliderData: observable,
      gameWinner: observable,
      connectToCentrifuge: action,
      disconnectFromCentrifuge: action,
      fetchInitialData: action,
      subscribeToCentrifuge: action,
    })
    this.connectToCentrifuge()
  }

  connectToCentrifuge() {
    this.centrifugeInstance = new Centrifuge(
      'wss://app.ezcash36.casino/connection/websocket',
    )
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwIiwiaW5mbyI6W119.bw8M6WYc3jrIx8-4T_9bc97TwJ-KpUGf8gHIMJINLZo'
    this.centrifugeInstance.setToken(token)

    this.centrifugeInstance.on('connect', (context: any) => {
      console.log('Успешное подключение:', context)
    })

    this.centrifugeInstance.on('error', (error: any) => {
      console.error('Ошибка подключения:', error)
    })

    this.centrifugeInstance.on('disconnect', (context: any) => {
      console.log('Отключение:', context)
    })

    this.fetchInitialData()
    this.subscribeToCentrifuge()
    this.centrifugeInstance.connect()
  }

  disconnectFromCentrifuge() {
    if (this.centrifugeInstance) {
      this.centrifugeInstance.disconnect()
    }
  }

  async fetchInitialData() {
    try {
      const result = await getDataMain()
      if (result) {
        const response: GameResponse = result
        runInAction(() => {
          this.bets = response.bets ? Object.values(response.bets) : []
          this.messages = response
        })
      }
    } catch (error) {
      console.error('Ошибка при получении начальных данных:', error)
    }
  }

  subscribeToCentrifuge() {
    if (!this.centrifugeInstance) return

    this.centrifugeInstance.subscribe('broadcast', (message: any) => {
      runInAction(() => {
        if (message.data?.room !== 'main') {
          return
        }
        if (message.data?.type === 'newDeposit') {
          this.messages = message.data.data
          const newBet = message.data?.data?.bet
          if (newBet) {
            if (!this.bets.some(bet => bet.id === newBet.id)) {
              this.bets.push(newBet)
            }
          }
        }
        if (message.data?.type === 'slider' && message.data?.data.time === 30) {
          this.sliderData = message.data?.data
        }
        if (message.data?.type === 'slider' && message.data?.data.time === 5) {
          this.gameWinner = message.data?.data
          console.log((this.gameWinner = message.data?.data))
        }
        if (message.data?.type === 'newGame') {
          this.messages = null
          this.bets = []
          this.sliderData = null
          this.gameWinner = null
        }
      })
    })
  }
}

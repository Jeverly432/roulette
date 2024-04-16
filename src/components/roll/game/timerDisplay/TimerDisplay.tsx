import { useStores } from '@/store/RootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'

const TimerDisplay: React.FC = observer(() => {
  const { rollStore } = useStores()

  const formatTime = (time: number | null): string => {
    if (time === null) return ''
    return `${time < 10 ? '0' : ''}${time}`
  }

  const gameTimer = formatTime(rollStore.gameTimer)
  const startGameTimer = formatTime(rollStore.startGameTimer)

  let displayString = '30' 
  if (rollStore.gameTimer !== null || rollStore.startGameTimer !== null) {
    displayString = `${gameTimer}${startGameTimer ? startGameTimer : ''}`
  }

  return <div>00:{displayString}</div>
})

export default TimerDisplay

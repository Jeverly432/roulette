import 'twin.macro'
import { Game } from './game'
import { Players } from './players'
import { Best } from './bets'
import Slider from './slider/Slider'

import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store/RootStore'

const Roll: React.FC = observer(() => {
  const { rollStore } = useStores()

  return (
    <div tw="mx-auto flex max-w-[806px] flex-col gap-2.5">
      <Game messages={rollStore.messages || null} />
      {rollStore.sliderData && (
        <Slider/>
      )}
      <Players messages={rollStore.messages || null} />
      <Best
        bets={rollStore.bets || null}
        userDetail={rollStore.messages?.percents || []}
      />
    </div>
  )
})

export default Roll

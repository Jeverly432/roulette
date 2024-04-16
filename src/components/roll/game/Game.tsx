import 'twin.macro'
import Link from 'next/link'
import { Icons } from '../../icons'
import { uri } from '@/api/utils/uri'
import { useStores } from '@/store/RootStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { TimerDisplay } from './timerDisplay'

const Game: React.FC = observer(() => {
  const { rollStore } = useStores()

  useEffect(() => {
    rollStore.startGameTimer
  }, [rollStore.startGameTimer])

  return (
    <div tw="shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] overflow-hidden rounded-xs transition-shadow duration-500 dark:shadow-[]">
      <div tw="bg-[#F7F8FC] transition-colors duration-500 dark:bg-blue-primary-400">
        <ul tw="flex h-[65px] items-center justify-center gap-[25px]">
          <li>
            <Link
              href={`${uri()}/rating/day`}
              tw="flex items-center gap-[5px] font-bold text-[#ff860a] transition-all hover:opacity-[0.8]"
            >
              <Icons.Star tw="h-[19px] text-[#cfd6e0] text-[#ff860a]" />
              Топ + приз
            </Link>
          </li>
          <li>
            <Link
              href={`${uri()}/classic/main/history`}
              tw="flex items-center gap-[5px] font-bold text-[#555F64] transition-all hover:opacity-[0.8] dark:text-blue-primary-100"
            >
              <Icons.Time tw="h-[19px]" />
              История
            </Link>
          </li>
        </ul>
      </div>
      <div tw="flex h-[510px] flex-col flex-col items-center justify-center gap-2.5 bg-white text-6xl font-bold transition-colors duration-500 dark:bg-[#21273b]">
        Roll
        <TimerDisplay />
        <div tw="flex items-center gap-2.5 text-[25px] text-[#f3a243]">
          <Icons.Money />
          {rollStore.messages?.game.price ? (
            <>{rollStore.messages?.game.price.toFixed(2)}</>
          ) : (
            0
          )}
        </div>
      </div>
    </div>
  )
})

export default Game

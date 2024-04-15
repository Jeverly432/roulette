import 'twin.macro'
import Link from 'next/link'
import { Icons } from '../../icons'
import { IGame } from './types'
import { uri } from '@/api/utils/uri'

const Game: React.FC<IGame> = ({ messages }) => {
  return (
    <div tw="rounded-xs shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] overflow-hidden transition-shadow duration-500 dark:shadow-[]">
      <div tw="dark:bg-blue-primary-400 bg-[#F7F8FC] transition-colors duration-500">
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
              tw="dark:text-blue-primary-100 flex items-center gap-[5px] font-bold text-[#555F64] transition-all hover:opacity-[0.8]"
            >
              <Icons.Time tw="h-[19px]" />
              История
            </Link>
          </li>
        </ul>
      </div>
      <div tw="flex h-[510px] flex-col items-center justify-center gap-2.5 bg-white text-6xl font-bold transition-colors duration-500 dark:bg-[#21273b]">
        Roll
        {messages?.game.price ? (
          <div tw="flex items-center gap-2.5 text-[25px] text-[#f3a243]">
            <Icons.Money />
            {messages?.game.price.toFixed(2)}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Game

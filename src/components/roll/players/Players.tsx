import 'twin.macro'
import { IPlayers } from './types'
import { Percents } from '../game/percent'
import { Fire } from './fire'

const Players: React.FC<IPlayers> = ({ messages }) => {
  return (
    <div tw="rounded-xs shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] overflow-hidden transition-shadow duration-500 dark:shadow-[]">
      {messages?.percents ? (
        <ul tw="flex flex gap-2.5 overflow-x-auto overflow-y-hidden bg-white p-2.5 transition-colors duration-500 dark:bg-[#21273b]">
          {messages?.percents?.map((percent, index) => (
            <li key={index} tw="flex">
              <Percents percent={percent} />
            </li>
          ))}
          <li tw="rounded-xs relative flex h-[72px] w-[72px] shrink-0 overflow-hidden bg-[#F4F6FB] transition-all duration-500 dark:bg-[#2C3247]">
            <Fire />
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Players

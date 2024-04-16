import 'twin.macro'
import { Percents } from '../game/percent'
import { Fire } from './fire'
import { useStores } from '@/store/RootStore'
import { observer } from 'mobx-react-lite'

const Players: React.FC = observer(() => {
  const { rollStore } = useStores()

  return (
    <div tw="shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] overflow-hidden rounded-xs transition-shadow duration-500 dark:shadow-[]">
      {rollStore.messages?.percents?.length !== undefined &&
        rollStore.messages?.percents?.length >= 1 && (
          <ul tw="flex flex gap-2.5 overflow-x-auto overflow-y-hidden bg-white p-2.5 transition-colors duration-500 dark:bg-[#21273b]">
            {rollStore.messages?.percents?.map((percent, index) => (
              <li key={index} tw="flex">
                <Percents percent={percent} />
              </li>
            ))}
            <li tw="relative flex h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xs bg-[#F4F6FB] transition-all duration-500 dark:bg-[#2C3247]">
              <Fire />
            </li>
          </ul>
        )}
    </div>
  )
})

export default Players

import 'twin.macro'
import { BetInfo } from './betInfo'
import { UserDetails } from './userDetails'
import BetItemDetails from './betItemDetails/BetItemDetails'
import { useStores } from '@/store/RootStore'
import { observer } from 'mobx-react-lite'

const Bets = observer(() => {
  const { rollStore } = useStores()
  const reversedBets = [...(rollStore.bets || [])].reverse()

  return (
    <ul tw="flex flex-col gap-2.5">
      {reversedBets.map((bet, index) => {
        const relevantUsers = rollStore?.messages?.percents.flatMap(detail =>
          detail.users.filter(user => user.id === bet.user_id),
        )
        return (
          <li
            key={index}
            tw="shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] flex flex-col overflow-hidden rounded-xs transition-shadow duration-500 dark:shadow-[]"
          >
            <div tw="flex flex-col gap-[15px] bg-white p-[15px] transition-all duration-500 dark:bg-[#21273b]">
              <div tw="flex justify-between border-b border-b-[#E7ECF1] pb-2.5 transition-all duration-500 dark:border-b-[#2F344A]">
                {relevantUsers &&
                  relevantUsers.map(user => (
                    <div key={user.id}>
                      <UserDetails user={user} bet={bet} />
                    </div>
                  ))}
                <BetInfo bet={bet} users={relevantUsers || []} />
              </div>
              <ul tw="flex gap-[15px]">
                {bet.items.map((betItem, itemIndex) => (
                  <li key={itemIndex}>
                    <BetItemDetails betItem={betItem} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
})

export default Bets

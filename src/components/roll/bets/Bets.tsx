import 'twin.macro'
import { IBets } from './types'

import { BetInfo } from './betInfo'
import { UserDetails } from './userDetails'
import BetItemDetails from './betItem/BetItem'

const Best: React.FC<IBets> = ({ bets, userDetail }) => {
  const reversedBets = [...(bets || [])].reverse()
  
  return (
    <ul tw="flex flex-col gap-2.5">
      {reversedBets.map((bet, index) => {
        const relevantUsers = userDetail.flatMap(detail =>
          detail.users.filter(user => user.id === bet.user_id),
        )
        return (
          <li
            key={index}
            tw="rounded-xs shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)] flex flex-col overflow-hidden transition-shadow duration-500 dark:shadow-[]"
          >
            <div tw="flex flex-col gap-[15px] bg-white p-[15px] transition-all duration-500 dark:bg-[#21273b]">
              <div tw="flex justify-between border-b border-b-[#E7ECF1] pb-2.5 transition-all duration-500 dark:border-b-[#2F344A]">
                {relevantUsers.map(user => (
                  <div key={user.id}>
                    <UserDetails user={user} bet={bet} />
                  </div>
                ))}
                <BetInfo bet={bet} users={relevantUsers} />
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
}

export default Best

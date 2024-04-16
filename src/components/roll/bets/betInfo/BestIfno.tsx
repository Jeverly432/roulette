import tw from 'twin.macro'
import Link from 'next/link'
import { IBetInfo } from './types'
import { uri } from '@/api/utils/uri'
import { Icons } from '@/components/icons'

const BetInfo: React.FC<IBetInfo> = ({ bet, users }) => (
  <ul tw="flex gap-2.5">
    {bet.team?.name && (
      <li>
        <Link
          href={`${uri()}/teams/${bet.team.id}`}
          tw="bg-[linear-gradient(to right,#f7c43b,#f7c43b)] flex h-[35px] items-center justify-between gap-[5px] rounded-xs px-5 font-bold text-white transition-all duration-500 hover:opacity-[0.8]"
        >
          <Icons.Team tw="h-[18px]" />
          {bet.team.name}
        </Link>
      </li>
    )}
    <li tw="flex h-[35px] items-center justify-between gap-[5px] rounded-xs bg-[#F4F7FC] px-5 font-bold text-[#f3a243] transition-all duration-500 dark:bg-[#161B2B]">
      <Icons.Money />
      {bet.price}
    </li>
    {users.map(user => (
      <li
        key={user.id}
        css={[
          tw`flex items-center justify-between h-[35px] font-bold px-5 rounded-xs text-white`,
          { backgroundColor: user.color },
        ]}
      >
        {user.chance}%
      </li>
    ))}
  </ul>
)

export default BetInfo

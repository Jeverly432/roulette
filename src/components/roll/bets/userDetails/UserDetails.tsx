import 'twin.macro'
import Link from 'next/link'
import { IUserDetails } from './types'
import { uri } from '@/api/utils/uri'
import Image from 'next/image'

const UserDetails: React.FC<IUserDetails> = ({ user, bet }) => (
  <div
    key={user.id}
    tw="flex justify-between gap-2.5 overflow-x-auto overflow-y-hidden"
  >
    <Link
      href={`${uri()}/profile/${user.id}`}
      tw="flex gap-[15px] transition-all duration-500 hover:opacity-[0.8]"
    >
      <Image
        src={user.avatar}
        width={54}
        height={54}
        alt={user.name}
        tw="flex rounded-[15px]"
      />
      <div tw="flex flex-col">
        <span tw="text-[17px] font-bold text-gray-primary-600 transition-all duration-500 dark:text-white">
          {user.name}
        </span>
        <p tw="text-gray-primary-400">
          Билеты: #{bet.from.toFixed(0)} - #{bet.to.toFixed(0)}
        </p>
      </div>
    </Link>
  </div>
)

export default UserDetails

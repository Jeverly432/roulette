import { IPercent } from './types'
import Link from 'next/link'
import tw from 'twin.macro'
import Image from 'next/image'
import { uri } from '@/api/utils/uri'
import { roundUpToSecondDecimal } from '@/utils/roundUpToSecondDecimal'

const Percent: React.FC<IPercent> = ({ percent }) => {
  return (
    <div tw="relative">
      <Link
        href={`${uri()}/teams/${percent.id}`}
        tw="rounded-[0px 0px 6px 6px] absolute left-0 right-0 top-[-13px] z-10 overflow-hidden truncate whitespace-nowrap bg-[#f69a0cd9] px-[5px] text-center text-sm font-bold leading-[24px] text-white"
      >
        {percent.name}
      </Link>
      <ul tw="flex gap-2.5">
        {percent.users?.map((user, index) => (
          <li key={index} tw="relative flex h-[72px] w-[72px] overflow-hidden">
            <Link href={`${uri()}/profile/${user.id}/classic/main`}>
              <Image
                src={user.avatar}
                alt="avatar"
                width={72}
                height={72}
                tw="absolute h-full rounded-xs object-cover"
              />
              <div tw="absolute bottom-[5px] left-1/2 z-10 -translate-x-1/2">
                <span
                  css={[
                    tw`flex items-center justify-center min-w-[62px] py-[2px] rounded-[6px] text-white font-bold text-sm`,
                    { backgroundColor: user.color },
                  ]}
                >
                  {roundUpToSecondDecimal(user.chance)}%
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Percent

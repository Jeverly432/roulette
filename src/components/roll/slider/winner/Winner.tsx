import tw from 'twin.macro'
import React, { useEffect } from 'react'
import { IWinner } from './types'
import Link from 'next/link'
import { uri } from '@/api/utils/uri'
import Image from 'next/image'
import { Icons } from '@/components/icons'
import { useStores } from '@/store/RootStore'
import { observer } from 'mobx-react-lite'

const Winner = observer(() => {
  const { rollStore } = useStores()
  const gameWinner = rollStore.gameWinner?.game.winner
  const winnerColor =
    rollStore.gameWinner?.users.find(user => user.name === gameWinner?.name)
      ?.color ?? ''

  console.log(rollStore.gameWinner?.game.winner)
  return (
    <>
      {rollStore.gameWinner ? (
        <div tw="flex justify-between overflow-hidden rounded-xs bg-white p-2.5 transition-colors duration-500 dark:bg-[#21273b]">
          <div tw="flex justify-between gap-2.5 overflow-x-auto overflow-y-hidden">
            <Link
              href={`${uri()}/profile/${rollStore.gameWinner.game.winner.id}`}
              tw="flex gap-[15px] transition-all duration-500 hover:opacity-[0.8]"
            >
              <Image
                src={rollStore.gameWinner.game.winner.avatar}
                width={54}
                height={54}
                alt={rollStore.gameWinner.game.winner.name}
                tw="flex rounded-[15px]"
              />
              <div tw="flex flex-col">
                <span tw="text-[17px] font-bold text-gray-primary-600 transition-all duration-500 dark:text-white">
                  {rollStore.gameWinner.game.winner.name}
                </span>
                <p tw="text-gray-primary-400">
                  Победный билет: #{rollStore.gameWinner.ticket}
                </p>
              </div>
            </Link>
          </div>
          <ul tw="flex gap-2.5">
            <li tw="flex h-[35px] items-center justify-between gap-[5px] rounded-xs bg-[#F4F7FC] px-5 font-bold text-[#f3a243] transition-all duration-500 dark:bg-[#161B2B]">
              <Icons.Money />
              {rollStore.gameWinner.game.price}
            </li>
            <li
              css={[
                tw`flex items-center justify-between h-[35px] font-bold px-5 rounded-xs text-white`,
                { backgroundColor: winnerColor },
              ]}
            >
              {rollStore.gameWinner.chance.toFixed(1)}%
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
})

export default Winner

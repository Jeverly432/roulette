import 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { ISliderProps, User } from './types'
import Image from 'next/image'
import Shelter from '../../../../public/images/shelter.png'
import Roulette from '../../../../public/images/roulette.png'
import { Winner } from './winner'
import { useStores } from '@/store/RootStore'

const Slider = () => {
  const { rollStore } = useStores()
  const sliderRef = useRef<HTMLUListElement | null>(null)
  const itemWidthRef = useRef<HTMLLIElement | null>(null)
  const [shuffledUsers, setShuffledUsers] = useState<string[]>([])
  const [winner, setWinner] = useState<string | null>(null)

  const generateWeightedArray = (users: User[], winner: string): string[] => {
    let weightedArray: string[] = []

    users.forEach(user => {
      for (let i = 0; i < Math.round(user.chance); i++) {
        weightedArray.push(user.avatar)
      }
    })

    for (let i = weightedArray.length - 1; i > 0; i--) {
      const j = Math.round(Math.random() * (i + 1))
      ;[weightedArray[i], weightedArray[j]] = [
        weightedArray[j],
        weightedArray[i],
      ]
    }

    if (winner) {
      weightedArray = [
        ...weightedArray.slice(0, 95),
        winner,
        ...weightedArray.slice(95),
      ]
    }
    return weightedArray
  }

  useEffect(() => {
    if (rollStore.sliderData) {
      setWinner(rollStore.sliderData.game.winner.avatar)
      const winnerAvatar = rollStore.sliderData.game.winner.avatar
      setWinner(winnerAvatar)
      setShuffledUsers(
        generateWeightedArray(rollStore.sliderData.users, winnerAvatar),
      )
      startScroll()
    }
    return () => setShuffledUsers([])
  }, [rollStore.sliderData])

  useEffect(() => {
    console.log(winner)
    console.log(shuffledUsers)
  }, [winner, shuffledUsers])

  const startScroll = () => {
    if (sliderRef.current) {
      const finalPosition = -7930
      sliderRef.current.style.transition =
        'transform 24000ms cubic-bezier(0, 0, 0, 1)'
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${finalPosition}px)`
        }
      }, 10)
    }
  }
  return (
    <div tw="flex flex-col gap-2.5">
      <div tw="relative h-[90px] overflow-hidden rounded-xs bg-white py-[6px] transition-colors duration-500 dark:bg-[#21273b]">
        <div tw="absolute left-1/2 top-[6px]">
          <ul ref={sliderRef} tw="flex">
            {shuffledUsers.map((user, index) => (
              <li
                key={index}
                tw="mr-[5px] h-[78px] w-[78px] shrink-0 overflow-hidden rounded-[12px] bg-[#2b3146] p-[3px]"
                ref={itemWidthRef}
              >
                <img
                  src={user}
                  alt={user}
                  tw="h-full overflow-hidden rounded-[10px] object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <div tw="absolute left-0">
          <Image src={Roulette} width={18} height={82} alt="roulette" />
        </div>
        <div tw="absolute right-0 scale-x-[-1]">
          <Image src={Roulette} width={18} height={82} alt="roulette" />
        </div>
        <div tw="absolute left-1/2 top-[-4px] -translate-x-1/2">
          <Image
            src={Shelter}
            width={209}
            height={24}
            alt="shelter"
            tw="h-full"
          />
        </div>
        <div tw="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2 transform bg-[linear-gradient(45deg,#e09823,#f7e2465c)]" />
      </div>
      <>
        <Winner />
      </>
    </div>
  )
}

export default Slider

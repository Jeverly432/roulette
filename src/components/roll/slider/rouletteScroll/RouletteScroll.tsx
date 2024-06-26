import 'twin.macro'
import { useStores } from '@/store/RootStore'
import { generateSliderArray } from '@/utils/generateSliderArray'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Roulette from '../../../../../public/images/roulette.png'
import Shelter from '../../../../../public/images/shelter.png'
import Fire from '../../../../../public/images/fire.png'
import { observer } from 'mobx-react-lite'

const RouletteScroll = observer(() => {
  const sliderRef = useRef<HTMLUListElement | null>(null)
  const { rollStore, sliderStore } = useStores()

  const startScroll = () => {
    if (sliderRef.current) {
      const itemWidth = 78 + 5
      const finalPosition = 95.55 * itemWidth
      sliderRef.current.style.transition =
        'transform 24000ms cubic-bezier(0, 0, 0, 1)'
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${finalPosition}px)`
        }
      }, 10)
    }
  }

  useEffect(() => {
    if (rollStore.sliderData) {
      const winnerAvatar = rollStore.sliderData.game.winner.avatar
      sliderStore.setShuffledUsers(
        generateSliderArray(rollStore.sliderData.users, winnerAvatar),
      )
      startScroll()
    }
    return () => sliderStore.setShuffledUsers([])
  }, [rollStore.sliderData])

  return (
    <>
      <div tw="relative h-[90px] overflow-hidden rounded-xs bg-white py-[6px] transition-colors duration-500 dark:bg-[#21273b]">
        <div tw="absolute left-1/2 top-[6px]">
          <ul ref={sliderRef} tw="flex">
            {sliderStore.shuffledUsers.map((user, index) => (
              <li
                key={index}
                tw="mr-[5px] h-[78px] w-[78px] shrink-0 overflow-hidden rounded-[12px] bg-[#F4F5F9] p-[3px] transition-colors duration-500 dark:bg-[#2b3146]"
              >
                <Image
                  src={user === '/images/jackpot/fire.png' ? Fire : user}
                  height={78}
                  alt={user}
                  width={78}
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
    </>
  )
})
export default RouletteScroll

import { useStores } from '@/store/RootStore'
import { generateSliderArray } from '@/utils/generateSliderArray'
import Konva from 'konva'
import { Fragment, useEffect, useRef } from 'react'
import { Group, Layer, Rect, Stage } from 'react-konva'
import { URLImage } from './URLImage'
import React from 'react'

const rouletteScrollCanvas = () => {
  const sliderRef = useRef<Konva.Layer>(null)
  const { rollStore, sliderStore } = useStores()

  const startScroll = () => {
    if (sliderRef.current) {
      const itemWidth = 78 + 5
      const finalPosition = itemWidth * 95.55 - 403
      sliderRef.current.to({
        x: -finalPosition,
        duration: 24,
        easing: Konva.Easings.StrongEaseOut,
      })
    }
  }

  useEffect(() => {
    if (rollStore.sliderData) {
      const winnerAvatar = rollStore.sliderData.game.winner.avatar
      sliderStore.setShuffledUsers(
        generateSliderArray(rollStore.sliderData.users, winnerAvatar),
      )
      console.log()
      startScroll()
    }
    return () => sliderStore.setShuffledUsers([])
  }, [rollStore.sliderData])

  return (
    <Stage width={806} height={90}>
      <Layer>
        <Group ref={sliderRef} x={403}>
          {sliderStore.shuffledUsers.map((user, index) => (
            <Group key={index}>
              <URLImage
                src={
                  user === '/images/jackpot/fire.png'
                    ? '/images/fire.png'
                    : user
                }
                x={index * (78 + 5)}
                y={6}
                width={78}
                height={78}
              />
            </Group>
          ))}
        </Group>
        <URLImage
          src={'/images/roulette.png'}
          x={0}
          y={0}
          width={18}
          height={82}
        />
        <URLImage
          src={'/images/roulette-right.png'}
          x={806 - 18}
          y={0}
          width={18}
          height={82}
        />
        <URLImage
          src={'/images/shelter.png'}
          x={806 / 2 - 104.5}
          y={-4}
          width={209}
          height={24}
        />
        <Rect
          x={806 / 2 - 1.5}
          y={0}
          width={3}
          height={90}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: 90 }}
          fillLinearGradientColorStops={[0, '#e09823', 1, '#f7e2465c']}
        />
      </Layer>
    </Stage>
  )
}

export default rouletteScrollCanvas

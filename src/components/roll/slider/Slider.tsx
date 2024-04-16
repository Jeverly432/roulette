import 'twin.macro'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store/RootStore'
import { Winner } from './winner'
import { RouletteScroll } from './rouletteScroll'
import RouletteScrollCanvas from './rouletteScrollCanvas/rouletteScrollCanvas'

const Slider = observer(() => {
  const { rollStore, sliderStore } = useStores()

  return (
    <>
      {rollStore.sliderData && sliderStore.shuffledUsers && (
        <div tw="flex flex-col gap-2.5">
          {/* <RouletteScrollCanvas />  <--  Вариант на канвасах*/}
          <RouletteScroll />
          <Winner />
        </div>
      )}
    </>
  )
})

export default Slider

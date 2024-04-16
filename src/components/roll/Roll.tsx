import 'twin.macro'
import { Game } from './game'
import { Players } from './players'
import { Bets } from './bets'
import Slider from './slider/Slider'

const Roll: React.FC = () => {
  return (
    <div tw="mx-auto flex max-w-[806px] flex-col gap-2.5">
      <Game />
      <Slider />
      <Players />
      <Bets />
    </div>
  )
}

export default Roll

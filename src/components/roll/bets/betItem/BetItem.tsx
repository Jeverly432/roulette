import 'twin.macro'
import { Icons } from '@/components/icons'
import { IBetItem } from './types'
import Image from 'next/image'

const BetItemDetails: React.FC<IBetItem> = ({ betItem }) => (
  <div tw="flex h-[98px] w-[98px] flex-col items-center justify-center rounded-xs bg-[#EBEEF8] transition-all duration-500 dark:bg-[#1A1F31]">
    <Image src={betItem.image} alt={betItem.name} width={50} height={50} />
    <span tw="flex items-center text-base font-bold	leading-[21px] text-[#f3a243]">
      {betItem.price} <Icons.Money tw="h-[15px]" />
    </span>
  </div>
)

export default BetItemDetails

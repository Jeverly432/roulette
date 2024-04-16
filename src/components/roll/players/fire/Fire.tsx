import 'twin.macro'
import Image from 'next/image'
import FireImage from '../../../../../public/images/fire.png'

const Fire: React.FC = () => {
  return (
    <>
      <Image
        src={FireImage}
        alt="fire"
        width={72}
        height={72}
        tw="absolute h-full rounded-xs object-cover"
      />
      <div tw="absolute bottom-[5px] left-1/2 z-10 -translate-x-1/2">
        <span
          tw="flex min-w-[62px] items-center justify-center rounded-[6px] bg-[#D7DDEC] py-[2px] text-sm font-bold text-[#3B4046] transition-all duration-500 dark:bg-[#4C5167] dark:text-[#949DC5]"
          style={{ textShadow: '0 0 16px rgba(0,0,0,.85)' }}
        >
          5%
        </span>
      </div>
    </>
  )
}

export default Fire

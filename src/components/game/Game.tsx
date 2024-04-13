import "twin.macro"
import Link from "next/link"
import { Icons } from "../icons"

const Game = () => {
  return (
    <div tw="shadow-[0px 7px 29px 0px rgb(222 226 241 / 33%)]">
      <div tw="bg-[#F7F8FC]">
        <ul tw="flex h-[65px] items-center justify-center gap-[25px]">
          <li>
            <Link
              href=""
              tw="flex items-center gap-[5px] text-[#ff860a] transition-all hover:opacity-[0.8]"
            >
              <Icons.Star tw="h-[19px] text-[#cfd6e0] text-[#ff860a]" />
              Топ + приз
            </Link>
          </li>
          <li>
            <Link
              href=""
              tw="flex items-center gap-[5px] text-[#555F64] transition-all hover:opacity-[0.8]"
            >
              <Icons.Time tw="h-[19px]" />
              История
            </Link>
          </li>
        </ul>
      </div>
      <div tw="flex h-[510px] items-center justify-center bg-white backdrop-blur transition-colors duration-500 dark:bg-[#21273b]">
        Roll
      </div>
    </div>
  )
}

export default Game

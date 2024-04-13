'use client'
import 'twin.macro'
import { useTheme } from 'next-themes'
import { Icons } from '@/components/icons'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div tw="flex flex-col justify-center">
      <input
        type="checkbox"
        id="lightSwitch"
        className="lightSwitch"
        tw="sr-only"
        checked={theme === 'light'}
        onChange={() => {
          if (theme === 'dark') {
            return setTheme('light')
          }
          return setTheme('dark')
        }}
      />
      <label
        tw="relative flex h-[35px]  w-[35px] cursor-pointer items-center justify-center rounded-full border p-1 text-slate-400 transition-colors hover:text-sky-500"
        htmlFor="lightSwitch"
      >
        <Icons.Sun tw="block h-[15px] dark:hidden" />
        <Icons.Moon tw="hidden h-[15px] dark:block" />
        <span tw="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  )
}

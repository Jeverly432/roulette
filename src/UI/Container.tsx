'use client'
import tw from 'twin.macro'
import { Logo } from '@/components/Logo'
import { ReactNode } from 'react'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ $hasBackground }: { $hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    $hasBackground && tw`bg-gradient-to-b from-neutral-300 to-neutral-700`,
  ],
}

const Container = (props: { $hasBackground: boolean; children: ReactNode }) => (
  <div css={styles.container({ $hasBackground: props.$hasBackground })}>
    <div tw="m-4 flex h-full flex-col justify-center gap-y-5 rounded text-center ">
      {props.children}
    </div>
    <Logo />
  </div>
)

export default Container

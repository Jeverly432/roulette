'use client'
import 'twin.macro'

interface IMainProps {
  children: React.ReactNode
}

const Main = ({ children }: IMainProps) => {
  return (
    <main>
      <div tw="container mx-auto px-4 py-10">{children}</div>
    </main>
  )
}

export default Main

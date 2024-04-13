import Header from '@/components/Header'
import Main from '@/components/Main'
import Theme from '@/contexts/ThemeProvider'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import type { Metadata } from 'next'
import 'twin.macro'
// import '@/styles/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s - ProjectName',
    default: 'ProjectName',
  },
  description: 'Description',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Theme>
            <Header />
            <Main>{props.children}</Main>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

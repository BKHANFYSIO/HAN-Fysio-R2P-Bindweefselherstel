import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bindweefselherstel | HAN Fysiotherapie',
  description: 'Leer over het herstelproces van bindweefsel en de factoren die hierbij een rol spelen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

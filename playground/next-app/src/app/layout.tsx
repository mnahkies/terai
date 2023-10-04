import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <p>Next.js example</p>
        <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
      </body>
    </html>
  )
}

function SuspenseFallback() {
  console.log('SuspenseFallback')
  return 'Loading...'
}

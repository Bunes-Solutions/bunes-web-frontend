import type { Metadata } from 'next'
import { Chivo } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'

const chivo = Chivo({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Bunes',
  description: 'Deploy your applications now!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          chivo.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}

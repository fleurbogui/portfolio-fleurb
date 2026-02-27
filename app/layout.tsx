import type { Metadata } from 'next'
import { Outfit, Playfair_Display, Fira_Code } from 'next/font/google'
import './globals.css'

const _outfit = Outfit({ subsets: ['latin'] })
const _playfair = Playfair_Display({ subsets: ['latin'] })
const _firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fleur BOGUI | Developpeuse Fullstack',
  description: 'Portfolio de Fleur BOGUI - Developpeuse Fullstack',
  icons: {
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

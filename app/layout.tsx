import type { Metadata } from 'next'
import '@/assets/styles/globals.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | ONline Cinema',
    default: 'ONline Cinema',
  },
  description: 'Онлайн кинотеатр: Online Cinema. Кино начинается здесь.',
  openGraph: {
    title: 'ONline Cinema',
    description: 'Онлайн кинотеатр: Online Cinema. Кино начинается здесь.',
    url: 'https://.com',
    siteName: 'ONline Cinema',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

import { FC } from 'react'
import styles from './Layout.module.scss'
import Nav from './Nav/Nav'
import Sidebar from './Sidebar/Sidebar'

const Layout:FC = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.center}>
        {children}
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Online Cinema',
//   description: 'Service for online movie watching',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="ru">
//       <body>{children}</body>
//     </html>
//   )
// }
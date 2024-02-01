import { ReactNode, FC } from 'react'
import styles from './Layout.module.scss'
import Nav from './Nav/Nav'
import Sidebar from './Sidebar/Sidebar'

type Props = { children: ReactNode }

const Layout:FC<Props> = ({
  children}) => {
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
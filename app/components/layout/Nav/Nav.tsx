import { FC } from 'react'
import styles from './Nav.module.scss'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'

const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <MenuContainer />
    </div>
  )
}

export default Nav
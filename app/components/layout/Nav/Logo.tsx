import Link from "next/link"
import { FC } from "react"
import logo from '../../../assets/images/logo.svg'
import Image from "next/image"

const Logo: FC = () => {
  return (
    <Link href='/' className='px-layout mb-10 block'>
      <Image src={logo} width={250} height={150} alt='logo Online Cinema' draggable={false} priority={true} />
    </Link>
  )
}

export default Logo
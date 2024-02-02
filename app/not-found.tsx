import Link from 'next/link'
import Heading from './components/ui/headings/Heading'

export default function NotFound() {
  return (
  
    <div className='h-screen flex items-center flex-col justify-center'>
      <Heading title='Ошибка 404 - Станица не найдена' />
      <Link href="/" className='mt-10 text-white text-opacity-80 hover:opacity-80'>Вернуться на главную</Link>
    </div>
  )
}
import { FC } from "react"
import { IHome } from "./home.interface"
// import Meta from "api/Meta/Meta"
import Heading from "@/components/ui/headings/Heading"

const Home: FC<IHome> = () => {
  return (
    <>
    {/* // <Meta title='Онлайн кинотеатр' description='Онлайн кинотеатр Online Cinema. Кино начинается здесь.'> */}
      <Heading title='Ваш личный онлайн кинотеатр' className="text-gray-300 mb-8 text-xl"/>
    {/* // </Meta> */}
    </>
  )
}

export default Home
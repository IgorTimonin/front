import { FC } from "react"
import { ISeo } from "./meta.interface"
import { usePathname } from "next/navigation"
import { siteName, titleMerge } from "@/config/seo.config"
import clearText from "@/utils/string/clearText"
import Logo from "@/assets/images/logo.svg"
// import Head from "next/head"

// const Meta: FC<ISeo> = ({ title, description, image, children }) => {
//   const pathname = usePathname()
//   const currentUrl = `${process.env.APP_URL}${pathname}`

//   return (
//     <>
//       <Head>
//         <title itemProp='headline'>{titleMerge(title)}</title>
//         {description ? (
//           <>
//             <meta
//               itemProp='description'
//               name='description'
//               content={clearText(description, 152)} />
//             <link rel='canonical' href={currentUrl} />
//             <meta property='og:locale' content='ru' />
//             <meta property='og:title' content={titleMerge(title)} />
//             <meta property='og:url' content={currentUrl} />
//             <meta property='og:image' content={image || Logo} />
//             <meta property='og:site_name' content={siteName} />
//             <meta property='og:description' content={clearText(description, 197)} />
//           </>
//         ) : <meta name='robots' content='noindex, nofollow' />}
//       </Head>
//       {children}
//     </>
//   )
// }


import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
}

const pathname = usePathname()
const currentUrl = `${process.env.APP_URL}${pathname}`

export async function generateMetadata(
  { params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: 'Online Cinema',
    description: 'Онлайн кинотеатр: Online Cinema. Кино начинается здесь.',
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Meta({params}: Props) {}
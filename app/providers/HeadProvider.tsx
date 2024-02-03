import { FC } from "react"
import NextProgressBar from 'nextjs-progressbar'
import { accentColor } from "@/config/constants"

interface Props {
  children: React.ReactNode;
}


const HeadProvider: FC <Props> = ({ children }) => {
  return (
    <>
      <NextProgressBar
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      {children}
    </>
  )
}

export default HeadProvider
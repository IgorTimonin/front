// import Layout from "@/components/layout/Layout"
import Layout from "@/components/layout/Layout"
import { ReactNode, FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

type Props = { children: ReactNode }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const MainProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
      {children}
      </Layout>
    </QueryClientProvider>
  )
}

export default MainProvider
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useAuthRedirect = () => {
  const {user} = useAuth()

  const {query, push} = useRouter()

  const redirect = String(query.redirect) || '/'

  useEffect(() => {
    if (user) push(redirect)
  }, [
    user, push, redirect
  ])
}
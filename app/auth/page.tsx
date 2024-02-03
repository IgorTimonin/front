'use client'
import { IAuthInput } from "auth/Auth.interface"
import { useAuthRedirect } from "auth/useAuthRedirect"
import { useAuth } from "@/hooks/useAuth"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import styles from './Auth.module.scss'
import Heading from "@/components/ui/headings/Heading"
import Button from "@/components/ui/form-elements/Button"

const AuthPage: FC = () => {
  useAuthRedirect()

  const { isLoading } = useAuth()

  const { type, setType } = useState<'login' | 'register'>('login')

  const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthInput>({
    mode: 'onChange'
  })

  const login = (data: any) => { }
  const register = (data: any) => { }

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset()
  }

  return (
    <>
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Auth" className="mb-6" />

          <div className={styles.buttons}>
            <Button type="submit" onClick={() => setType('login')} disabled={isLoading}>Login</Button>
            <Button type="submit" onClick={() => setType('register')} disabled={isLoading}>Register</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AuthPage
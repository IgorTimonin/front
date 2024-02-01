"use client"
import MainProvider from 'providers/MainProvider'
import Home from './components/screens/home/Home'

export default function HomePage() {
  return (
    <MainProvider>
      <Home />
    </MainProvider>
  )
}

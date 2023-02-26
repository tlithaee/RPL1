import React from 'react'
import Navbar from '@/Components/Navbar'
import End from '@/Components/End'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <Navbar/>
      {children}  
    <End/>
    </>
  )
}

export default Layout
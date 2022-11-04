import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

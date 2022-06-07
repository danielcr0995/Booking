import React from 'react'
import Featured from '../../components/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
      <>
        <Navbar/>
        <Header/>
        <Featured/>
      </>
  )
}

export default Home
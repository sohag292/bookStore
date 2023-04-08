import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App

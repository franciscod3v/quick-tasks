import React from 'react'
import { Navbar } from './components/Navbar'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DailySites } from './pages/DailySites'
import { MyTime } from './pages/MyTime'

export const App = () => {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sites' element={<DailySites />} />
          <Route path='/time' element={<MyTime/>} />
        </Routes>
    </BrowserRouter>
    </GlobalProvider >


  )
}

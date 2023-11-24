import React from 'react'
import { Navbar } from './components/Navbar'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'

export const App = () => {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
    </BrowserRouter>
    </GlobalProvider >


  )
}

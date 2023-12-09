import React from 'react'
import { Navbar } from './components/Navbar'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'

export const App = () => {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
    </BrowserRouter>
    </GlobalProvider >


  )
}

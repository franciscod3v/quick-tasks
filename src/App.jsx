import React from 'react'
import { Navbar } from './components/Navbar'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter as Route, Routes} from 'react-router'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'

export const App = () => {

  return (
    <GlobalProvider>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/chat' component={<Chat/>} />
        </Routes>
    </GlobalProvider>


  )
}

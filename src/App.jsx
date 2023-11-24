import React from 'react'
import { Navbar } from './components/Navbar'
import { InputTarea } from './components/tasks-components/InputTarea'
import { ListaToDo } from './components/tasks-components/ListaToDo'
import { GlobalProvider } from './context/GlobalState'

export const App = () => {

  return (
    <GlobalProvider>
      <Navbar />
      <InputTarea />
      <ListaToDo />
    </GlobalProvider>


  )
}

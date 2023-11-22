import React from 'react'
import { ListaTareas } from './components/ListaTareas'
import { Navbar } from './components/Navbar'
import { InputTarea } from './components/InputTarea'

export const App = () => {
  return (
    <>
      <Navbar />
      <InputTarea/>
      <ListaTareas/>
    </>

  )
}

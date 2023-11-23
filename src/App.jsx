import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { InputTarea } from './components/InputTarea'
import { ListaToDo } from './components/ListaToDo'
import { GlobalProvider } from './context/GlobalState'

export const App = () => {

  const [listaTareas, setListaTareas] = useState([])

  useEffect(() => {
    const tareasLocales = localStorage.getItem('tasks')
    if (tareasLocales) {
      setListaTareas(JSON.parse(tareasLocales))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(listaTareas))
  }, [listaTareas])

  const createNewTask = (tarea) => {
    if (!listaTareas.find((t) => t.name === tarea))
      setListaTareas([...listaTareas, { name: tarea, done: false }])
  }

  return (
    <GlobalProvider>
      <Navbar />
      <InputTarea createNewTask={createNewTask} />
      <ListaToDo listaTareas={listaTareas} />
    </GlobalProvider>


  )
}

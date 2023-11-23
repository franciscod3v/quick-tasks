import React, { useEffect, useState } from 'react'
import { ListaTareas } from './components/ListaTareas'
import { Navbar } from './components/Navbar'
import { InputTarea } from './components/InputTarea'

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
    <>
      <Navbar />
      <InputTarea createNewTask={createNewTask} />
      <ListaTareas />
    </>

  )
}

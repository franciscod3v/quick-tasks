import React, { useState } from 'react'

export const InputTarea = () => {

    const [tarea, setTarea] = useState('')

    const [listaTareas, setListaTareas] = useState([])

    const agregarTarea = () => {

        if (tarea.trim() === '') {
            alert('Tarea vacía')
            return
        }

        setListaTareas(tareasGuardadas => [...tareasGuardadas, tarea])

    }

    const test = (e) => {alert('GAA')}
    return (
        <form
            onSubmit={test}
            className='d-flex justify-content-center gap-2 my-2'>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder='Nueva tarea'
                className=''
            />
            <button>Add</button>
        </form>
    )
}

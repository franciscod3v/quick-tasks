import React, { useState } from 'react'

export const InputTarea = ({ createNewTask }) => {

    const [tarea, setTarea] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()

        if (tarea.trim() === '') {
            alert('Tarea vacía')
            return
        }

        createNewTask(tarea)

        setTarea('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='d-flex justify-content-center gap-2 my-2'>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder='Nueva tarea'
            />
            <button>Add Task</button>
        </form>
    )
}

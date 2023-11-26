import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import '../styles-components/input-task.css'

export const InputTarea = () => {

    const { addTask } = useGlobalState()

    const [nameTask, setNameTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (nameTask.trim() === '') {
            alert('Tarea vacia')
            setNameTask('')
            return
        }
        addTask({
            id: window.crypto.randomUUID(),
            nameTask,
            status: false
        })
        setNameTask('')
    }

    return (
        <form
            onSubmit={onSubmit}
            className='d-flex justify-content-center gap-2 my-4'>
            <input
                type="text"
                value={nameTask}
                onChange={(e) => setNameTask(e.target.value)}
                placeholder='Add a new task ...'
            />
            <button className='btn-save'>Save Task</button>
        </form>
    )
}

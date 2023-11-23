import React, { useState } from 'react'
import { useGlobalState } from '../context/GlobalState'

export const InputTarea = () => {

    const { addTask } = useGlobalState()

    const [nameTask, setNameTask] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        addTask({
            id: window.crypto.randomUUID(),
            nameTask,
            status: false
        })
    }

    return (
        <form
            onSubmit={onSubmit}
            className='d-flex justify-content-center gap-2 my-2'>
            <input
                type="text"
                value={nameTask}
                onChange={(e) => setNameTask(e.target.value)}
                placeholder='Nueva tarea'
            />
            <button>Add Task</button>
        </form>
    )
}

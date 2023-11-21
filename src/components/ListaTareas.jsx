import React from 'react'
import { TareaCard } from './TareaCard'

export const ListaTareas = () => {
    return (
        <div className='d-flex flex-column flex-md-row'>
            <div className='list-group'>
                <h2>To Do</h2>
                <TareaCard />
                <TareaCard />
            </div>
            <div>
                <h2>Done</h2>
                <TareaCard />
                <TareaCard />
            </div>
        </div>
    )
}

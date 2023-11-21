import React from 'react'
import { TareaCard } from './TareaCard'
import './styles-components/lista-tareas.css'

export const ListaTareas = () => {

    return (
        <div className='container-fluid contenedor-lista p-3'>
            <div className='row'>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='title'>To Do <i class="bi bi-clipboard"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        <TareaCard />
                        <TareaCard />
                    </div>

                </div>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='title'>Done <i class="bi bi-clipboard-check"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        <TareaCard />
                        <TareaCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

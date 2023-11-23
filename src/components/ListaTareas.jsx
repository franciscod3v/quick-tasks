import React from 'react'
import { TareaCard } from './TareaCard'
import './styles-components/lista-tareas.css'

export const ListaTareas = ({ tareas, mostrarTareas, tareasCompletadas = false }) => {

    return (
        <div className='container-fluid contenedor-lista p-3'>
            <div className='row'>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='px-2 title'>To Do <i className="bi bi-clipboard"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        <TareaCard />
                        <TareaCard />
                    </div>

                </div>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='px-2 title'>Done <i className="bi bi-clipboard-check"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        <TareaCard />
                        <TareaCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

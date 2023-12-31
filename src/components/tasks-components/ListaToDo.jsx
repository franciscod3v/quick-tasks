import { useGlobalState } from "../../context/GlobalState"
import { TareaCard } from "./TareaCard"
import '../styles-components/lista-tareas.css'

export const ListaToDo = () => {

    const { tasks } = useGlobalState()

    return (
        <div className='container-fluid contenedor-lista p-3'>
            <div className='row'>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='px-2 title'>To Do <i className="bi bi-clipboard"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        {
                        tasks.map(task => (
                            task.status === false ? <TareaCard key={task.id} task={task}/> : null
                        ))}
                    </div>

                </div>
                <div className='col-12 col-md-6 my-2'>
                    <h2 className='px-2 title'>Done <i className="bi bi-clipboard-check"></i></h2>
                    <div className='d-flex flex-column gap-2'>
                        {
                            tasks.map(task => (
                                task.status === true ? <TareaCard key={task.id} task={task} buttonDone={false}/> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

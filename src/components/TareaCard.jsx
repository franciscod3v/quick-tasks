import { useGlobalState } from '../context/GlobalState'
import { ButtonCheck } from './ButtonCheck'
import './styles-components/tarea-card.css'

export const TareaCard = ({ task, buttonCheck }) => {

  const { deleteTask } = useGlobalState()

  return (
    <div className="tareaCard-container container p-3 rounded-4 my-2">
      <div className='row px-3 align-items-center'>
        <h3 className="col-8 nombre-tarea">{task.nameTask}</h3>
        <div className='col-4 d-flex gap-2 justify-content-center align-items-center'>
          {
            buttonCheck ? <ButtonCheck /> : null

          }
          <button 
            onClick={(e) => {deleteTask(task.id)}}
            className='border-0'>
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

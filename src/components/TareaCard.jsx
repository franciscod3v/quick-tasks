import { ButtonCheck } from './ButtonCheck'
import { ButtonDelete } from './ButtonDelete'
import './styles-components/tarea-card.css'

export const TareaCard = ({ tarea, buttonCheck, buttonDelete }) => {
  return (
    <div className="tareaCard-container container p-3 rounded-4 my-2">
      <div className='row px-3 align-items-center'>
        <h3 className="col-8 nombre-tarea">Soy una tarea</h3>
        <div className='col-4 d-flex gap-2 justify-content-center align-items-center'>
          {
            buttonCheck ? <ButtonCheck /> : null

          }
          {
            buttonDelete ? <ButtonDelete /> : null
          }
        </div>
      </div>
    </div>
  )
}

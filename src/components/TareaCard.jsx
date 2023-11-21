import './styles-components/tarea-card.css'

export const TareaCard = () => {
  return (
    <div className="tareaCard-container container p-3 rounded-4">
      <div className='row px-3'>
        <h3 className="col-8 nombre-tarea">Soy una tarea</h3>
        <div className='col-4 d-flex gap-2 justify-content-center align-items-center'>
          <button className='border-0'>
            <i class="bi bi-check-circle-fill"></i>
          </button>
          <button className='border-0'>
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='priority d-flex gap-1 col-8 justify-content-center'>
          <div className='priority-token low'>1</div>
          <div className='priority-token medium'>2</div>
          <div className='priority-token high'>3</div>
        </div>
        <span className='col-4 text-center category'>Categoria</span>
      </div>
    </div>
  )
}

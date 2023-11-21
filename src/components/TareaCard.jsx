import './styles-components/tarea-card.css'

export const TareaCard = () => {
  return (
    <div className="tareaCard-container list-group-item container">
        <div className='row'>
          <h3 className="col-8 nombre-tarea">Soy una tarea</h3>
          <div className='col-4 d-flex gap-1'>
            <button className='btn btn-success'>Ok</button>
            <button className='btn btn-danger'>X</button>
          </div>
        </div>
        <div className='row'>
            <div className='priority d-flex gap-1 col-8'>
                <div className='priority-token low'>1</div>
                <div className='priority-token medium'>2</div>
                <div className='priority-token high'>3</div>
            </div>
            <span className='col-4 category'>Categoria</span>
        </div>
    </div>
  )
}

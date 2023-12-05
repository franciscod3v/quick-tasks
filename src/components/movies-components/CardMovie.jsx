import '../styles-components/card-movie.css'

export const CardMovie = ({ titulo, urlImagen, index, id }) => {
    return (

        <div className={index !== 0 ? "card carousel-item" : "card carousel-item active"}>
            <img src={`https://image.tmdb.org/t/p/w500${urlImagen}`} className="card-img-top" alt="..."></img>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{titulo}</h5>
                <button className='btn-detalles'>Detalles</button>
            </div>
        </div>
    )
}

import React from 'react'

export const CardSeries = ({ name, urlImagen, index, fechaEstreno, overview, id }) => {
    return (
        <>
            <div className={index !== 0 ? "card carousel-item" : "card carousel-item active"}>
                <img src={`https://image.tmdb.org/t/p/w500${urlImagen}`} className="card-img-top" alt="..."></img>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{name}</h5>
                    <p className='card-date'>{`Date: ${fechaEstreno}`}</p>
                    <p className='card-sinopsis'>{`Sinopsis: ${overview}`}</p>
                </div>
            </div>
        </>
    )
}

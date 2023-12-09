import { useState } from 'react'
import '../styles-components/card-movie.css'

export const CardMovie = ({ titulo, urlImagen, index, fechaEstreno, overview, id }) => {

    return (
        <>
            <div className={index !== 0 ? "card carousel-item m-2" : "card carousel-item m-2 active"}>
                <img src={`https://image.tmdb.org/t/p/w500${urlImagen}`} className="card-img-top" alt="..."></img>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{titulo}</h5>
                    <p className='card-date'>{`Date: ${fechaEstreno}`}</p>
                    <p className='card-sinopsis'>{`Sinopsis: ${overview}`}</p>
                </div>
            </div>
        </>

    )
}

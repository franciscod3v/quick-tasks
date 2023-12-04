import React from 'react'

export const CardMovie = ({titulo, urlImagen, index}) => {
    return (

        <div className={index !== 0? "card carousel-item" : "card carousel-item active"}>
            <img src={`https://image.tmdb.org/t/p/w500${urlImagen}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <button>+</button>
                </div>
        </div>
    )
}

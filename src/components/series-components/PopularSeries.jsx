import { useFetch } from "../../hooks/useFetch"
import { CardMovie } from "../movies-components/CardMovie"
import { CardSeries } from "./CardSeries"

export const PopularSeries = () => {
    const URL = 'https://api.themoviedb.org/3'
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDUxYzQ4MGY2OTgwNTQwZjY5ZmJiYzBmYWU3OWMxZiIsInN1YiI6IjY0YzJlMDcwMzUyMGU4MDEzOTk0MTI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWEoPwpd0yC4IVDiPfVewjTY5BCYMRJ-CW8u9Nt0PTw'

    const optionsFetch = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }

    //Para populares
    const { data, loading, error } = useFetch(`${URL}/tv/top_rated?language=es-US&page=2`, optionsFetch)

    return (
        <>
            <div className='popular-movies-content'>
                <h2 className='text-center'>
                    Popular Series
                </h2>
                <div id="carouselPopularSeries" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        {data?.results.map((item, index) => (
                            <CardSeries key={item.id} name={item.name} urlImagen={item.backdrop_path} index={index} id={item.id} fechaEstreno={item.first_air_date} overview={item.overview} />
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselPopularSeries" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselPopularSeries" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>

    )
}

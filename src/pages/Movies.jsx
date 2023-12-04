import { CardMovie } from "../components/movies-components/CardMovie"
import { PopularMovies } from "../components/movies-components/PopularMovies"
import { useFetch } from "../hooks/useFetch"

const URL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDUxYzQ4MGY2OTgwNTQwZjY5ZmJiYzBmYWU3OWMxZiIsInN1YiI6IjY0YzJlMDcwMzUyMGU4MDEzOTk0MTI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWEoPwpd0yC4IVDiPfVewjTY5BCYMRJ-CW8u9Nt0PTw'

export const Movies = () => {

    const optionsFetch = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }

    //Para populares
    const {data, loading, error} = useFetch(`${URL}/movie/popular?language=es-US&page=1`, optionsFetch)

  return (
    <div>
        <h1>Listas</h1>
        <button>
            Cancel Request
        </button>
        <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            <PopularMovies/>
        </ul>
    </div>
  )
}

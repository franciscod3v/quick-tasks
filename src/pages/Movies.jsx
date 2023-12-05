import { PopularMovies } from "../components/movies-components/PopularMovies"
import { useFetch } from "../hooks/useFetch"

const URL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDUxYzQ4MGY2OTgwNTQwZjY5ZmJiYzBmYWU3OWMxZiIsInN1YiI6IjY0YzJlMDcwMzUyMGU4MDEzOTk0MTI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWEoPwpd0yC4IVDiPfVewjTY5BCYMRJ-CW8u9Nt0PTw'

export const Movies = () => {

    return (
        <div>
            <h1 className="text-center">Recommend Movies</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <PopularMovies />
                    </div>
                    <div className="col-md-5">
                        <PopularMovies />
                    </div>
                </div>


                
            </div>

        </div>
    )
}

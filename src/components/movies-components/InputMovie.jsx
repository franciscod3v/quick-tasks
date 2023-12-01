import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"

export const InputMovie = ({ url, option }) => {

    const [movie, setMovie] = useState('')
    const [foundedMovies, setFoundedMovies] = useState([])

    const searchMovie = () => {
        
    }

    return (
        <form>
            <input
                type="text"
                value={movie}
                placeholder="Enter a movie ..."
                onChange={(e) => setMovie(e.target.value)}
            />
            <button
                onClick={searchMovie}    
            >
                <i class="bi bi-search"></i>
            </button>
        </form>
    )
}

import { useFetch } from "../hooks/useFetch"

const URL = 'https://api.themoviedb.org/3/account/20216552/'

export const Movies = () => {

    const {data, loading, error, handleCancelRequest} = useFetch(`${URL}/lists`)

  return (
    <div>
        <h1>Listas</h1>
        <button onClick={handleCancelRequest}>
            Cancel Request
        </button>
        <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data?.map((item) => (
                <li></li>
            ))}
        </ul>
    </div>
  )
}

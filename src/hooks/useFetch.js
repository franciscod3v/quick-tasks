import { useEffect, useState } from "react"

export const useFetch = (url, option) => {

    const [data, setData] = useState(null)

    const [loading, setLoading] = useState(null)

    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, option)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }


}

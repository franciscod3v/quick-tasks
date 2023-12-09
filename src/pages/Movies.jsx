import { PopularMovies } from "../components/movies-components/PopularMovies"
import { UpcomingMovies } from "../components/movies-components/UpcomingMovies"
import { PopularSeries } from "../components/series-components/PopularSeries"
import { TopSeries } from "../components/series-components/TopSeries"
import '../components/styles-components/movies.css'

export const Movies = () => {

    return (
        <div>
            <h1 className="text-center m-3">Jaru here are some popular movies and series!</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <UpcomingMovies />
                    </div>
                    <div className="col-md-5">
                        <PopularMovies />
                    </div>
                    <div className="col-md-5">
                        <PopularSeries />
                    </div>
                    <div className="col-md-5">
                        <TopSeries />
                    </div>
                </div>
            </div>

        </div>
    )
}

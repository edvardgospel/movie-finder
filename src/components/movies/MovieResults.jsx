import { useContext } from "react"
import Spinner from "../layout/Spinner"
import MovieItem from "../movies/MovieItem"
import MovieContext from "../../context/movie/MovieContext"

const MovieResults = () => {
  const { movies, genres, loading } = useContext(MovieContext)
  if (!loading) {
    if (movies) {
      return (
        <div className="grid grid-cols-1 gap-8">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} genres={genres} />
          ))
          }
        </div >
      )
    }
  } else {
    return <Spinner />
  }


}

export default MovieResults
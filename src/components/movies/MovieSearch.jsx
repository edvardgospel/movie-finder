import { useState, useContext, useEffect } from "react"
import MovieContext from "../../context/movie/MovieContext"
import { searchMovies, getGenres } from '../../context/movie/MovieActions'

const MovieSearch = () => {
  const [text, setText] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  const { dispatch } = useContext(MovieContext)

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      dispatch({ type: 'GET_GENRES', payload: genres })
    }
    fetchGenres()
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
    if (e.target.value === '') {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text !== '') {
      dispatch({ type: 'SET_LOADING' })
      const movies = await searchMovies(text)
      dispatch({ type: 'GET_MOVIES', payload: movies })
      setText('')
      setIsDisabled(true)
    }
  }


  return (
    <div className="mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" className="w-1/2 pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value={text} onChange={handleChange} />
              <button type="submit" className={`ml-10 w-36 btn btn-lg ${isDisabled ? "btn-disabled" : "bg-movie-gray"}`}>Go</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MovieSearch
import { useState, useContext } from "react"
import MovieContext from "../../context/movie/MovieContext"
import { getRelatedMovies, getWikipediaContent } from '../../context/movie/MovieActions'


const MovieItem = ({ movie: { id, title, poster_path, vote_average, genre_ids }, genres }) => {

  const [summary, setSummary] = useState('')
  const [wikiLink, setWikiLink] = useState('')
  const { dispatch } = useContext(MovieContext)

  const fetchRelatedMovies = async () => {
    dispatch({ type: 'SET_LOADING' })
    const movies = await getRelatedMovies(id)
    dispatch({ type: 'GET_MOVIES', payload: movies })
  }

  const fetchWikipediaContent = async () => {
    const response = await getWikipediaContent(title)
    if (response.status === 200) {
      setSummary(response.data.extract)
      setWikiLink(response.data.content_urls.desktop.page)
    } else {
      setSummary('Wikipedia page not found.')
    }
  }

  return (
    <div className='card border'>
      <div className="flex-row items-center-space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded w-24 h-40">
              <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="Poster" />
            </div>
          </div>
        </div>
        <div >
          <h2 className="card-title">
            <button onClick={fetchWikipediaContent}>{title}</button>
          </h2>
          <div className='text-base'>
            {genre_ids.map(id => {
              const gender = genres.find(genre => genre.id === id)
              return gender.name
            }).join(', ')}
          </div>
          <div className='text-base'>
            {vote_average.toFixed(1)}
          </div>
          <div className='text-xs'>
            {summary}
          </div>
          <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-movie-gray bg-movie-green last:mr-0 mr-1 mt-2'>
            <button onClick={fetchRelatedMovies}>Related</button>
          </span>
          {wikiLink ? <span class='text-xs font-semibold inline-block py-1 px-2 rounded text-movie-gray bg-movie-green last:mr-0 mr-1 mt-2'>
            <a href={wikiLink} target='_blank' rel='noreferrer' className='font-normal'>Wikipedia</a>
          </span> : ''}
        </div>
      </div>
    </div>
  )
}


export default MovieItem
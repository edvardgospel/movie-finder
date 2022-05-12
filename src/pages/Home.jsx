import MovieResults from '../components/movies/MovieResults'
import MovieSearch from '../components/movies/MovieSearch'

const Home = () => {
  return (
    <div className='container mx-auto px-3 pb-12'>
      <MovieSearch />
      <MovieResults />
    </div>
  )
}

export default Home
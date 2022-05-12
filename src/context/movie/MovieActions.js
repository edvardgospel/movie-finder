import axios from 'axios'
const MOVIE_URL = process.env.REACT_APP_MOVIE_URL
const MOVIE_TOKEN = process.env.REACT_APP_MOVIE_TOKEN

const movie = axios.create({
  baseURL: MOVIE_URL
})

const wikipedia = axios.create({
  baseURL: 'https://en.wikipedia.org'
})

export const searchMovies = async (text) => {
  const params = new URLSearchParams({
    api_key: MOVIE_TOKEN,
    query: text
  })
  const response = await movie.get(`/3/search/movie?${params}`)
  return response.data.results
}

export const getGenres = async () => {
  const params = new URLSearchParams({
    api_key: MOVIE_TOKEN,
  })
  const response = await movie.get(`/3/genre/movie/list?${params}`)
  return response.data.genres
}

export const getRelatedMovies = async (movieId) => {
  const params = new URLSearchParams({
    api_key: MOVIE_TOKEN,
  })
  const response = await movie.get(`/3/movie/${movieId}/similar?${params}`)
  return response.data.results
}

export const getWikipediaContent = async (movie) => {
  let response = null
  try {
    response = await wikipedia.get(`/api/rest_v1/page/summary/${movie}`)
  } catch (err) {
    response = err.response
  }
  return response
}

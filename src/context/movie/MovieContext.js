import { createContext, useReducer } from 'react'
import movieReducer from './MovieReducer'

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const initialState = {
    movies: [],
    genres: [],
    loading: false
  }

  const [state, dispatch] = useReducer(movieReducer, initialState)

  return <MovieContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </MovieContext.Provider>
}

export default MovieContext
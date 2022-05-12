const movieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
        loading: false
      }
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default movieReducer
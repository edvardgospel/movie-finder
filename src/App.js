import Home from './pages/Home'
import Header from './components/layout/Header'
import { MovieProvider } from './context/movie/MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="flex flex-col">
        <Header />
        <Home />
      </div>
    </MovieProvider>
  );
}

export default App;

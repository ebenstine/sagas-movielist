import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details" exact>
          <MovieDetails />
        </Route>

        <Route path="/add-movie" exact>
          <AddMovieForm />
        </Route>

      </Router>
    </div>
  );
}


export default App;

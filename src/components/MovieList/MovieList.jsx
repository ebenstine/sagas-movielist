import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const genres = useSelector((store) => store.genres);

    
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movie) => {
        console.log('you clicked on:', movie);
        dispatch ({
            type: 'GET_DETAILS',
            payload: movie,
        });

        history.push('/details')
    }

    const handleNext = () => {
        console.log('clicked add movie');
        history.push('/add-movie')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleNext}>Add Movie</button>
            <section className="movies">
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} >
                            <h5>{movie.title}</h5>
                            <img onClick={() => handleClick(movie)} 
                            src={movie.poster} 
                            alt={movie.title}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'
import { Grid, Typography } from '@material-ui/core';
//import MovieCard from '../MovieCard/MovieCard'



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
        <>
            
            <Grid container justifyContent="center" spacing={4}>
            <button onClick={handleNext}>Add a New Title!</button>
            <section className="movies">
            {movies.map((movie) => {
                    return (
                        <Grid item md={3} key={movie.id} >
                            <div>
                            <Typography variant="overline">{movie.title}</Typography>
                            </div>
                            <div>
                            <img onClick={() => handleClick(movie)} 
                            src={movie.poster} 
                            alt={movie.title}
                            />
                        </div>
                        </Grid>
                    );
                })}
            </section>
            </Grid>
        </>

    );
}

export default MovieList;
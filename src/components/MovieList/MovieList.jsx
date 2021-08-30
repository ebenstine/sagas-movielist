import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'
import { Grid, Typography, Button } from '@material-ui/core';
function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const genres = useSelector((store) => store.genres);

    //get db info on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    //push forward to details page on click
    const handleClick = (movie) => {
        console.log('you clicked on:', movie);
        dispatch ({
            type: 'GET_DETAILS',
            payload: movie,
        });

        history.push('/details')
    }
//push forward to the form
    const handleNext = () => {
        console.log('clicked add movie');
        history.push('/add-movie')
    }
//basic material ui setup in return, plan to revisit this
    return (
        <>
            
            <Grid container justifyContent="center" spacing={4}>
            <Button onClick={handleNext}>Add a New Title!</Button>
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
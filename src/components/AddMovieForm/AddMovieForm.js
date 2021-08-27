import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [newMovie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        movie_id: null,
        genre_id: null,
    });


    const handleSave = (event) => {
        event.preventDefault()
        console.log('CLICKED!');
        dispatch({
            type: "POST_MOVIE",
            payload: newMovie
        })

        history.push('/');
    }

    const handleCancel = () => {
        console.log('cancel clicked');
        history.push('/');
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Movie Title"
            />
            <input
                type="text"
                placeholder="Movie Poster"

            />
            <textarea></textarea>

            <select name="cars" id="cars">
                <option value="adventure">Adventure</option>
                <option value="animated">Animated</option>
                <option value="biographical">Biographical</option>
                <option value="comedy">Comedy</option>
                <option value="diaster">Diaster</option>
                <option value="drama">Drama</option>
                <option value="epic">Epic</option>
                <option value="fantasy">Fantasy</option>
                <option value="musical">Musical</option>
                <option value="romantic">Romantic</option>
                <option value="scienceFiction">Science Fiction</option>
                <option value="spaceOpera">Space-Opera</option>
                <option value="superhero">Superhero</option>
            </select>
            <br />
            <br />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default AddMovie;

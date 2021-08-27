import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        movie_id: null,
        genre_id: null,
    });


    const handleSave = (event) => {
        event.preventDefault()
        console.log('new movie added', newMovie);
        dispatch({
            type: "POST_MOVIE",
            payload: newMovie
        })

        history.push('/');
    }

    const handleInputs = (key, value) => {
        setNewMovie ({...newMovie, [key]: value})
        
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
                onChange={(event) => handleInputs("title", event.target.value)}
            />
            <input
                type="text"
                placeholder="Movie Poster URL"
                onChange={(event) => handleInputs("poster", event.target.value)}
            />
            <input
                type="text"
                placeholder="Movie Description"
                rows="6"
                cols="50"
                onChange={(event) => handleInputs("description", event.target.value)}

            />
            <textarea></textarea>

            <select name="Genre"
            onChange={(event) => handleInputs("genre_id", event.target.value)}
            >
                <option value="0"></option>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Diaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <br />
            <br />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default AddMovie;

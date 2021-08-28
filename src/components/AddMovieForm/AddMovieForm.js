import { useHistory } from 'react-router-dom';
//might not need useEffect here
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
//ran with test info and it is posting
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
            <h1>Add a Movie to Your Collection!</h1>
        <form>
            <div>
            <input 
                type="text"
                placeholder="Title"
                onChange={(event) => handleInputs("title", event.target.value)}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Poster URL"
                onChange={(event) => handleInputs("poster", event.target.value)}
            />
            </div>
            <div>
            <textarea
                type="text"
                placeholder="Add a Summary"
                rows="6"
                cols="50"
                onChange={(event) => handleInputs("description", event.target.value)}

            />
            </div>
            <div>
            <select 
                name="Genre"
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
            </div>
            <br />
            <br />
            <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    </div>
    );
}

export default AddMovie;

import { useHistory } from 'react-router-dom';

//might not need useEffect here
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Box, Grid, TextareaAutosize } from '@material-ui/core';

//ran with test info and it is posting
//make sure to go into database and fix
function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    //default values for form
    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        movie_id: null,
        genre_id: null,
    });

    //dispatch the post and go home
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
    //if entry is cancelled, go home
    const handleCancel = () => {
        console.log('cancel clicked');
        history.push('/');
    }


    //form details
    return (
    <Box display="flex">   
        <Typography>Add a Movie to Your Collection!</Typography>
        <form>
            <Grid container spacing={3} alignItems="center">
            <Grid item>
            <TextField
                label="Movie Title"
                type="text"
                onChange={(event) => handleInputs("title", event.target.value)}
            />
           </Grid>
            
            <Grid item>
            <TextField
                label="Add a Poster Image"
                type="text"
                onChange={(event) => handleInputs("poster", event.target.value)}
            />
            </Grid>
            <Grid item>
            <TextareaAutosize
                placeholder="Add Your Summary"
                type="text"
                rows="2"
                
                onChange={(event) => handleInputs("description", event.target.value)}

            />
            </Grid>
            <Grid item>
            <select 

                label="Select Genre"
                onChange={(event) => handleInputs("genre_id", event.target.value)}
            >
                <option value="0">Select Genre</option>
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
            
            </Grid>
            
            <br />
            <br />
            <Grid item>
            
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
            </Grid>
        </Grid>
    </form>
    
</Box>
    );
}

export default AddMovie;

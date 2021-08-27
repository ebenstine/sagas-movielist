import { useHistory } from 'react-router-dom';

function AddMovie() {
    const history = useHistory();

    const handleSave = () => {
        console.log('CLICKED!');
        history.push('/');
    }

    const handleCancel = () => {
        console.log('CLICKED!');
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
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </div>
    )
}

export default AddMovie;

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function MovieDetails(){
    const history = useHistory();
    //const dispatch = useDispatch();
    const details = useSelector((store) => store.details);

    const handleBack = () => {
        console.log('back to movies')
        history.goBack();
    }

    return (
        <div>
            <button onClick={handleBack}>Back to List</button>

            <section className="details">
            {details?.map((detail) => {
                return (
                    <div key={detail.id}>
                    <h4>{detail.title}</h4>
                    <img src={detail.poster} alt={detail.title} />
                    <p>{detail.description}</p>
                    <h4>Genres</h4>
                    <p>{detail.genre}</p>

                    </div>
                )
            })}

            </section>
        </div>
    )
}
export default MovieDetails;

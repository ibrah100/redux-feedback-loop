import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Support () {
    const [support, setSupport] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupport = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })

        history.push('/comments');
    }
    
    return (
        <div>
            <h1>How are well are you being supported?</h1>
            <form onSubmit={handleSupport}>
                <input 
                type="number" 
                max='5' min='0' 
                placeholder='Enter Number'
                value={support}
                onChange={(event) => setSupport(event.target.value)}
                required
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Support;
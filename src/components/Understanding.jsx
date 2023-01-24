import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const [understanding, setUnderstanding] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstanding = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })

        history.push('/support');
    }
    
    return (
        <div>
            <h1>How are well are you understanding the content?</h1>
            <form onSubmit={handleUnderstanding}>
                <input 
                type="number" 
                max='5' min='0' 
                placeholder='Enter Number'
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                required
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;
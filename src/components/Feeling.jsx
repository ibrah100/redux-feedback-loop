import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Feeling (){
    
    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeeling = (event) => {
        event.preventDefault();

        dispatch({
        type: 'ADD_FEELING',
        payload: feeling
        })

        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleFeeling}>
              <input 
              type="number" 
              max='5' min='0' 
              placeholder='Enter Number'
              value={feeling}
              onChange={(event) => setFeeling(event.target.value)}
              required
              />
              <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Feeling;
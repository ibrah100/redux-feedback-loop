import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Comments () {
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleComment = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        })

        history.push('/review');
    }
    
    return (
        <div>
            <h1>Any comments you would like to leave?</h1>
            <form onSubmit={handleComment}>
                <input 
                type="text" 
                placeholder='Enter Comment'
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Comments;
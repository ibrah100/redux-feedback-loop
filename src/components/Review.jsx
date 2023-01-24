import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux"
import axios from 'axios';

function Review () {
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comment = useSelector((store) => store.comment);
    const history = useHistory();

    const postFeedback = () => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comment
            }
        }).then((res) => {
             console.log(res);
            history.push('/thanks');
        }).catch((err) => {
            console.log('Error in POST request', err);
            alert('Failed to submit feedback.')
        })
    }


    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: "{comment}"</p>
            <button onClick={postFeedback}>SUBMIT</button>
        </div>
    )
}

export default Review
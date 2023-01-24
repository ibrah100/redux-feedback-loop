import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Admin () {
    
    const feedbackObject = useSelector(store => store.feedbackObject);

    const dispatch = useDispatch();

    //GET route
    const getFeedback = () => {
        axios.get('/feedback')
        .then((res) => {
            console.log('GET success', res.data.rows);
            dispatch({
                type: 'SET_FEEDBACK_OBJECT',
                payload: res.data.rows
            });
        })
        .catch((err) => {
            console.log('Error in GET request', err);
        })
    }

    useEffect(()=>{
        getFeedback();
    }, []);
    
    return (
        <table>
             <thead>
            <tr>
                <td>Feeling</td>
                <td>Understanding</td>
                <td>Support</td>
                <td>Comments</td>
            </tr>
        </thead>
        <tbody>
            {feedbackObject.map((feedback) => {
                return (
                    <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                    </tr>
                ) 
            })}
        </tbody>
        </table>
    )
}

export default Admin;
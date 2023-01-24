import { useHistory } from 'react-router-dom';

function Thanks () {

    const history = useHistory();

    const handleThanks = (event) => {
        event.preventDefault();

        history.push('/');
    }
    
    return (
        <div>
            <h1>Thank you for your feedback!</h1>
            <button onClick={handleThanks}>Leave New Feedback!</button>
        </div>
    )
}

export default Thanks;
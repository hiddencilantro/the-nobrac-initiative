import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound({setActiveStep}) {
    useEffect(() => {
        document.body.style.backgroundColor = "#f1f1ed";
        setActiveStep ? setActiveStep(null) : null;
    }, [])

    return (
        <div className='NotFound'>
            <h1>404</h1>
            <p><span>Oops!</span> You've traveled too far. The page you're looking for does not exist.</p>
            <div className='link-wrapper'>
                <Link to={setActiveStep ? "/quiz/vehicle" : "/"}>Take me back to Earth</Link>
            </div>
        </div>
    );
}

export default NotFound;
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>The NOBRAC Initiative</h1>
            <p>Take a quick survey to calculate your carbon footprint!</p>
            <Link to="/survey/transport/car">Start</Link>
        </div>
    );
}

export default Landing;
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>The NOBRAC Initiative</h1>
            <Link to="/survey/transport/car">Take survey!</Link>
        </div>
    );
}

export default Landing;
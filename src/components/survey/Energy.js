import { Link } from 'react-router-dom';

function Energy() {
    return (
        <div>
            ENERGY SURVEY
            <br />
            <Link to="/survey/travel">{"<<"} Back</Link>
        </div>
    );
}

export default Energy;
import { Link } from 'react-router-dom';

function Travel() {
    return (
        <div>
            TRAVEL SURVEY
            <br />
            <Link to="/survey/energy">Next {">>"}</Link>
        </div>
    );
}

export default Travel;
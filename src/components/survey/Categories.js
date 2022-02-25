import { Link } from 'react-router-dom';

function Categories() {
    return (
        <div>
            <Link to="/survey/transport">Transport</Link>
            <Link to="/survey/energy">Energy</Link>
        </div>
    );
}

export default Categories;
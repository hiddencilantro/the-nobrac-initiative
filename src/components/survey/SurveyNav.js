import { Link } from 'react-router-dom';

function SurveyNav() {
    return (
        <div>
            <Link to="vehicle">1</Link>
            <Link to="public-transit">2</Link>
            <Link to="flight">3</Link>
            <Link to="electricity">4</Link>
            <Link to="natural-gas">5</Link>
            <Link to="water">6</Link>
            <Link to="food">7</Link>
            <Link to="beverage">8</Link>
            <Link to="dining">9</Link>
            <Link to="tobacco">10</Link>
            <Link to="goods">11</Link>
            <Link to="services">12</Link>
            <Link to="recreation">13</Link>
        </div>
    );
}

export default SurveyNav;
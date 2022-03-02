import { Routes, Route } from 'react-router-dom';
import Car from './subcategories/Car';
import PublicTransit from './subcategories/PublicTransit';
import Flight from './subcategories/Flight'

function Transport({car, setCar, publicTransit, setPublicTransit, shortFlight, setShortFlight, mediumFlight, setMediumFlight, longFlight, setLongFlight}) {
    return (
        <Routes>
            <Route 
                path="car" 
                element={<Car 
                    car={car} setCar={setCar} />} />
            <Route 
                path="public-transit" 
                element={<PublicTransit 
                    publicTransit={publicTransit} 
                    setPublicTransit={setPublicTransit} />} />
            <Route 
                path="flight"
                element={<Flight 
                    shortFlight={shortFlight} setShortFlight={setShortFlight} 
                    mediumFlight={mediumFlight} setMediumFlight={setMediumFlight} 
                    longFlight={longFlight} setLongFlight={setLongFlight} />} />
        </Routes>
    );
}

export default Transport;
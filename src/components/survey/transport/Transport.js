import { Routes, Route } from 'react-router-dom';
import Vehicle from './subcategories/Vehicle';
import PublicTransit from './subcategories/PublicTransit';
import Flight from './subcategories/Flight'

function Transport({vehicle, setVehicle, publicTransit, setPublicTransit, flight, setFlight}) {
    return (
        <Routes>
            <Route 
                path="vehicle" 
                element={<Vehicle 
                    vehicle={vehicle} setVehicle={setVehicle} />} />
            <Route 
                path="public-transit" 
                element={<PublicTransit 
                    publicTransit={publicTransit} setPublicTransit={setPublicTransit} />} />
            <Route 
                path="flight"
                element={<Flight 
                    flight={flight} setFlight={setFlight} />} />
        </Routes>
    );
}

export default Transport;
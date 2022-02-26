import { Routes, Route } from 'react-router-dom';
import Car from './subcategories/Car';
import PublicTransit from './subcategories/PublicTransit';

function Transport({car, setCar, bus, setBus}) {
    return (
        <Routes>
            <Route path="car" element={<Car car={car} setCar={setCar} />} />
            <Route path="public-transit" element={<PublicTransit bus={bus} setBus={setBus} />} />
        </Routes>
    );
}

export default Transport;
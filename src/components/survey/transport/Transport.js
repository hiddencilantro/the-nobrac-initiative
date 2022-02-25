import { Routes, Route } from 'react-router-dom';
import Car from './subcategories/Car';

function Transport({car, setCar}) {
    return (
        <Routes>
            <Route path="car" element={<Car car={car} setCar={setCar} />} />
        </Routes>
    );
}

export default Transport;
import { Routes, Route } from 'react-router-dom';
import Car from './subcategories/Car';
import PublicTransit from './subcategories/PublicTransit';

function Transport({car, setCar, bus, setBus, rapid, setRapid, commuter, setCommuter, intercity, setIntercity}) {
    return (
        <Routes>
            <Route 
                path="car" 
                element={<Car 
                car={car} setCar={setCar} />} />
            <Route 
                path="public-transit" 
                element={<PublicTransit 
                    bus={bus} setBus={setBus} 
                    rapid={rapid} setRapid={setRapid} 
                    commuter={commuter} setCommuter={setCommuter} 
                    intercity={intercity} setIntercity={setIntercity} />} />
        </Routes>
    );
}

export default Transport;
import { Routes, Route } from 'react-router-dom';
import Goods from './subcategories/Goods';
import Services from './subcategories/Services';
// import Recreation from './subcategories/Recreation';

function Shopping({goods, setGoods, services, setServices, recreation, setRecreation}) {
    return (
        <Routes>
            <Route 
                path="goods" 
                element={<Goods 
                    goods={goods} setGoods={setGoods} />} />
            <Route 
                path="services" 
                element={<Services 
                    services={services} setServices={setServices} />} />
            {/* <Route 
                path="recreation" 
                element={<Recreation 
                    recreation={recreation} setRecreation={setRecreation} />} /> */}
        </Routes>
    );
}

export default Shopping;
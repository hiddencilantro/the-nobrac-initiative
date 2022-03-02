import { Routes, Route } from 'react-router-dom';
import Food from './subcategories/Food';
// import Beverage from './subcategories/Beverage';
// import Dining from './subcategories/Dining';
// import Tobacco from './subcategories/Tobacco';

function Consumption({foods, setFoods}) {
    return (
        <Routes>
            <Route 
                path="food" 
                element={<Food 
                    foods={foods} setFoods={setFoods} />} />
            {/* <Route 
                path="beverage" 
                element={<Beverage 
                     />} />
            <Route 
                path="dining"
                element={<Dining 
                        />} />
            <Route 
                path="tobacco" 
                element={<Tobacco 
                     />} /> */}
        </Routes>
    );
}

export default Consumption;
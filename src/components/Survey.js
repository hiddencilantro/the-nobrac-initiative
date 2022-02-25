import Categories from './survey/Categories'
import { Routes, Route } from 'react-router-dom';
import Travel from './survey/Travel';
import Energy from './survey/Energy';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

function Survey(props) {
  // const [bus, setBus] = useState({
  //   "emission_factor": "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
  //   "parameters": {
  //     "passengers": 1,
  //     "distance": 0,
  //     "distance_unit": "mi"
  //   }
  // });

  // const dispatch = useDispatch();
  
  // const userData = [bus, ];

  // const sendDispatch = () => {
  //   dispatch(calculateFootprint(userData));
  // };

  return (
    <div>
      {/* <Categories /> */}
      <br />
      <Routes>
          <Route path="travel" element={<Travel />} />
          <Route path="energy" element={<Energy />} />
      </Routes>
    </div>
  );
}

export default Survey;

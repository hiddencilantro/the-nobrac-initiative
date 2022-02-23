import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Travel from './Travel';
import Energy from './Energy';

function Survey(props) {
  // const [travel, setTravel] = useState({});
  // const [energy, setEnergy] = useState({});
  
  // const userData = {
  //   travel,
  //   energy
  // };

  // const fireDispatch = () => {
  //   props.sendData(userData)
  // }

  return (
    <Routes>
        <Route path="travel" element={<Travel />} />
        <Route path="energy" element={<Energy />} />
    </Routes>
  );
}

// mapDispatchToProps = dispatch => {
//   return {
//     sendData: data => dispatch(calculateFootprint(data))
//   }
// }

export default Survey;

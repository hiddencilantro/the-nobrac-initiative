import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Travel from './Travel';
import Energy from './Energy';

function Survey() {
  const [travel, setTravel] = useState({});
  const [energy, setEnergy] = useState({});

  return (
    <Routes>
        <Route path="travel" element={<Travel setTravel={setTravel} />} />
        <Route path="energy" element={<Energy setEnergy={setEnergy} />} />
    </Routes>
  );
}

export default Survey;

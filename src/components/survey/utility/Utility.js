import { Routes, Route } from 'react-router-dom';
import ElectricityForm from './forms/ElectricityForm';
import NaturalGasForm from './forms/NaturalGasForm';
import WaterForm from './forms/WaterForm';

function Utility({electricity, setElectricity, naturalGas, setNaturalGas, water, setWater}) {
    return (
        <Routes>
            <Route 
                path="electricity" 
                element={<ElectricityForm 
                    electricity={electricity} setElectricity={setElectricity} />} />
            <Route 
                path="natural-gas" 
                element={<NaturalGasForm 
                    naturalGas={naturalGas} setNaturalGas={setNaturalGas} />} />
            <Route 
                path="water" 
                element={<WaterForm 
                    water={water} setWater={setWater} />} />
        </Routes>
    );
}

export default Utility;
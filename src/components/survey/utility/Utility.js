import { Routes, Route } from 'react-router-dom';
import ElectricityForm from './forms/ElectricityForm';
import NaturalGasForm from './forms/NaturalGasForm';

function Utility({electricity, setElectricity, naturalGas, setNaturalGas}) {
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
        </Routes>
    );
}

export default Utility;
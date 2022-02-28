import { Routes, Route } from 'react-router-dom';
import ElectricityForm from './forms/ElectricityForm';

function Utility({electricity, setElectricity}) {
    return (
        <Routes>
            <Route 
                path="electricity" 
                element={<ElectricityForm 
                    electricity={electricity} setElectricity={setElectricity} />} />
        </Routes>
    );
}

export default Utility;
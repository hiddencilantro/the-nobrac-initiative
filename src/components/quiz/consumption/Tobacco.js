import { useEffect } from "react";
import TobaccoInput from './inputs/TobaccoInput';

function Tobacco({setActiveStep, toggle, setToggle, tobacco, setTobacco}) {
    useEffect(() => {
        setActiveStep(9);
        setToggle(null);
    }, []);

    return (
        <div className="Tobacco">
            <h3>Do you smoke?</h3>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="car" value={true} />
                <input type="radio" name="car" value={false} />
            </div>
            <TobaccoInput display={toggle} tobacco={tobacco} setTobacco={setTobacco} />
        </div>
    );
}

export default Tobacco;
import { useEffect } from "react";
import TobaccoInput from './inputs/TobaccoInput';

function Tobacco({setActiveStep, toggle, setToggle, tobacco, setTobacco}) {
    useEffect(() => {
        setActiveStep(9);
        setToggle(null);
    }, []);

    return (
        <>
            <p>Do you smoke?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="car" value={true} /> Yes
                <input type="radio" name="car" value={false} /> No
            </div>
            <br />
            <TobaccoInput display={toggle} tobacco={tobacco} setTobacco={setTobacco} />
        </>
    );
}

export default Tobacco;
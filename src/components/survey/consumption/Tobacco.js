import { useState } from "react";
import TobaccoForm from './forms/TobaccoForm';

function Tobacco({tobacco, setTobacco}) {
    const [toggle, setToggle] = useState(null);

    return (
        <>
            <p>Do you smoke?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="car" value={true} /> Yes
                <input type="radio" name="car" value={false} /> No
            </div>
            <br />
            <TobaccoForm display={toggle} tobacco={tobacco} setTobacco={setTobacco} />
        </>
    );
}

export default Tobacco;
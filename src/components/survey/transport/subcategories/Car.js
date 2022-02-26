import CarForm from '../forms/CarForm';
import { useState } from "react";

function Car({car, setCar}) {
    const [toggle, setToggle] = useState(null);

    return (
        <>
            <p>Do you own a car?</p>
            <div onChange={e => setToggle(e.target.value)} >
                <input type="radio" name="car" value={true} /> Yes
                <input type="radio" name="car" value={false} /> No
            </div>
            <br />
            <CarForm display={toggle} car={car} setCar={setCar} />
        </>
    );
}

export default Car;
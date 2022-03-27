import { useEffect } from 'react';
import ItemInput from '../consumption/inputs/ItemInput';

function Recreation({setActiveStep, setToggle, checked, setChecked, recreation, setRecreation}) {
    useEffect(() => {
        setActiveStep(12);
        setToggle(true);
        setChecked({
            moviesAndFilm: false,
            performances: false,
            museumsAndZoos: false,
            amusementParksAndArcades: false,
            casinos: false,
            variousRecreation: false
        });
    }, []);

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
        if(e.target.parentElement.style.backgroundColor === "rgb(216, 226, 224)") {
            e.target.parentElement.style.backgroundColor = "rgb(241, 245, 245)";
        } else {
            e.target.parentElement.style.backgroundColor = "rgb(216, 226, 224)";
        };
    };

    const inputFields = Object.entries(recreation).map(([recreation, object]) => <ItemInput key={recreation} checked={checked[recreation]} item={recreation} money={object.parameters.money} setState={setRecreation} />)

    return (
        <>
            <h3>How much do you spend on any of the following recreational activities?</h3>
            {checked.hasOwnProperty('moviesAndFilm') ? 
                (<div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="moviesAndFilm" id="movies-and-film" checked={checked.moviesAndFilm} onChange={handleCheckbox} />
                        <label htmlFor="movies-and-film">
                            <span>Movies/Film</span>
                        </label>
                        {inputFields[0]}
                    </div>
                    <div>
                        <input type="checkbox" name="performances" id="performances" checked={checked.performances} onChange={handleCheckbox} />
                        <label htmlFor="performances">
                            <span>Performances</span>
                        </label>
                        {inputFields[1]}
                    </div>
                    <div>
                        <input type="checkbox" name="museumsAndZoos" id="museums" checked={checked.museumsAndZoos} onChange={handleCheckbox} />
                        <label htmlFor="museums">
                            <span>Museums/Historical Sites/Zoos/Parks</span>
                        </label>
                        {inputFields[2]}
                    </div>
                    <div>
                        <input type="checkbox" name="amusementParksAndArcades" id="arcades" checked={checked.amusementParksAndArcades} onChange={handleCheckbox} />
                        <label htmlFor="arcades">
                            <span>Amusement Parks/Arcades</span>
                        </label>
                        {inputFields[3]}
                    </div>
                    <div>
                        <input type="checkbox" name="casinos" id="casinos" checked={checked.casinos} onChange={handleCheckbox} />
                        <label htmlFor="casinos">
                            <span>Casinos</span>
                        </label>
                        {inputFields[4]}
                    </div>
                    <div>
                        <input type="checkbox" name="variousRecreation" id="various-recreation" checked={checked.variousRecreation} onChange={handleCheckbox} />
                        <label htmlFor="various-recreation">
                            <span>Golf/Marinas/Ski Resorts/Fitness/Other</span>
                        </label>
                        {inputFields[5]}
                    </div>
                </div>)
                : null}
        </>
    );
}

export default Recreation;
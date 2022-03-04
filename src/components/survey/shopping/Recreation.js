import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemInput from '../consumption/forms/ItemInput';

function Recreation({recreation, setRecreation}) {
    const [checked, setChecked] = useState({
        moviesAndFilm: false,
        performances: false,
        museumsAndZoos: false,
        amusementParksAndArcades: false,
        casinos: false,
        variousRecreation: false
    });
    const navigate = useNavigate();

    const handleCheckbox = e => {
        setChecked(pS => ({...pS, [e.target.name]: e.target.checked}));
    };

    const handleNext = () => {
        sanitizeInput();
        navigate('/survey/results');
    };

    const sanitizeInput = () => {
        Object.entries(recreation).forEach(([recreationType, obj]) => {
            if(!checked[recreationType] || isNaN(obj.parameters.money)) {
                setRecreation(pS => ({
                    ...pS, 
                    [recreationType]: {
                        ...pS[recreationType], 
                        parameters: {
                            ...pS[recreationType].parameters, 
                            money: 0
                        }
                    }
                }));
            };
        });
    };

    const inputFields = Object.entries(recreation).map(([recreation, object]) => <ItemInput key={recreation} checked={checked[recreation]} item={recreation} money={object.parameters.money} setState={setRecreation} />)

    return (
        <>
            <p>How much do you spend on any of the following recreational activities?</p>
            <table style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '40%'}}>
                            <div>
                                <input type="checkbox" name="moviesAndFilm" checked={checked.moviesAndFilm} onChange={handleCheckbox} /> <label htmlFor='moviesAndFilm'>Movies/Film</label><br />
                                <input type="checkbox" name="performances" checked={checked.performances} onChange={handleCheckbox} /> <label htmlFor='performances'>Performances</label><br />
                                <input type="checkbox" name="museumsAndZoos" checked={checked.museumsAndZoos} onChange={handleCheckbox} /> <label htmlFor='museumsAndZoos'>Museums/Historical Sites/Zoos/Parks</label><br />
                                <input type="checkbox" name="amusementParksAndArcades" checked={checked.amusementParksAndArcades} onChange={handleCheckbox} /> <label htmlFor='amusementParksAndArcades'>Amusement Parks/Arcades</label><br />
                                <input type="checkbox" name="casinos" checked={checked.casinos} onChange={handleCheckbox} /> <label htmlFor='casinos'>Casinos</label><br />
                                <input type="checkbox" name="variousRecreation" checked={checked.variousRecreation} onChange={handleCheckbox} /> <label htmlFor='variousRecreation'>Golf/Marinas/Ski Resorts/Fitness/Other</label><br />
                            </div>
                        </td>
                        <td style={{width: '60%', verticalAlign: 'top'}}>
                            {inputFields}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={'2'}>
                            <button type="button" onClick={handleNext}>Next</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Recreation;
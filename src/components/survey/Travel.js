// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Travel() {
    // const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefault();
        // setTravel(data)
        navigate("/survey/energy")
    };

    return (
        <div>
            TRAVEL SURVEY
            <br />
            <button onClick={handleSubmit}>Next {">>"}</button>
        </div>
    );
}

export default Travel;
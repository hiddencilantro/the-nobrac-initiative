import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Landing() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f8f2ea";
    }, []);

    return (
        <div className='Landing'>
            <h1>The NOBRAC Initiative</h1>
            <p>
                <strong>NOBRAC</strong> -- carbon spelled in reverse -- is a non-profit campaign geared towards reducing carbon waste in order to help curve the environmental phenomenon known as global warming, particularly by raising awareness and serving people with the necessary tools and resources to start making meaningful and impactful changes to their everyday lives.
            </p>
            <div className='quiz-link'>
                <p>Want to find out what your carbon footprint is?</p>
                <p>Take a quick quiz to calculate your own carbon footprint!</p>
                <Link to="/quiz/vehicle">Let's find out</Link>
            </div>
            <div className='img-trees'/>
            <h2 className='header'>Why care?</h2>
            <p>
                Global warming is a serious matter and a global crisis that is too critical and vital to our existence and sustainability that it can no longer be ignored. Not only does it influence all domains of life and threatens the security of our food and water, but it also leads to increased flooding, extreme heat, more diseases, and economic loss.
            </p>
            <div className='link-wrapper'>
                <Link to="/problem">Learn more</Link>
            </div>
            <div className='img-pollution' />
            <p>
                In order to take action, it's important to know where we stand. One way to do this is by calculating our carbon footprint. A carbon footprint is the total amount of greenhouse gases (carbon dioxide and other air pollutants) that are generated by our actions. One common way to measure our carbon emissions is by collecting a series of data that translates to a figure denoted as CO₂e, or carbon dioxide equivalent.
            </p>
            <p>
                The average carbon footprint for a person in the United States is between 16 and 20 tonnes (depending on the source), which is the highest in the world after China, although recent data suggests a slight improvement to these numbers at about 14 tonnes. However, compared to the global average of about 4.5 tonnes, this improvement is still a drop in the bucket.  It is said that in order to avoid a 2°C rise in global temperatures, we must aim to reach under 2 tonnes by 2050. Want to find out what your carbon footprint is?
            </p>
            <p>Want to find out what your carbon footprint is?</p>
            <p>Take a quick quiz to calculate your own carbon footprint!</p>
            <div className='link-wrapper'>
                <Link to="/quiz/vehicle">Get started</Link>
            </div>
            <div className='img-globalwarming' />
            <div className='sources'>
                Sources:<br />
                1. https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/
            </div>
        </div>
    );
}

export default Landing;
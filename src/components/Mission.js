import { useState } from 'react';
import { Collapse } from '@mui/material';
import GHGPerCapita from './charts/GHGPerCapita';
import GHGBySector from './charts/GHGBySector';
import GlobalAvgTemp from './charts/GlobalAvgTemp';
import CO2Charts from './charts/CO2Charts';
import NetZeroTargets from './charts/NetZeroTargets';

function Mission() {
    const [more, setMore] = useState(false);
    return (
        <div>
            <h3>It starts with awareness</h3>
            <p>
                Climate change is real. In fact, the term is often used interchangeably with global warming even though they have distinct meanings.
            </p>
            <p>
                Global warming is specific to the long-term heating of Earth's climate system induced by human activities -- most notably the burning of fossil fuels. Such activities release carbon dioxide and various gases (commonly referred to as greenhouse gases) into our planet's atomosphere which in turn traps heat from escaping and thereby <em>contributes</em> to climate change. To such end, global warming is often measured as the average increase in Earth's surface temperature.
            </p>
            <GHGPerCapita />
            <GHGBySector />
            <p>
                Climate change, on the other hand, (as described by NASA) is "a long-term change in the average weather patterns that have come to define Earth's local, regional and global cimates." That is to say, climate change is to an extent a <em>natural</em> phenomenon but the dilemma lies in the fact that "the changes observed in Earth's climate since the early 20th century are primarily driven by human activities" where the average global surface temperature is currently rising at an alarming rate.
            </p>
            <GlobalAvgTemp />
            <br />
            <button type="button" onClick={() => setMore(pS => !pS)} style={more ? {display: "none"} : null} >See more charts</button>
            <Collapse in={more} timeout={1250} >
                <CO2Charts />
            </Collapse>
            <button type="button" onClick={() => setMore(pS => !pS)} style={more ? null : {display: "none"}} >See less charts</button>
            <h3>So what does this have to do with us as individuals and how can we help?</h3>
            <p>
                On the macro level, using cleaner and alternative renewable energies are great and definitely something mankind must continue to innovate and work together to achieve, but in the meantime, there are still plenty of ways we can micromanage our total energy use -- and thereby our carbon emissions -- simply by pledging certain changes to our lifestyle.
            </p>
            <p>
                It can range from something as easy as choosing to walk or ride a bike next time you meet your friends to taking direct flights on your next vacation, or even taking shorter showers!
            </p>
            <NetZeroTargets />
            <div>
                Sources:
                <ol>
                    <li>
                        Hannah Ritchie and Max Roser (2020) - "CO₂ and Greenhouse Gas Emissions". Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions' [Online Resource]
                    </li>
                    <li>
                        https://climate.nasa.gov/resources/global-warming-vs-climate-change/
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Mission;
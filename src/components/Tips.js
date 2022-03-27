import { Collapse } from '@mui/material';
import { useState } from 'react';

function Tips() {
    const [expand, setExpand] = useState({
        energy: false,
        veggie: false,
        recycle: false,
        plastic: false,
        cycle: false,
        care: false
    });

    const handleClick = e => {
        setExpand(pS => ({...expand, [e.currentTarget.id]: !pS[e.currentTarget.id]}));
    };

    return (
        <div className="Tips">
            <h3 className="header">How can I reduce my carbon footprint?</h3>
            <ul>
                <li id="energy" onClick={handleClick} >
                    <span className="icon-energy"></span>
                    <span>Use as much clean energy as possible.</span>
                    <span className={expand.energy ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.energy} timeout={500} >
                    <p>
                        We know there aren't many choices in the market for hydro, solar, or wind energy so it's easy to delegate this responsibility to the energy suppliers but it helps if you decide to take initiative. Remember that consumers collectively can play a huge part in how the market moves.
                    </p>
                </Collapse>

                <li id="veggie" onClick={handleClick} >
                    <span className="icon-veggie"></span>
                    <span>Limit meat consumption, especially beef.</span>
                    <span className={expand.veggie ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.veggie} timeout={500} >
                    <p>
                        You might've heard this one before but can eating less meat really help slow global warming? Absolutely. There are many factors to consider but the most predominant is the level of methane released when treating cattle manure.<br />
                        In order to meet demand, many cows are bred via artificial insemination which leads to overpopulation. This, along with how they are transported to our dinner tables, significantly damages our ozone layer.<br />
                        To put things into perspective, 30% of average weekly household GHG emissions are from meat products and "opting for a vegetarian meal one day a week could save the carbon equivalent of driving 1,160 miles per year." Red meat is also "about 150% more GHG-intensive than fish or chicken." So next time you're craving that steak, try a plant-based patty or consume local and seasonal produce instead.
                    </p>
                </Collapse>

                <li id="recycle" onClick={handleClick} >
                    <span className="icon-recycle"></span>
                    <span>Buy quality clothes made from recycled materials.</span>
                    <span className={expand.recycle ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.recycle} timeout={500} >
                    <p>
                        Try to buy well-made clothing that you can take good care of and wear for longer periods of time. The clothing you dispose end up in landfills, decompose, and produce -- you've guessed it -- methane. Not to mention the carbon emission derived from a logistical standpoint. A lot of fashion retailers "have factories in countries like China, India and Bangladesh, which requires significant burning of fossil fuels to ship to the United States."
                    </p>
                </Collapse>

                <li id="plastic" onClick={handleClick} >
                    <span className="icon-plastic"></span>
                    <span>Avoid products with excessive plastic packaging.</span>
                    <span className={expand.plastic ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.plastic} timeout={500} >
                    <p>
                        This one might seem obvious but single-use plastic can have a tremendous impact on the environment. Not to mention you can already see many notable companies making changes to their policies and merchandising in order to accomodate more eco-friendly options like using biodegradable or compostable materials instead. When possible, bring reusuable shopping bags to the grocery store or your own cups to the coffee shop and always carry your own water bottle!
                    </p>
                </Collapse>

                <li id="cycle" onClick={handleClick} >
                    <span className="icon-cycle"></span>
                    <span>Consider cycling or walking.</span>
                    <span className={expand.cycle ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.cycle} timeout={500} >
                    <p>
                        If the distance isn't too far, considering walking or riding a bicycle. This will not only help reduce your carbon emission but it will also save you money and and your health. When your destination is beyond walking or cycling distance, at least consider taking public transport instead of driving. Or you might consider investing in an electric vehicle!
                    </p>
                </Collapse>

                <li id="care" onClick={handleClick} >
                    <span className="icon-care"></span>
                    <span>Be conscious of your day-to-day chores and activities.</span>
                    <span className={expand.care ? 'icon-minus' : 'icon-plus'} />
                </li>
                <Collapse in={expand.care} timeout={500} >
                    <p>
                        The following are some of the easiest ways for you to immediately start reducing your carbon footprint and it costs you nothing but a small adjustment to your daily habits.<br />
                        When it gets chilly, throw on a hoodie or a light jacket instead of turning on the heat. Take shorter showers. Turn off the water while you brush your teeth or do the dishes. Unplug your electronics when you're not using them. And don't leave your phone on charge when the battery is already full. All of these, and many more, are very simple tasks that we can do every day with minimal effort.
                    </p>
                </Collapse>
            </ul>
            <div className="sources">
                Sources:<br />
                1. https://www.inspirecleanenergy.com/blog/clean-energy-101/average-american-carbon-footprint<br />
                2. https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en
            </div>
        </div>
    );
}

export default Tips;
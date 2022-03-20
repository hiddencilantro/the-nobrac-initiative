import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { createFootprint } from '../../redux/actions/actionCreators';

function Results({setActiveStep, calculateFootprint, results, setSignup}) {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveStep(13);
        calculateFootprint();
        if(location.state !== 'completed') {
            navigate('/survey/vehicle');
        };
    }, []);

    const co2eTotal = parseFloat((results.reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const compareToAvgUS = Math.round((co2eTotal - 14)/14*100)
    const compareToAvgWorld = Math.round((co2eTotal - 4.5)/4.5*100)

    const co2eVehicle = parseFloat((results.slice(0, 1).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2ePublicTransit = parseFloat((results.slice(1, 5).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eFlight = parseFloat((results.slice(5, 8).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eTransport = co2eVehicle + co2ePublicTransit + co2eFlight;

    const co2eElectricity = parseFloat((results.slice(8, 9).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eNaturalGas = parseFloat((results.slice(9, 10).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eWater = parseFloat((results.slice(10, 11).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eEnergy = co2eElectricity + co2eNaturalGas + co2eWater;

    const co2eFood = parseFloat((results.slice(11, 25).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eBeverages = parseFloat((results.slice(25, 30).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eDining = parseFloat((results.slice(30, 33).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eTobacco = parseFloat((results.slice(33, 34).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eConsumption = co2eFood + co2eBeverages + co2eDining + co2eTobacco;

    const co2eGoods = parseFloat((results.slice(34, 43).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eServices = parseFloat((results.slice(43, 47).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eRecreation = parseFloat((results.slice(47).reduce((pV, cV) => pV + cV.co2e, 0) / 1000).toFixed(1));
    const co2eShopping = co2eGoods + co2eServices + co2eRecreation;

    const data = {
        labels: [
            'Transport', 
            'Energy', 
            'Consumption', 
            'Shopping',
            'Vehicle', 
            'Public Transit', 
            'Flight', 
            'Electricity',
            'Natural Gas',
            'Water',
            'Food',
            'Beverages',
            'Dining',
            'Tobacco',
            'Goods',
            'Services',
            'Recreation'
        ],
        datasets: [
            {
                label: 'GHG emission by sector',
                data: [
                    co2eTransport, 
                    co2eEnergy, 
                    co2eConsumption, 
                    co2eShopping
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                hoverBackgroundColor: [
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)'
                ],
                cutout: '42%'
            },
            {
                label: 'GHG emission by sub-sector',
                data: [
                    null, null, null, null,
                    co2eVehicle, 
                    co2ePublicTransit, 
                    co2eFlight, 
                    co2eElectricity, 
                    co2eNaturalGas, 
                    co2eWater, 
                    co2eFood, 
                    co2eBeverages, 
                    co2eDining, 
                    co2eTobacco, 
                    co2eGoods, 
                    co2eServices, 
                    co2eRecreation
                ],
                backgroundColor: [
                    '', '', '', '',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(75, 192, 192, 0.3)'
                ],
                borderColor: [
                    '', '', '', '',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                hoverBackgroundColor: [
                    '', '', '', '',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 206, 86)',
                    'rgba(255, 206, 86)',
                    'rgba(255, 206, 86)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(75, 192, 192)',
                    'rgba(75, 192, 192)'
                ],
                cutout: '35%'
            }
        ]
    };

    const options = {
        elements: {
            arc: {
                borderWidth: 1,
                borderRadius: 5,
                hoverOffset: 10
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Breakdown Of Your GHG Emissions',
                color: '#3A3B3C',
                font: {
                    size: 24
                },
                padding: 5
            },
            subtitle: {
                display: true,
                text: '(tonnes of CO₂ equivalent)',
                color: '#7F7F7F',
                font: {
                    size: 12,
                    style: 'italic'
                },
                padding: {
                    top: 0,
                    bottom: 20
                }
            },
            legend: {
                position: 'right',
                labels: {
                    filter: (legendItem, chartData) => {
                        if(legendItem.index === 0 || legendItem.index === 1 || legendItem.index === 2 || legendItem.index === 3) {
                            return true;
                        };
                    }
                }
            }
        }
    };

    const handleSave = () => {
        if(user) {
            dispatch(createFootprint({
                footprint: {
                    total: co2eTotal,
                    vehicle: co2eVehicle,
                    publictransit: co2ePublicTransit,
                    flight: co2eFlight,
                    electricity: co2eFlight,
                    naturalgas: co2eNaturalGas,
                    water: co2eWater,
                    food: co2eFood,
                    beverages: co2eBeverages,
                    dining: co2eDining,
                    tobacco: co2eTobacco,
                    goods: co2eGoods,
                    services: co2eServices,
                    recreation: co2eRecreation
                }
            }));
            navigate('/footprints');
        } else {
            setSignup(pS => !pS);
        };
    };

    return (
        <div>
            <p>Your total CO₂e (carbon dioxide equivalent): {co2eTotal} metric tons.</p>
            <p>Your carbon footprint is  
                {Math.sign(compareToAvgUS) === 1 ? 
                    " " + compareToAvgUS + "% more " 
                    : " " + Math.abs(compareToAvgUS) + "% less "} 
                than the U.S. average and 
                {Math.sign(compareToAvgWorld) === 1 ? 
                    " " + compareToAvgWorld + "% more " 
                    : " " + Math.abs(compareToAvgWorld) + "% less "} 
                than the global average.
            </p>
            <div style={{width: "600px"}}>
                <Doughnut data={data} options={options} />
            </div>
            <button type="button" onClick={handleSave} >Save My Result</button>
            <h3>How can I reduce my carbon footprint?</h3>
            <ul>
                <li>
                    <strong>Use as much clean energy as possible.</strong>
                    We all know there aren't too many options in the market right now for hydro, solar, or wind energy so it's easy to delegate this responsibility to the energy suppliers but it truly helps if you decide to take initiative. Remember that consumers collectively can play a huge role in how the market moves.
                </li>
                <li>
                    <strong>Limit meat consumption, especially beef.</strong>
                    You might've heard this one before but can eating less meat really help slow global warming? Absolutely. There is a variety of factors at play here but the most predominant is the level of methane released while treating cattle manure. In order to meet demand, many cows are bred via artificial insemination which leads to overpopulation and this (in addition to the way they are transported to our dinner tables) significantly hurts our ozone layer. To put things into perspective, 30% of average weekly household GHG emissions are from meat products while "opting for a vegetarian meal one day a week could save the carbon equivalent of driving 1,160 miles per year." Red meat is also "about 150% more GHG-intensive than fish or chicken." So next time you're craving a steak, try to kick the can down the road and consume local and seasonal produce instead.
                </li>
                <li>
                    <strong>Buy quality clothes made from recycled materials.</strong>
                    Try to buy well-made clothing that you can take good care of and wear for longer periods of time. The clothing you dispose end up in landfills, decompose, and produce -- you've guessed it -- methane. Not to mention the carbon emission derived from a logistical standpoint. A lot of fashion retailers "have factories in countries like China, India and Bangladesh, which requires significant burning of fossil fuels to ship to the U.S."
                </li>
                <li>
                    <strong>Avoid single-use plastic and products with excessive plastic packaging.</strong>
                    This one might seem kind of obvious but minimizing the use of plastic can have a tremendous impact on the environment. Not to mention you can already see many notable companies make changes to their policies and merchandising in order to accomodate more eco-friendly options like using biodegradable or compostable materials. When possible, bring reusuable shopping bags to the grocery store or your own cups to the coffee shop and always carry your own water bottle!
                    Reusuable shopping bags are a great 
                </li>
                <li>
                    <strong>Consider cycling or walking.</strong>
                    If the distance isn't too bad, considering walking or riding a bicycle. This will not only help reduce your carbon emission but it will also save you money and and your health. When it's too far or too time consuming, at least consider riding public transport instead of driving or investing in an electric vehicle!
                </li>
                <li>
                    <strong>Be conscious of the way you conduct your day-to-day chores and activities.</strong>
                    The following are probably the easiest ways for you to immediately start reducing your carbon footprint and it costs you nothing but a small adjustment to your habits. When it gets chilly, throw on a hoodie or a light jacket instead of turning on the heat. Take shorter showers. Turn off the water while you brush your teeth or do the dishes. Unplug your electronics when you're not using them. And don't leave your phone on charge when the battery is already full. All of these, and many more, are very simple and doable tasks that we can do every day with just a little bit of effort.
                </li>
            </ul>
            <div>
                Sources:
                <ol>
                    <li>
                        https://www.inspirecleanenergy.com/blog/clean-energy-101/average-american-carbon-footprint
                    </li>
                    <li>
                        https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Results;
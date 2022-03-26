import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { createFootprint } from '../../redux/actions/actionCreators';
import Tips from './Tips';

function Results({setActiveStep, calculateFootprint, results, setLogin, setCreateSuccess}) {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveStep(13);
        calculateFootprint();
        if(location.state !== 'completed') {
            navigate('/quiz/vehicle');
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
                    'rgba(47, 72, 77, 0.9)',
                    'rgba(114, 151, 141, 0.9)',
                    'rgba(190, 132, 50, 0.9)',
                    'rgba(141, 76, 46, 0.9)'
                ],
                borderColor: [
                    'rgba(47, 72, 77, 1)',
                    'rgba(114, 151, 141, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(141, 76, 46, 1)'
                ],
                hoverBackgroundColor: [
                    'rgba(47, 72, 77, 1)',
                    'rgba(114, 151, 141, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(141, 76, 46, 1)'
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
                    'rgba(47, 72, 77, 0.7)',
                    'rgba(47, 72, 77, 0.7)',
                    'rgba(47, 72, 77, 0.7)',
                    'rgba(114, 151, 141, 0.7)',
                    'rgba(114, 151, 141, 0.7)',
                    'rgba(114, 151, 141, 0.7)',
                    'rgba(190, 132, 50, 0.7)',
                    'rgba(190, 132, 50, 0.7)',
                    'rgba(190, 132, 50, 0.7)',
                    'rgba(190, 132, 50, 0.7)',
                    'rgba(141, 76, 46, 0.7)',
                    'rgba(141, 76, 46, 0.7)',
                    'rgba(141, 76, 46, 0.7)'
                ],
                borderColor: [
                    '', '', '', '',
                    'rgba(47, 72, 77, 1)',
                    'rgba(47, 72, 77, 1)',
                    'rgba(47, 72, 77, 1)',
                    'rgba(114, 151, 141, 1)',
                    'rgba(114, 151, 141, 1)',
                    'rgba(114, 151, 141, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(190, 132, 50, 1)',
                    'rgba(141, 76, 46, 1)',
                    'rgba(141, 76, 46, 1)',
                    'rgba(141, 76, 46, 1)'
                ],
                hoverBackgroundColor: [
                    '', '', '', '',
                    'rgba(47, 72, 77)',
                    'rgba(47, 72, 77)',
                    'rgba(47, 72, 77)',
                    'rgba(114, 151, 141)',
                    'rgba(114, 151, 141)',
                    'rgba(114, 151, 141)',
                    'rgba(190, 132, 50)',
                    'rgba(190, 132, 50)',
                    'rgba(190, 132, 50)',
                    'rgba(190, 132, 50)',
                    'rgba(141, 76, 46)',
                    'rgba(141, 76, 46)',
                    'rgba(141, 76, 46)'
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
                text: 'Breakdown of your GHG Emissions',
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
                    electricity: co2eElectricity,
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
            }, setCreateSuccess));
            navigate('/footprints');
        } else {
            setLogin(pS => !pS);
        };
    };

    return (
        <div className='Results'>
            <div className='data'>
                <h2 className='header'>Your total CO₂e:</h2>
                <span>{co2eTotal}</span><br />
                <span>metric tons</span><br />
                <span>(CO₂e = carbon dioxide equivalent)</span><br />
                <p>
                    Your carbon footprint is  
                    <strong>{Math.sign(compareToAvgUS) === 1 ? 
                        " " + compareToAvgUS + "% more " 
                        : " " + Math.abs(compareToAvgUS) + "% less "}</strong> 
                    than the U.S. average and 
                    <strong>{Math.sign(compareToAvgWorld) === 1 ? 
                        " " + compareToAvgWorld + "% more " 
                        : " " + Math.abs(compareToAvgWorld) + "% less "}</strong> 
                    than the global average.
                </p>
            </div>
            <div className='charts-container'>
                <div className='chart'>
                    <Doughnut data={data} options={options} />
                </div>
                <br />
                <button type="button" onClick={handleSave} >Save my result</button>
            </div>
            <Tips />
        </div>
    );
}

export default Results;
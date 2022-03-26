import { Doughnut } from 'react-chartjs-2';

function EmissionData({footprint}) {
    const co2eTotal = footprint.total;
    const compareToAvgUS = Math.round((co2eTotal - 14)/14*100);
    const compareToAvgWorld = Math.round((co2eTotal - 4.5)/4.5*100);
    const co2eVehicle = footprint.vehicle;
    const co2ePublicTransit = footprint.publictransit;
    const co2eFlight = footprint.flight;
    const co2eTransport = co2eVehicle + co2ePublicTransit + co2eFlight;
    const co2eElectricity = footprint.electricity;
    const co2eNaturalGas = footprint.naturalgas;
    const co2eWater = footprint.water;
    const co2eEnergy = co2eElectricity + co2eNaturalGas + co2eWater;
    const co2eFood = footprint.food;
    const co2eBeverages = footprint.beverages;
    const co2eDining = footprint.dining;
    const co2eTobacco = footprint.tobacco;
    const co2eConsumption = co2eFood + co2eBeverages + co2eDining + co2eTobacco;
    const co2eGoods = footprint.goods;
    const co2eServices = footprint.services;
    const co2eRecreation = footprint.recreation;
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

    return (
        <div className='EmissionData'>
            <div className='data'>
                <h2>Total CO₂e: <span>{co2eTotal} metric tons</span></h2>
                <p>
                    This figure is  
                    <span>{Math.sign(compareToAvgUS) === 1 ? 
                        " " + compareToAvgUS + "% more " 
                        : " " + Math.abs(compareToAvgUS) + "% less "}</span> 
                    than the U.S. average and 
                    <span>{Math.sign(compareToAvgWorld) === 1 ? 
                        " " + compareToAvgWorld + "% more " 
                        : " " + Math.abs(compareToAvgWorld) + "% less "}</span> 
                    than the global average.
                </p>
            </div>
            <div className='chart'>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
}

export default EmissionData;
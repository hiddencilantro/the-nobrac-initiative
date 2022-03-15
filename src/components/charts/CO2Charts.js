import CO2PerCountry from './co2charts/CO2PerCountry';
import CO2PerCapita from './co2charts/CO2PerCapita';
import CO2ByShare from './co2charts/CO2ByShare';
import CO2ByRegion from './co2charts/CO2ByRegion';

function CO2Charts({display}) {
    if(display) {
        return (
            <>
                <CO2PerCountry />
                <CO2PerCapita />
                <CO2ByShare />
                <CO2ByRegion />
            </>
        );
    } else {
        return null;
    }
}

export default CO2Charts;
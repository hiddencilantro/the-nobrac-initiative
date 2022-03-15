function CO2PerCountry() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=chart&country=~USA" 
            loading="lazy" 
            style={{width: "600px", height: "500px", border: "none"}} />
    );
}

export default CO2PerCountry;
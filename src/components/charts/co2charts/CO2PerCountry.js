function CO2PerCountry() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=chart&country=~USA" 
            loading="lazy" 
            style={{width: "460px", height: "400px", border: "none", margin: "10px 10px"}} />
    );
}

export default CO2PerCountry;
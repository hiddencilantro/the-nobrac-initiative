function GHGBySector() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/ghg-emissions-by-sector?time=latest&country=~USA" 
            loading="lazy" 
            style={{width: "600px", height: "500px", border: "none"}} />
    );
}

export default GHGBySector;
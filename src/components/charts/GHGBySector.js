function GHGBySector() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/ghg-emissions-by-sector?time=latest&country=~USA" 
            loading="lazy" 
            style={{width: "460px", height: "400px", border: "none", margin: "60px 10px"}} />
    );
}

export default GHGBySector;
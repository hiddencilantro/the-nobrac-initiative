function GlobalAvgTemp() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/temperature-anomaly?country=~Global" 
            loading="lazy" 
            style={{width: "620px", height: "400px", border: "none", margin: "60px 0 20px"}} />
    );
}

export default GlobalAvgTemp;
function GlobalAvgTemp() {
    return (
        <iframe 
            src="https://ourworldindata.org/grapher/temperature-anomaly?country=~Global" 
            loading="lazy" 
            style={{width: "800px", height: "600px", border: "none"}} />
    );
}

export default GlobalAvgTemp;
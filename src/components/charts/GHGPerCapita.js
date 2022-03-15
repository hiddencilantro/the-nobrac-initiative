function GHGPerCapita() {
    return (
        <iframe 
            src="https://ourworldindata.org/explorers/co2?facet=none&country=USA~OWID_WRL&Gas=All+GHGs+%28CO%E2%82%82eq%29&Accounting=Production-based&Fuel=Total&Count=Per+capita&hideControls=true" 
            loading="lazy" 
            style={{width: "600px", height: "500px", border: "none"}} />
    );
}

export default GHGPerCapita;
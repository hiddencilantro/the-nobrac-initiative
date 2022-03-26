function GHGPerCapita() {
    return (
        <iframe 
            src="https://ourworldindata.org/explorers/co2?facet=none&country=USA~OWID_WRL&Gas=All+GHGs+%28CO%E2%82%82eq%29&Accounting=Production-based&Fuel=Total&Count=Per+capita&hideControls=true" 
            loading="lazy" 
            style={{width: "460px", height: "400px", border: "none", margin: "60px 10px"}} />
    );
}

export default GHGPerCapita;
function CarForm({display, car, setCar}) {
    return display === "true" ? (
        <form>
            <label htmlFor="car">How many miles do you drive per year?</label>
            <br />
            <input type="text" id="car" value={car} onChange={e => isNaN(e.target.value) ? e.target.value="" : setCar(pS => ({...pS, parameters: {...pS.parameters, distance: e.target.value}}))} /> miles
            <br />
            <input type="submit" value="Next"/>
        </form>
    ) : null
}

export default CarForm;
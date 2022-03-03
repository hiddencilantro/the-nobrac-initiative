import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Categories from './survey/Categories'
import Transport from './survey/transport/Transport';
import Utility from './survey/utility/Utility';
import Consumption from './survey/consumption/Consumption';

function Survey() {
    const [vehicle, setVehicle] = useState({
        "emission_factor": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
        "parameters": {
            "passengers": 1,
            "distance": 0,
            "distance_unit": "mi"
        }
    });
    const [publicTransit, setPublicTransit] = useState({
        bus: {
            "emission_factor": "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        },
        rapid: {
            "emission_factor": "passenger_train-route_type_transit_rail-fuel_source_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        },
        commuter: {
            "emission_factor": "passenger_train-route_type_commuter_rail-fuel_source_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        },
        intercity: {
            "emission_factor": "passenger_train-route_type_intercity-fuel_source_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        }
    });
    const [flight, setFlight] = useState({
        short: {
            "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_lt_300mi-class_na-rf_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        },
        medium: {
            "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_gt_300mi_lt_2300mi-class_na-rf_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        },
        long: {
            "emission_factor": "passenger_flight-route_type_na-aircraft_type_na-distance_gt_2300mi-class_na-rf_na",
            "parameters": {
                "passengers": 1,
                "distance": 0,
                "distance_unit": "mi"
            }
        }
    });
    const [electricity, setElectricity] = useState({
        "emission_factor": "electricity-energy_source_electricity",
        "parameters": {
            "money": 0,
            "money_unit": "usd"
        }
    });
    const [naturalGas, setNaturalGas] = useState({
        "emission_factor": "fuel_type_natural_gas-fuel_use_na",
        "parameters": {
            "money": 0,
            "money_unit": "usd"
        }
    });
    const [water, setWater] = useState({
        "emission_factor": "water-supply_wastewater_treatment",
        "parameters": {
            "money": 0,
            "money_unit": "usd"
        }
    });
    const [foods, setFoods] = useState({
        meat: {
            "emission_factor": "consumer_goods-type_packaged_meat_except_poultry",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        poultry: {
            "emission_factor": "consumer_goods-type_packaged_poultry",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        seafood: {
            "emission_factor": "consumer_goods-type_seafood",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        bread: {
            "emission_factor": "consumer_goods-type_bread_other_baked_goods",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        cereal: {
            "emission_factor": "consumer_goods-type_breakfast_cereals",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        cheese: {
            "emission_factor": "consumer_goods-type_cheese",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        pasta: {
            "emission_factor": "consumer_goods-type_cookies_crackers_pastas_tortillas",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        milkAndButter: {
            "emission_factor": "consumer_goods-type_fluid_milk_butter",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        oils: {
            "emission_factor": "consumer_goods-type_refined_vegetable_olive_seed_oils",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        seasonings: {
            "emission_factor": "consumer_goods-type_seasonings_dressings",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        frozenFood: {
            "emission_factor": "consumer_goods-type_frozen_food",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        iceCream: {
            "emission_factor": "consumer_goods-type_ice_cream_frozen_desserts",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        snacks: {
            "emission_factor": "consumer_goods-type_snack_foods",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        other: {
            "emission_factor": "consumer_goods-type_all_other_foods",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });
    const [beverages, setBeverages] = useState({
        coffeeAndTea: {
            "emission_factor": "consumer_goods-type_coffee_tea",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        softDrinksAndBottledWater: {
            "emission_factor": "consumer_goods-type_soft_drinks_bottled_water_ice",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        beer: {
            "emission_factor": "consumer_goods-type_breweries_beer",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        spirits: {
            "emission_factor": "consumer_goods-type_distilleries_spirits",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        wine: {
            "emission_factor": "consumer_goods-type_wineries_wine",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });
    const [dining, setDining] = useState({
        limited: {
            "emission_factor": "consumer_services-type_limited_service_restaurants",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        full: {
            "emission_factor": "consumer_services-type_full_service_restaurants",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        other: {
            "emission_factor": "consumer_services-type_all_other_food_drinking_places",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });
    const [tobacco, setTobacco] = useState({
        "emission_factor": "consumer_goods-type_tobacco_products",
        "parameters": {
            "money": 0,
            "money_unit": "usd"
        }
    });

    // const dispatch = useDispatch();

    // const userInput = [vehicle, bus, rapid, commuter, intercity, shortFlight, mediumFlight, longFlight];

    // const sendDispatch = () => {
    //   dispatch(calculateFootprint(userInput));
    // };

    return (
        <div>
            {/* <Categories /> */}
            <Routes>
                <Route 
                    path="transport/*" 
                    element={<Transport 
                        vehicle={vehicle.parameters.distance} setVehicle={setVehicle} 
                        publicTransit={publicTransit} setPublicTransit={setPublicTransit} 
                        flight={flight} setFlight={setFlight} />} />
                <Route 
                    path="utility/*" 
                    element={<Utility 
                        electricity={electricity.parameters.money} setElectricity={setElectricity} 
                        naturalGas={naturalGas.parameters.money} setNaturalGas={setNaturalGas} 
                        water={water.parameters.money} setWater={setWater} />} />
                <Route 
                    path="consumption/*" 
                    element={<Consumption 
                        foods={foods} setFoods={setFoods} 
                        beverages={beverages} setBeverages={setBeverages} 
                        dining={dining} setDining={setDining} 
                        tobacco={tobacco.parameters.money} setTobacco={setTobacco} />} />
            </Routes>
        </div>
    );
}

export default Survey;

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Vehicle from './survey/transport/Vehicle';
import PublicTransit from './survey/transport/PublicTransit';
import Flight from './survey/transport/Flight';
import Electricity from './survey/utility/Electricity';
import NaturalGas from './survey/utility/NaturalGas';
import Water from './survey/utility/Water';
import Food from './survey/consumption/Food';
import Beverage from './survey/consumption/Beverage';
import Dining from './survey/consumption/Dining';
import Tobacco from './survey/consumption/Tobacco';
import Goods from './survey/shopping/Goods';
import Services from './survey/shopping/Services';
import Recreation from './survey/shopping/Recreation';
import Results from './survey/Results';
import NotFound from './NotFound';

function Survey() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [toggle, setToggle] = useState(null);
    const [checked, setChecked] = useState({});
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
    const [goods, setGoods] = useState({
        clothing: {
            "emission_factor": "consumer_goods-type_clothing",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        booksAndOtherPrint: {
            "emission_factor": "consumer_goods-type_books_newspapers_magazines_other_print_media",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        toysAndGames: {
            "emission_factor": "consumer_goods-type_dolls_toys_games",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        sportingGoods: {
            "emission_factor": "consumer_goods-type_sporting_athletic_goods",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        dogAndCatFood: {
            "emission_factor": "consumer_goods-type_dog_cat_food",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        health: {
            "emission_factor": "health_care-type_health_personal_care_stores",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        generalMerchandise: {
            "emission_factor": "general_retail-type_general_merchandise_stores",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        nonstoreRetailers: {
            "emission_factor": "general_retail-type_nonstore_retailers",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        otherRetail: {
            "emission_factor": "general_retail-type_all_other_retail",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });
    const [services, setServices] = useState({
        dryCleaning: {
            "emission_factor": "consumer_goods-type_dry_cleaning_laundry",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        subscriptions: {
            "emission_factor": "consumer_goods-type_cable_subscription_programming",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        vehicleRepair: {
            "emission_factor": "consumer_goods-type_vehicle_repair",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        otherServices: {
            "emission_factor": "domestic_services-type_pet_care_photofinishing_parking_other_sundry_services",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });
    const [recreation, setRecreation] = useState({
        moviesAndFilm: {
            "emission_factor": "consumer_goods-type_movies_film",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        performances: {
            "emission_factor": "consumer_goods-type_performances",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        museumsAndZoos: {
            "emission_factor": "consumer_goods-type_museums_historical_sites_zoos_parks",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        amusementParksAndArcades: {
            "emission_factor": "consumer_goods-type_amusement_parks_arcades",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        casinos: {
            "emission_factor": "consumer_goods-type_gambling_establishments_except_casino_hotels",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        },
        variousRecreation: {
            "emission_factor": "consumer_goods-type_golf_courses_marinas_ski_resorts_fitness_other_rec_centers_industries",
            "parameters": {
                "money": 0,
                "money_unit": "usd"
            }
        }
    });

    const sanitizeInput = (state, setter, unit) => {
        Object.keys(state).forEach(type => {
            setter(pS => ({
                ...pS, 
                [type]: {
                    ...pS[type], 
                    parameters: {
                        ...pS[type].parameters, 
                        [unit]: 0
                    }
                }
            }));
        });
    };

    const sanitizeInputConditionally = (state, setter, unit) => {
        Object.keys(state).forEach(type => {
            if(!checked[type]) {
                setter(pS => ({
                    ...pS, 
                    [type]: {
                        ...pS[type], 
                        parameters: {
                            ...pS[type].parameters, 
                            [unit]: 0
                        }
                    }
                }));
            };
        });
    };

    const handleNext = () => {
        switch(activeStep) {
            case 0:
                if(toggle === "false") {
                    setVehicle(pS => ({...pS, parameters: {...pS.parameters, distance: 0}}));
                };
                navigate('/survey/public-transit');
                break;
            case 1:
                if(toggle === "false") {
                    sanitizeInput(publicTransit, setPublicTransit, "distance");
                } else {
                    sanitizeInputConditionally(publicTransit, setPublicTransit, "distance");
                };
                navigate('/survey/flight');
                break;
            case 2:
                if(toggle === "false") {
                    sanitizeInput(flight, setFlight, "distance");
                } else {
                    sanitizeInputConditionally(flight, setFlight, "distance");
                };
                navigate('/survey/electricity');
                break;
            case 3:
                navigate('/survey/natural-gas');
                break;
            case 4:
                navigate('/survey/water');
                break;
            case 5:
                navigate('/survey/food');
                break;
            case 6:
                sanitizeInputConditionally(foods, setFoods, "money");
                navigate('/survey/beverage');
                break;
            case 7:
                sanitizeInputConditionally(beverages, setBeverages, "money");
                navigate('/survey/dining');
                break;
            case 8:
                if(toggle === "false") {
                    sanitizeInput(dining, setDining, "money");
                } else {
                    sanitizeInputConditionally(dining, setDining, "money");
                };
                navigate('/survey/tobacco');
                break;
            case 9:
                if(toggle === "false") {
                    setTobacco(pS => ({...pS, parameters: {...pS.parameters, money: 0}}));
                };
                navigate('/survey/goods');
                break;
            case 10:
                sanitizeInputConditionally(goods, setGoods, "money");
                navigate('/survey/services');
                break;
            case 11:
                sanitizeInputConditionally(services, setServices, "money");
                navigate('/survey/recreation');
                break;
            case 12:
                sanitizeInputConditionally(recreation, setRecreation, "money");
                navigate('/survey/results');
                break;
            default:
                break;
        };
    };
    
    const handleBack = () => {
        switch(activeStep) {
            case 1:
                navigate('/survey/vehicle');
                break;
            case 2:
                navigate('/survey/public-transit');
                break;
            case 3:
                navigate('/survey/flight');
                break;
            case 4:
                navigate('/survey/electricity');
                break;
            case 5:
                navigate('/survey/natural-gas');
                break;
            case 6:
                navigate('/survey/water');
                break;
            case 7:
                navigate('/survey/food');
                break;
            case 8:
                navigate('/survey/beverage');
                break;
            case 9:
                navigate('/survey/dining');
                break;
            case 10:
                navigate('/survey/tobacco');
                break;
            case 11:
                navigate('/survey/goods');
                break;
            case 12:
                navigate('/survey/services');
                break;
            default:
                break;
        };
    };

    // const dispatch = useDispatch();

    const userInput = [
        vehicle,
        ...Object.values(publicTransit),
        ...Object.values(flight),
        electricity,
        naturalGas,
        water,
        ...Object.values(foods),
        ...Object.values(beverages),
        ...Object.values(dining),
        tobacco,
        ...Object.values(goods),
        ...Object.values(services),
        ...Object.values(recreation)
    ];

    const sendDispatch = () => {
        const newArr = userInput.map(obj => {
            const conditions = [
                obj.emission_factor === "electricity-energy_source_electricity",
                obj.emission_factor === "fuel_type_natural_gas-fuel_use_na",
                obj.emission_factor === "water-supply_wastewater_treatment",
                obj.emission_factor === "consumer_goods-type_packaged_meat_except_poultry",
                obj.emission_factor === "consumer_goods-type_packaged_poultry",
                obj.emission_factor === "consumer_goods-type_seafood",
                obj.emission_factor === "consumer_goods-type_bread_other_baked_goods",
                obj.emission_factor === "consumer_goods-type_breakfast_cereals",
                obj.emission_factor === "consumer_goods-type_cheese",
                obj.emission_factor === "consumer_goods-type_cookies_crackers_pastas_tortillas",
                obj.emission_factor === "consumer_goods-type_fluid_milk_butter",
                obj.emission_factor === "consumer_goods-type_refined_vegetable_olive_seed_oils",
                obj.emission_factor === "consumer_goods-type_seasonings_dressings",
                obj.emission_factor === "consumer_goods-type_frozen_food",
                obj.emission_factor === "consumer_goods-type_ice_cream_frozen_desserts",
                obj.emission_factor === "consumer_goods-type_snack_foods",
                obj.emission_factor === "consumer_goods-type_all_other_foods",
                obj.emission_factor === "consumer_goods-type_coffee_tea",
                obj.emission_factor === "consumer_goods-type_soft_drinks_bottled_water_ice",
                obj.emission_factor === "consumer_goods-type_breweries_beer",
                obj.emission_factor === "consumer_goods-type_distilleries_spirits",
                obj.emission_factor === "consumer_goods-type_wineries_wine",
                obj.emission_factor === "consumer_services-type_limited_service_restaurants",
                obj.emission_factor === "consumer_services-type_full_service_restaurants",
                obj.emission_factor === "consumer_services-type_all_other_food_drinking_places",
                obj.emission_factor === "consumer_goods-type_tobacco_products",
                obj.emission_factor === "consumer_goods-type_clothing",
                obj.emission_factor === "consumer_goods-type_books_newspapers_magazines_other_print_media",
                obj.emission_factor === "consumer_goods-type_dolls_toys_games",
                obj.emission_factor === "consumer_goods-type_sporting_athletic_goods",
                obj.emission_factor === "consumer_goods-type_dog_cat_food",
                obj.emission_factor === "health_care-type_health_personal_care_stores",
                obj.emission_factor === "general_retail-type_general_merchandise_stores",
                obj.emission_factor === "general_retail-type_nonstore_retailers",
                obj.emission_factor === "general_retail-type_all_other_retail",
                obj.emission_factor === "consumer_goods-type_dry_cleaning_laundry",
                obj.emission_factor === "consumer_goods-type_cable_subscription_programming",
                obj.emission_factor === "consumer_goods-type_vehicle_repair",
                obj.emission_factor === "domestic_services-type_pet_care_photofinishing_parking_other_sundry_services",
                obj.emission_factor === "consumer_goods-type_movies_film",
                obj.emission_factor === "consumer_goods-type_performances",
                obj.emission_factor === "consumer_goods-type_museums_historical_sites_zoos_parks",
                obj.emission_factor === "consumer_goods-type_amusement_parks_arcades",
                obj.emission_factor === "consumer_goods-type_gambling_establishments_except_casino_hotels",
                obj.emission_factor === "consumer_goods-type_golf_courses_marinas_ski_resorts_fitness_other_rec_centers_industries"
            ]
            if(conditions.includes(true)) {
                return {
                    ...obj,
                    parameters: {
                        ...obj.parameters,
                        money: obj.parameters.money * 12
                    }
                };
            };
            return obj;
        })
    //   dispatch(calculateFootprint(newArr));
    };

    return (
        <>
            <Routes>
                <Route index element={<Vehicle 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    vehicle={vehicle.parameters.distance} setVehicle={setVehicle} />} />
                <Route path="vehicle" element={<Vehicle 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    vehicle={vehicle.parameters.distance} setVehicle={setVehicle} />} />
                <Route path="public-transit" element={<PublicTransit 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    checked={checked} setChecked={setChecked} 
                    publicTransit={publicTransit} setPublicTransit={setPublicTransit} />} />
                <Route path="flight" element={<Flight 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    checked={checked} setChecked={setChecked} 
                    flight={flight} setFlight={setFlight} />} />
                <Route path="electricity" element={<Electricity 
                    setActiveStep={setActiveStep} 
                    electricity={electricity.parameters.money} setElectricity={setElectricity} />} />
                <Route path="natural-gas" element={<NaturalGas 
                    setActiveStep={setActiveStep} 
                    naturalGas={naturalGas.parameters.money} setNaturalGas={setNaturalGas} />} />
                <Route path="water" element={<Water 
                    setActiveStep={setActiveStep} 
                    water={water.parameters.money} setWater={setWater} />} />
                <Route path="food" element={<Food 
                    setActiveStep={setActiveStep} 
                    checked={checked} setChecked={setChecked} 
                    foods={foods} setFoods={setFoods} />} />
                <Route path="beverage" element={<Beverage 
                    setActiveStep={setActiveStep} 
                    checked={checked} setChecked={setChecked} 
                    beverages={beverages} setBeverages={setBeverages} />} />
                <Route path="dining" element={<Dining 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    checked={checked} setChecked={setChecked} 
                    dining={dining} setDining={setDining} />} />
                <Route path="tobacco" element={<Tobacco 
                    setActiveStep={setActiveStep} 
                    toggle={toggle} setToggle={setToggle} 
                    tobacco={tobacco.parameters.money} setTobacco={setTobacco} />} />
                <Route path="goods" element={<Goods 
                    setActiveStep={setActiveStep} 
                    checked={checked} setChecked={setChecked} 
                    goods={goods} setGoods={setGoods} />} />
                <Route path="services" element={<Services 
                    setActiveStep={setActiveStep} 
                    checked={checked} setChecked={setChecked} 
                    services={services} setServices={setServices} />} />
                <Route path="recreation" element={<Recreation 
                    setActiveStep={setActiveStep} 
                    checked={checked} setChecked={setChecked} 
                    recreation={recreation} setRecreation={setRecreation} />} />
                <Route path="results" element={<Results />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <MobileStepper 
                variant="dots" 
                steps={13} 
                position="static" 
                activeStep={activeStep} 
                nextButton={
                    toggle !== null ? 
                    <Button size="small" onClick={handleNext}>
                        Next<KeyboardArrowRight />
                    </Button> 
                    : null
                } 
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />Back
                    </Button>
                } 
            />
        </>
    );
}

export default Survey;

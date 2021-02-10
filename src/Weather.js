import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function Weather() {
    
    const[weather, setWeather] = useState([]);

    function getWeather() {
        

        fetch(
            "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.6253064&lon=6.3903381"
        )
        .then((response) => response.json())
        .then((json) => setWeather(json.properties.timeseries))
        .catch((error) => console.error(error));

    }

    useEffect(() => {
        getWeather();
    }, []);

    return weather.length > 0 ? (
        <div className="weather">
            <div className="temperature">
                <h2>Weather</h2>
                {weather.slice(0, 6).map((hour) => (
                <Hour hourWeather={hour} />
                ))}
            </div>
        </div>
    ) : (
        <div>Something went wrong here</div>
    );
}

export default Weather;

function Hour(props) {
    const hourWeather = props.hourWeather;
    const input = hourWeather.time;

    return <div>{DateTime.fromISO(input).toFormat("HH:mm")} : {hourWeather.data.instant.details.air_temperature}</div>;
}
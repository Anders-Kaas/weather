import React from "react";
import cloudy from '../img/amcharts_weather_icons_1.0.0/static/cloudy-day-1.svg';
import sunny from '../img/amcharts_weather_icons_1.0.0/static/day.svg';
import rainy from '../img/amcharts_weather_icons_1.0.0/static/rainy-6.svg';
import snowy from '../img/amcharts_weather_icons_1.0.0/static/snowy-6.svg';
import thunder from '../img/amcharts_weather_icons_1.0.0/static/thunder.svg';



function OneDayReport(props){

    return(
        <div className="forecast-one-day-box">
            <p>{props.day}</p>
            <object type="image/svg+xml" data={thunder}>svg-animation</object>
            <p className="forecast-day-temperature">18°</p>
            <p className="forecast-night-temperature">7°</p>
        </div>
       
    )

}

export default function Forecast(props){
    return(
        <div className="forecast-container">
            <OneDayReport day="Monday"/>
            <OneDayReport day="Tuesday"/>
            <OneDayReport day="Wednesday"/>
            <OneDayReport day="Thursday"/>
            <OneDayReport day="Friday"/>
        </div>
    )
}
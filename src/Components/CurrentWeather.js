import React from 'react';


function AdditionalInfo(props) {
    return (
        <div className='top-info-box'>
            <h1>Clear</h1>
            <p>Feels like 12°</p>
            <p>Barometric pressure 1012 hPa</p>
            <p>Humidity 53%</p>
        </div>        
    )
}

function WindInfo(props) {
    return (
        <div className='top-info-box'>
            <p>Wind 10 km/h</p>
            <p>Visibility 16 km</p>
            <p>Dew point 6°</p>
        </div>
    )
}

export default function CurrentWeather(props) {

    return (
        <div className='current-weather-box'>
            <div className='current-temperature'>{props.celsius}°</div>
            <AdditionalInfo className='top-info-box'/>
            <WindInfo/>
        </div>
    )
}
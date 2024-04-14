import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "^_^" ,
        feelslike : 0.0,
        temp : 0.0,
        tempMin : 0.0,
        tempMax : 0.0,
        humidity : 0.0,
        weather : "(^o^)"
      });

      let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
      };

  return (
    <div style={{ textAlign:"center"}}> 
       <h1 style={{ fontFamily: "Arial, sans-serif" , color : "#43766C"}}>Weather widget</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp

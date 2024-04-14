import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import hazeWeatherImage from "../img/haze-weather.jpg";
import coldWeatherImage from "../img/cold-weather.jpg";
import hotWeatherImage from "../img/hot-weather.jpg";
import rainyWeatherImage from "../img/rainy-weather.jpg";
// import SevereColdIcon from '@mui/icons-material/SevereCold';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


import "./InfoBox.css";

function InfoBox({info}) {
  
  const INIT_URL = hazeWeatherImage;
  const HOT_URL = hotWeatherImage;
  const RAINY_URL = rainyWeatherImage;
  const COLD_URL = coldWeatherImage;
  // let info = {
  //   city: "^_^" ,
  //   feelslike : 0.0,
  //   temp : 0.0,
  //   tempMin : 0.0,
  //   tempMax : 0.0,
  //   humidity : 0.0,
  //   weather : "haze"
  // };



  return (
    <div className='InfoBox'>
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className='cardContainer'> 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {/* {info.humidity > 80 ? ThunderstormIcon : info.temp > 15 ? WbSunnyIcon : SevereColdIcon} */}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg:C</p>

        </Typography>
      </CardContent>

    </Card>
      </div>

    </div>
  )
}

export default InfoBox;

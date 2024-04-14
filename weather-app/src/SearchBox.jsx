import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "";
    const API_KEY = "";

    let getWeatherInfo = async () => {
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelslike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        };
        console.log(jsonResponse);
        console.log(result);
        return result;
      }catch(error){
        throw error;
      }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
        }catch(error){
            setError(true);
        }
    };

  return (
    <div className='SearchBox'>

    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
    <br></br><br></br>
    <Button variant="contained" type='submit' style={{ backgroundColor: '#43766C' }}>
        Search
      </Button>
      {error && <p style={{color : "red"}}>NO SUCH PLACE EXISTS IN OUR API !!</p>}
    </form>
    </div>

  );
};


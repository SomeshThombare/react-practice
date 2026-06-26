import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
     let [city, setCity] = useState("");
     let [error,setError]= useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY = "f3e7c1d0b8f5a2e4b6c9d8e7f1a2b3c4";
    const API_KEY = "62b3d130a175dae30c2043c1728d2319";

   let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            // FIX: Manually throw error if API fails (like 404 city not found)
            if (!response.ok) {
                throw new Error("City not found");
            }

            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (error) {
            // FIX: Set error state to true (boolean) to match your state definition
            setError(true);
            throw error; // Re-throw so handleSubmit knows it failed
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError(false); // Reset error state on new search
            console.log(city);
            let newInfo = await getWeatherInfo();
            if (newInfo) {
                updateInfo(newInfo);
                setCity("");
            }
        } catch (err) {
            // Error is handled inside getWeatherInfo
        }
    }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
          <TextField id="city" 
          label="City name" 
          variant="outlined" 
          required  value={city} 
          onChange={handleChange}/>
          <br></br> <br></br>

           <Button variant="contained" 
           type='submit'> Search</Button>
           {error && <p>No such place exist!</p>}
      </form>
    </div>
  );
}

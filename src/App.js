import React, { useEffect, useState } from "react";
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Header from './components/Header/Header';
import Grid from './components/UI/Grid';
import PieChart from './components/Charts/PieChart';
import LineChart from './components/Charts/LineChart';
import SideHeader from './components/SideHeader/SideHeader';
import SideFooter from './components/SideFooter/SideFooter';
import Search from './components/Header/Search';

const GEO_WEATHER_API_KEY = 'c88b3d6ab6c58e615c21127984a9dee4';

function App() {
  const [timezone, setTimeZone] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [gasConcentration, setGasConcentration] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoadUp, setFirstLoadUp] = useState(true);
  const [noCityFound, setNoCityFound] = useState(false);

  useEffect(() => {
    if (!timezone) return;

    const http = async () => {
      setIsLoading(true);
      const longitude = timezone.geo.longitude;
      const latitude = timezone.geo.latitude;

      // gather current weather data
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${GEO_WEATHER_API_KEY}`)
        .then(response => response.json())
        .then((data) => {
          setCurrentWeather(data);
        })

      // gather gas concentration data
      await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${GEO_WEATHER_API_KEY}`)
        .then(response => {
          return response.json();
        })
        .then((data) => {
          setGasConcentration(data);
        })

      // weather forecast data
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${GEO_WEATHER_API_KEY}`)
        .then((response) => {
          return response.json()
        })
        .then(response => {
          setWeatherForecast(response);
        })
      setIsLoading(false);
    }
    http();
  }, [timezone]);

  const setLocation = async (location) => {
    setFirstLoadUp(false);
    setCity(location);
    setIsLoading(true);
    await fetch(`https://api.ipgeolocation.io/timezone?apiKey=02f239f810e64b819a366f52a5dc513b&location=${location}`)
      .then(response => {
        if (!response.ok) {
          console.log('city not found');
          setCity('');
          setFirstLoadUp(true);
          setNoCityFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setTimeZone(data);
      })
    setIsLoading(false);
  }

  if (firstLoadUp) {
    return <div className="loadup-container">
      <Search setLocation={setLocation} />
      {noCityFound && <div className="no-city-found-container">NO CITY FOUND</div>}
    </div>
  }

  if (isLoading) {
    return <div className="loading-container">
      <div className="loading-text">Loading...</div>
    </div>
  }

  return (
    <div className="App">
      <Main >
        <Header date_time_txt={(timezone) ? timezone.date_time_txt : null} setLocation={setLocation} />
        {currentWeather && <Grid currentWeather={currentWeather} />}
        {weatherForecast && <LineChart weatherForecast={weatherForecast} />}
      </Main>
      <SideBar >
        {(currentWeather && timezone) && <SideHeader timezone={timezone} currentWeather={currentWeather} city={city} />}
        <div className="line"></div>
        {gasConcentration && <PieChart gasConcentration={gasConcentration} />}
        <div className="line"></div>
        {(timezone && currentWeather) &&
          <SideFooter
            currentTime={timezone['time_24']}
            sunrise={currentWeather['sys']['sunrise']}
            sunset={currentWeather['sys']['sunset']}
          />}
      </SideBar>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetailes from "./components/TemperatureAndDetailes";
//import Forecast from "./components/Forecast";
import getFomattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "tokyo" });
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFomattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, weather]);

  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-700 to-blue-700 shadow-xl shadow-gray-400"
    >
      <TopButtons />
      <Inputs />

      <TimeAndLocation weather={weather} />
      <TemperatureAndDetailes weather={weather} />
      {/*
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
      */}
    </div>
  );
}

export default App;

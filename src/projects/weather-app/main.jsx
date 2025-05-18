import "../../../src/index.css"

// Default <FaCloudSun />, Cloudy
import { FaCloudSun, FaCloud, FaCloudMoon, FaSun, FaMoon } from "react-icons/fa";
// Thunder, rain,
import { MdFoggy } from "react-icons/md";
import { FaCloudBolt, FaCloudShowersHeavy } from "react-icons/fa6";
// Sunny
import { IoSunny } from "react-icons/io5";

import useWeatherInfo from "./hooks/useWeatherInfo";
import WeatherCard from "./components/WeatherCard";
import { useEffect, useState } from "react";


function WeatherForecast() {
  const [region, setRegion] = useState(null);
  const [tempC, setTempC] = useState(null);
  const [tempF, setTempF] = useState(null);
  const [windKph, setWindKph] = useState(null);
  const [isDay, setIsDay] = useState(null);
  const [weather, setWeather] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [cloud, setCloud] = useState(null);

  const [locationName, setLocationName] = useState("new york")
  const weatherInfo = useWeatherInfo(locationName);

  
  
  useEffect(() => {
    const current = weatherInfo?.current;
    const location = weatherInfo?.location;

    setRegion(location?.region);
    setCloud(current?.cloud);
    setWeather(current?.condition?.text);
    setHumidity(current?.humidity);
    setIsDay(current?.is_day);
    setTempC(current?.temp_c);
    setTempF(current?.temp_f);
    setWindKph(current?.wind_kph);

  }, [weatherInfo])
  
// handler
  const onSubmitHandler = (e) => {
    e.preventDefault()
    setLocationName(e.target.inputField.value);
  }
  const onKeyDOwnHandler = (e) => {
    if(e.key == "Enter"){
      setLocationName(e.target.value);
    }
  }

// Weather Icons
  const weatherIconRender = () => {
    if (weather?.toLowerCase().includes("thunder")) return <FaCloudBolt className="size-20" />;
    if (weather?.toLowerCase().includes("rain")) return <FaCloudShowersHeavy className="size-20" />;
    if (weather?.toLowerCase().includes("sunny")) return <IoSunny className="size-20" />;
    if (weather?.toLowerCase().includes("cloudy")) return <FaCloud className="size-20" />;
    if (weather?.toLowerCase().includes("mist")) return <MdFoggy className="size-20" />;
    return isDay ? <FaCloudSun className="size-20"/> : <FaCloudMoon className="size-20 fill-slate-300"/>
  };

// Date Code
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const convertMsTodate = () => {
    const dateInstance = new Date();
    const mothsArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    setMonth(mothsArr[dateInstance.getMonth()])
    setDay(dateInstance.getDate())
    setYear(dateInstance.getFullYear());
  }
  useEffect(() => {
    convertMsTodate()
  }, [])


  return (
  <div className="flex flex-col gap-10 justify-center items-center">
    {/* <h1 className="text-center text-4xl font-bold">Weather</h1> */}
    <div className="p-8 rounded-md bg-secBgClr w-[680px] flex flex-col gap-8">
      <form onSubmit={onSubmitHandler} className="flex gap-2">
        <input
          onKeyDown={onKeyDOwnHandler}
          onClick={(e) => e.currentTarget.select()}
          type="text"
          name="inputField"
          className="w-full px-4 py-2 rounded-md text-black font-medium"
          placeholder="Enter Location Name"/>
        <button
          type="submit"
          className="priButton">Search</button>
      </form>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          {/* left */}
          <div className="flex flex-col gap-5 w-full p-4 bg-focusColor backdrop-blur-[10px] rounded-md">
            <div>
              <h1 className="font-semibold text-3xl">{region}</h1>
              <h2 className="text-gray-300 capitalize">{month} {day}, {year}</h2>
            </div>
            <div className="flex flex-col gap-2  p-4 bg-[#3a3a3a1e] backdrop-blur-[10px] rounded-md">
              {weatherIconRender()}
              <p className="text-2xl capitalize text-right">{weather}</p>
            </div>
          </div>
          {/* right */}
          <div className="text-center w-full flex flex-col gap-5 justify-center items-center p-4 bg-focusColor backdrop-blur-[10px] rounded-md">
            <h1 className="text-7xl">{tempC}°C</h1>
            <hr className="border border-white w-1/2"/>
            <span className="text-4xl flex justify-center gap-4 items-center">
              {isDay ? <FaSun className="size-12 fill-orange-400" /> : <FaMoon className="size-12 fill-blue-400" />}
              {isDay ? "Day" : "Night"}
            </span>
          </div>
        </div>

        <div className="flex gap-5 justify-start">
          <WeatherCard
            title = "Fahrenheit"
            api_res = {tempF}
            symbol = "°F"
          />
          <WeatherCard
            title = "Cloud"
            api_res = {cloud}
            symbol = " %"
          />
          <WeatherCard
            title = "Wind Speed"
            api_res = {windKph}
            symbol = " KPH"
          />
          <WeatherCard
            title = "Humidity"
            api_res = {humidity}
            symbol = " %"
          />
        </div>
      </div>
    </div>


  </div>
  )
}

export default WeatherForecast

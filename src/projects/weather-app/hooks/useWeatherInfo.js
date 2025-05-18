import axios from "axios";
import { useEffect, useState } from "react";

export default function useWeatherInfo(location) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=c470b087477a4f18acc184407251005&q=${location}&aqi=no`)
        setData(res.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setTimeout(() => {
          console.clear();
        }, 5000)
      }
    };

    fetchData();
  }, [location]); // Dependency array should include location

  return data;
}

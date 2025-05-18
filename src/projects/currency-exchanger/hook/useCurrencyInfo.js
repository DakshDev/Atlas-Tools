import axios from "axios";
import { useEffect, useState } from "react";



function  useCurrencyInfo(currency="usd") {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/4f9faaba05633375eb8f5ad5/latest/${currency}`)
    .then(res => setData(res.data.conversion_rates))
    .catch(err => alert(err))
  }, [currency])
  return data;
}



export default useCurrencyInfo;
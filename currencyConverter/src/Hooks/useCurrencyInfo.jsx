import { useState } from "react"

export default function useCurrencyInfo(currency){
    let [data , setData] = useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data[currency]))
    return data;
}

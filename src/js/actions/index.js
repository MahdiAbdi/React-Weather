import axios from 'axios'

const API_KEY = 'f0e68a20431b78c55e111178b88128fc'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const fetchWeather = (response) => {
    return {
        type: "FETCH_WEATHER",
        payload: response
    }
}

export const asyncFetchWeather = (city) => {
    return dispatch => {
        const url = `${ROOT_URL}&q=${city}`
        axios.get(url)
        .then(function(response){
            // console.log(response)
            dispatch(fetchWeather(response))
        })
        .catch(function(error) {
            dispatch(fetchWeather(error))
        })
    }
}
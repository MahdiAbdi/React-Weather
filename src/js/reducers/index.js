import { combineReducers } from 'redux'
import fetch_weather from './fetch_weather'

const Reducer = combineReducers({
    weather: fetch_weather
})

export default Reducer
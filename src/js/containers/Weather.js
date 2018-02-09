import React, { Component } from 'react'
import { connect } from 'react-redux';

class Weather extends Component {
    render() {
        let weather
        if(this.props.weather) {
            console.log(this.props.weather)
            weather = this.props.weather
            return(
                <div>
                    Tempreature of <b>{weather.name}</b> in <b>{weather.sys.country}</b> is 
                    <b> {weather.main.temp - 273.3}</b>
                </div>
            )
        }
        else {
            return (
                <p>Search for a city</p>
            )
        }
    }
}

function mapStateToProps(state) {
    return({
        weather: state.weather.weather
    })
}

export default connect(mapStateToProps)(Weather)
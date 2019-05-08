import React, { Component } from "react";
import {
    View,
    Text
} from "react-native";
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        style: state.style,
        city: state.city
    };
}

class ConnectedWeatherPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: null,
            pressure: null,
            humidity: null,
        }
    }
    
    componentDidMount() {
        this.fetchWeather(this.props.city);
    }

    // Fetching the weather from OpenWeatherAPI
    fetchWeather(city) {
        return (
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${
          city.coord.lat
        }&lon=${
          city.coord.lon
        }&units=metric&APPID=8cb20985ef311ad1d1695780c2bc65ec`
            )
            // Get the response in JSON format and set the value to states
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    temperature: responseJson.main.temp,
                    pressure: responseJson.main.pressure,
                    humidity: responseJson.main.humidity
                });
            })
            .catch(error => {
                console.log(error);
            })
        );
    }

    render() {

        const style = this.props.style;
        const city = this.props.city;

        // Conditions to render different image for different weather condition
        const temp = this.state.temperature;
        let weatherImage;

        // If the temperature of the city below 30 degree (try "Da Lat" in the Input field)
        if (temp < 30) {
            weatherImage = (
            <Image source={ require("./app/static/cool.png") }
                    style={ style.weatherImg }
            />
            );
            // Else (try "Lagi" in the Input field)
        } else {
            weatherImage = (
            <Image source={ require("./app/static/hot.jpg") }
                    style={ style.weatherImg }
            />
            );
        }

        return ( 
            <View style={ style.info } > 
            
                { /* Display Weather Image (Interchangable based on the logic in the beginning of render() */ } 
                { weatherImage }

                { /* City Name */ } 
                <Text style={ style.weatherTitle }> { city.name } </Text>

                { /* Fetched Weather Information */ } 
                <View style={ style.weatherInfo } >
                    <Text style={ style.weatherInfoText }>Temperature: { this.state.temperature }°C</Text> 
                    <Text style={ style.weatherInfoText }>Pressure: { this.state.pressure }Pa</Text> 
                    <Text style={ style.weatherInfoText }>Humidity: { this.state.humidity }%</Text> 
                </View> 

            </View>
        );
    }
}

const WeatherPanel = connect(mapStateToProps)(ConnectedWeatherPanel);

export default WeatherPanel;
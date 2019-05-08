import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

class WeatherPanel extends Component {

    // Fetching the weather from OpenWeatherAPI
    fetchWeather(item) {
        return (
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${
          item.coord.lat
        }&lon=${
          item.coord.lon
        }&units=metric&APPID=8cb20985ef311ad1d1695780c2bc65ec`
            )
            // Get the response in JSON format and set the value to states
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    cityname: item.name,
                    text: item.name,
                    city: item,
                    temperature: responseJson.main.temp,
                    pressure: responseJson.main.pressure,
                    humidity: responseJson.main.humidity
                });
            })

            // Catching error
            .catch(error => {
                console.log(error);
            })
        );
    }

    render() {
        // Conditions to render different image for different weather condition
        const temp = this.state.temperature;
        let weatherImage;

        // If the temperature of the city below 30 degree (try "Da Lat" in the Input field)
        if (temp < 30) {
            weatherImage = ( <
                Image source = { require("./static/cool.png") }
                style = { this.state.style.weatherImg }
                />
            );
            // Else (try "Lagi" in the Input field)
        } else {
            weatherImage = ( <
                Image source = { require("./static/hot.jpg") }
                style = { this.state.style.weatherImg }
                />
            );
        }
        return ( <
            View style = { this.state.style.info } > { /* Display Weather Image (Interchangable based on the logic in the beginning of render() */ } { weatherImage }

            { /* City Name */ } <
            Text style = { this.state.style.weatherTitle } > { this.state.city.name } <
            /Text>

            { /* Fetched Weather Information */ } <
            View style = { this.state.style.weatherInfo } >
            <
            Text style = { this.state.style.weatherInfoText } >
            Temperature: { this.state.temperature }°
            C <
            /Text> <
            Text style = { this.state.style.weatherInfoText } >
            Pressure: { this.state.pressure }
            Pa <
            /Text> <
            Text style = { this.state.style.weatherInfoText } >
            Humidity: { this.state.humidity } %
            <
            /Text> <
            /View> <
            /View>
        );
    }
}

export default WeatherPanel;
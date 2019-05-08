import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { connect } from "react-redux";
import data from "../data/city.list.json";
import apikey from "../config/WeatherAPI.json";


//  Connect the store into component's props
function mapStateToProps(state) {
    return {
        style: state.style,
        city: state.city
    };
}

// Create WeatherPanel component
class ConnectedWeatherPanel extends Component {

  // This is a Stateful component.
  // The local state is used to hold the fetched data, since these data will
  // be used only by this component.
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      pressure: null,
      humidity: null
    };
    this.changeImage = this.changeImage.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  // Load the data the first time
  componentDidMount() {
    this.fetchWeather(data[4]);
  }

  // Load the data whenever there's change in city choice
  componentDidUpdate() {
    this.fetchWeather(this.props.city);
  }

  // Fetching the weather data from OpenWeatherAPI
  fetchWeather(city) {
      console.log(apikey.id);
      return (
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${
          city.coord.lat
        }&lon=${
          city.coord.lon
        }&units=metric&APPID=${apikey.id}`
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

  // Changing image display based on temperature
  changeImage() {
    // Conditions to render different image for different weather condition
    const temp = this.state.temperature;
    const style = this.props.style;

    let weatherImage;

    // If the temperature of the city below 30 degree (try "Da Lat" in the Input field)
    if (temp < 30) {
      weatherImage = (
        <Image
          source={require("../static/cool.png")}
          style={style.weatherImg}
        />
      );
      // Else (try "Lagi" in the Input field)
    } else {
      weatherImage = (
        <Image source={require("../static/hot.jpg")} style={style.weatherImg} />
      );
    }

    return weatherImage;
  }

  // Render the component
  render() {
    const style = this.props.style;
    const city = this.props.city;
    return (

      <View style={style.info}>

        {/* Display Weather Image (Interchangable based on the logic in the beginning of render() */}
        {this.changeImage()}

        {/* City Name */}
        <Text style={style.weatherTitle}> {city.name} </Text>

        {/* Fetched Weather Information */}
        <View style={style.weatherInfo}>

          <Text style={style.weatherInfoText}>
            Temperature: {this.state.temperature}°C
          </Text>

          <Text style={style.weatherInfoText}>
            Pressure: {this.state.pressure}Pa
          </Text>

          <Text style={style.weatherInfoText}>
            Humidity: {this.state.humidity}%
          </Text>

        </View>
      </View>
    );
  }
}

// Connect the component to global state
const WeatherPanel = connect(mapStateToProps)(ConnectedWeatherPanel);

export default WeatherPanel;
import React, { Component } from "react";
import axios from "axios";

/**
 * https://api.darksky.net/forecast/6111b812232ce4bc2370f18ee3b64134/[latitude],[longitude]
 * As an user, I should be greeted with the temperature, and summary.
 * As an engineer, I should use componentDidMount as well as axios to accomplish the task.
 *
 * You will be performing two AJAX calls:
 * 1.) The first call will return the user's latitude and longitude
 *     API: http://ip-api.com/json
 * 2.) The second call should return detailed weather information for a given latitude and longitude.
 *     Replace [latitude] and [longitude] in the URL below with the results from the first API.
 *     API: http://dev.mydbc.co/demo/api.php?lat=[latitude]&long=[longitude]
 */

class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    weatherReport: {},
    loading: false,
    isError: false
  };

  getLatLon = () => {
    this.setState({
      loading: true,
    });
    axios
    .get(`http://dev.mydbc.co/demo/latlong.php`)
    .then(response => {
      this.setState({ 
        latitude: response.data.lat, 
        longitude: response.data.lon,
        location: response.data.location,
        loading: false });
      let weather_url = "http://dev.mydbc.co/demo/api.php?lat=" + this.state.latitude + "&long=" + this.state.longitude
      this.state.latitude && this.state.longitude && this.state.location &&
      axios
      .get(weather_url)
      .then(response => {
        console.log(response);
        this.setState({
          weatherReport: {
            summary: response.data.currently.summary,
            temp: response.data.currently.temperature,
          }
        })
      })
      .catch(error => {
        this.setState({ isError: true });
      });
    })
    .catch(error => {
      this.setState({ isError: true });
    });
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getLatLon();
  };

  render() {
    return (
      <div className="card">
        <div className="card-section">
          <div className="container">
            <h3>{this.state.location}</h3>
            <p>
              {this.state.weatherReport.summary}
              <br />
              Temperature: {this.state.weatherReport.temp}&deg;F
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

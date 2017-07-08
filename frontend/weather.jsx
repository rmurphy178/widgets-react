import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  constructor() {
    this.state = {
      weather: null
    };

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.weatherAPI);
  }

  weatherAPI(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let url =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cad7e62c32c1d3c24b237b3ac5dce35a";
  }
}

export default Weather;

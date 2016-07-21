import React, { Component } from 'react';
import { connect } from 'react-redux';
// bring in our chart component
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // function(weather) { return weather.main.pressure }
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const temps = cityData.list.map(weather => weather.main.temp);
    // old way - although only iterates once
    /*
    cityData.list.map(function(obj){
      pressure.push(obj.main.pressure);
      humidity.push(obj.main.humidity);
      temp.push(obj.main.temp);
    });
    */
    
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="green" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="teal" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="gold" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }) {
  // es6 can condense collecting a prop on state
  // state.weather prop is now collected with {weather}
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);

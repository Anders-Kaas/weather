// import logo from './logo.svg';
import React from 'react';
import './App.css';
import CurrentWeather from './Components/CurrentWeather';
import Forecast from './Components/Forecast';

export default class App extends React.Component {

  state = {
    loading: true,
    weatherinfo: {}
  }


  async componentDidMount() {
    const url = "http://127.0.0.1:8000/weather-info/?city=copenhagen";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loading: false, weatherinfo: data});
}


  render() {
    console.log(this.state.weatherinfo)
    console.log(this.state.loading)
    return (
      <div className='App'>
        {this.state.loading ? <div> Loading! </div> :
          <div className="WeatherApp">
            <CurrentWeather celsius="18"/>
            <Forecast/>
          </div>
        }
      </div>
    );
  }
}
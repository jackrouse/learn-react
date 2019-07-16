import React from 'react';
// import {BoilingVerdict} from '../boilingVerdict/boilingVerdict'
import {TemInput} from '../temInput/temInput'
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleFChange = this.handleFChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.state = {temperature: '',scale:'c'};
  }

  handleFChange(value) {
    this.setState({scale:'f',temperature: value});
  }

  handleCChange(value) {
    this.setState({scale:'c',temperature: value});
  }

  render() {
    const ftem =this.state.scale === 'c'? tryConvert(this.state.temperature,toFahrenheit):this.state.temperature;
    const ctem =this.state.scale === 'f'? tryConvert(this.state.temperature,toCelsius):this.state.temperature;
    return (
      <div>
        <TemInput 
          scale="c" 
          onTemChange = {this.handleCChange}
          temperature = {ctem}
        />
        <TemInput scale="f"
          onTemChange = {this.handleFChange}
          temperature = {ftem}
        />
      </div>
    );
  }
}
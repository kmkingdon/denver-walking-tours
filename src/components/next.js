import React, { Component } from 'react';
import styled from 'styled-components';
import header from '../assets/header.jpg';

class Next extends Component {

    homeReset= () => {
      this.props.home();
      this.props.resetTour();
      this.props.getLocation();
    }

    nextStopStart = () => {
      this.props.nextStop();
      this.props.findCenter();
    }


    render() {
    let tourStops = this.props.stops.stops.filter(stops => stops.tours_id === this.props.selectedTour)
    let currentStop = tourStops.filter(stops => stops.stopNumber === this.props.stopNumber)[0];

    if(currentStop.lastStop) {
      return (
        <Button onClick={this.homeReset}> Return to Home </Button>
      )
    } else {
      return (
        <Button onClick={this.nextStopStart}> Next Stop</Button>
      )
    }
  }
}

export default Next;



const Button = styled.button `
  grid-row: 4/5;
  grid-column: 1/2;
  justify-self: center;
  align-self: start;
  width: 70%;
  height: 70%;
  border: solid black 1px;
  background-color: yellow;
  font-size: 1rem;
  color: black;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

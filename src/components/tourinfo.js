import React, { Component } from 'react';
import styled from 'styled-components';
import SantaFe from '../assets/santafe.png';
import CherryCreek from '../assets/cherrycreek.jpg';
import Rino from '../assets/rino.png';
import MollyBrown from '../assets/mollybrown.jpg';

class TourInfo extends Component {

  get Background() {
        switch (this.props.selectedTour) {
          case 1:
            return   <Background src={Rino}/>
          case 2:
            return   <Background src={MollyBrown}/>
          case 3:
            return   <Background src={SantaFe}/>
          case 4:
            return   <Background src={CherryCreek}/>
          default:
        }
  }


  get TourContainer() {
    return this.props.tours.tours.map(tour =>
        <div key={tour.id} className={(this.props.selectedTour === tour.id)? '' : 'hidden'}>
          <Container>
            {this.Background}
            <Title>{tour.name}</Title>
            <Duration>Duration: {tour.duration}</Duration>
            <Description>{tour.description}</Description>
            <Button onClick={this.props.start}> Start Tour </Button>
          </Container>
        </div>
      )
  }

  render() {
    return (
      <div>
        {this.TourContainer}
      </div>
    )
  }
}

export default TourInfo;



const Container = styled.div `
  height: 23vh;
  width: 100vw;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  display: grid;
  grid-template-rows: 5vh 5vh 10vh;
  grid-template-columns: 65vw 35vw;
`
const Background = styled.img `
  height: 23vh;
  width: 100vw;
  opacity: .4;
  position: absolute;
  z-index: -1;
`

const Title = styled.h1 `
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.5rem;
`

const Duration = styled.h1 `
  grid-row: 2/3;
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
  width: 90%;
  text-align: left;
  font-size: 1rem;
`

const Description = styled.h1 `
  grid-row: 3/4;
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 90%;
  text-align: center;
  font-size: .8rem;
`

const Button = styled.button `
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 50%;
  border: solid black 1px;
  background-color: yellow;
  font-size: 1rem;
  color: hsl(0 ,0%, 0%);
  border-radius: 10px;
`

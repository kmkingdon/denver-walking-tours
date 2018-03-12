import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import BlueDot from '../assets/Blue_dot.png'

const CurrentLocation = () => <Current src={BlueDot} />;

class Find extends Component {

  componentDidMount() {
    this.props.getLocation();
  }

  // getPins() {
  //   return this.props.data.map(location => <div>)
  // }

  static defaultProps = {
    center: {lat: 39.7467473, lng: -104.9922351},
    zoom: 12
  };

  render() {

    return (
      <div>
        <Header />
        <Container>
          <Title> Find a Tour </Title>
          <MapContainer>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            <CurrentLocation
              lat= {this.props.currentLatitude}
              lng={this.props.currentLongitude}
            />
            </GoogleMapReact>
          </MapContainer>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Find;


const Container = styled.div `
  height: 75vh;
  width: 100vw;
  background-color: hsl(0 ,0%, 80%);
  display: grid;
  grid-template-rows: 10vh 55vh;
  grid-template-columns: 100vw;
`

const Title = styled.h1 `
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.5rem;
`

const MapContainer = styled.div `
  grid-row: 2/3;
  grid-column: 1/2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Current = styled.img `
  width: 10px;
  height: 10px;
`

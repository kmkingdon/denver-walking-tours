import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Header from '../containers/header';
import Footer from '../containers/footer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Find extends Component {
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
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
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

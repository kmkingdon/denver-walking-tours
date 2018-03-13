import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import BlueDot from '../assets/bluedot.png';


const CurrentLocation = () => <Current src={BlueDot} />;

class Start extends Component {
  constructor(props) {
    super(props)
    this.state= {
      center: {lat: "", lng: ""}
    }
  }

  componentDidMount() {
    this.props.getLocation();

    let newCenter = {lat:'', lng: ''};
    this.props.tours.tours.forEach(tour => {
      if(tour.id === this.props.selectedTour){
        newCenter.lat = tour.firstLatitude;
        newCenter.lng = tour.firstLongitude;
      }
    })
    this.setState({center: newCenter});
  }

  static defaultProps = {
    zoom: 14
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Title> Start Your Tour </Title>

          <MapContainer>
            <GoogleMapReact
              defaultCenter={this.state.center}
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

export default Start;


const Container = styled.div `
  height: 75vh;
  width: 100vw;
  background-color: hsl(0 ,0%, 80%);
  display: grid;
  grid-template-rows: 8vh 30vh 38vh;
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
  width: 40px;
  height: 40px;
`

import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import TourInfo from '../containers/tourinfo';
import BlueDot from '../assets/bluedot.png';
import architecture from '../assets/architecture.png';
import drinks from '../assets/drinks.png';
import history from '../assets/history.png';
import running from '../assets/running.png';

const CurrentLocation = () => <Current src={BlueDot} />;

class Find extends Component {
  constructor(props) {
    super(props)
    this.state= {
      center: {lat: '', lng: ''}
    }
  }

  componentDidMount() {
    this.props.getLocation();
    this.props.getTours();

    let newCenter = {lat:'', lng: ''};
    newCenter.lat = this.props.currentLatitude;
    newCenter.lng = this.props.currentLongitude;
    this.setState({center: newCenter});
  }

  showTour(id) {
    this.props.selectTour(id);
  }

  get Pins() {
      return this.props.tours.tours.map(location => {
        switch (location.type) {
          case 'drinks':
            return   <Tours onClick={(id)=>{this.showTour(location.id)}} key={location.id} src={drinks} lat={location.firstLatitude} lng={location.firstLongitude}/>

          case 'history':
            return   <Tours onClick={(id)=>{this.showTour(location.id)}} key={location.id} src={history} lat={location.firstLatitude} lng={location.firstLongitude}/>

          case 'running':
            return   <Tours onClick={(id)=>{this.showTour(location.id)}} key={location.id} src={running} lat={location.firstLatitude} lng={location.firstLongitude}/>

          case 'architechture':
            return   <Tours onClick={(id)=>{this.showTour(location.id)}} key={location.id} src={architecture} lat={location.firstLatitude} lng={location.firstLongitude}/>

          default:

        }
      })
  }

  static defaultProps = {
    zoom: 13
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <TitleContainer>
            <Title> Find a Tour </Title>
            <Drinks src={drinks}/>
            <DrinksKey> Drinks and Food </DrinksKey>
            <History src={history}/>
            <HistoryKey> Culture and History</HistoryKey>
            <Architecture src={architecture}/>
            <ArchitectureKey> Architecture </ArchitectureKey>
            <Running src={running}/>
            <RunningKey> Running Tours </RunningKey>
          </TitleContainer>
          <MapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBO9iDTo1khIY3Gi7MhnvfXBdNIkj9C6LY'}}
              defaultCenter={this.state.center}
              defaultZoom={this.props.zoom}
            >
            <CurrentLocation
              lat= {this.props.currentLatitude}
              lng={this.props.currentLongitude}
            />
            {this.Pins}
            </GoogleMapReact>
          </MapContainer>
          <TourContainer>
            <TourInfo />
          </TourContainer>
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
  grid-template-rows: 8vh 42vh 25vh;
  grid-template-columns: 100vw;
`

const TitleContainer = styled.div `
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 4vh 4vh ;
  grid-template-columns: 35vw 8vw 23vw 8vw 27vw;
`

const Title = styled.h1 `
  grid-row: 1/3;
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
  font-size: 1.3rem;
  font-family: 'Playfair Display', serif;
`
const Drinks = styled.img `
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
  width: 20px;
  height: 20px;
`
const DrinksKey = styled.h2`
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
  font-size: .7rem;
`
const History = styled.img `
  grid-row: 1/2;
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
  width: 20px;
  height: 20px;
`
const HistoryKey = styled.h2`
  grid-row: 1/2;
  grid-column: 5/6;
  justify-self: center;
  align-self: center;
  font-size: .7rem;
`

const Architecture = styled.img `
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
  width: 20px;
  height: 20px;
`
const ArchitectureKey = styled.h2`
  grid-row: 2/3;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
  font-size: .7rem;
`
const Running = styled.img `
  grid-row: 2/3;
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
  width: 20px;
  height: 20px;
`
const RunningKey = styled.h2`
  grid-row: 2/3;
  grid-column: 5/6;
  justify-self: center;
  align-self: center;
  font-size: .7rem;
`

const MapContainer = styled.div `
  grid-row: 2/3;
  grid-column: 1/2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const TourContainer = styled.div `
  grid-row: 3/4;
  grid-column: 1/2;
`

const Current = styled.img `
  width: 40px;
  height: 40px;
`

const Tours = styled.img `
  width: 30px;
  height: 30px;
  cursor: pointer;
`

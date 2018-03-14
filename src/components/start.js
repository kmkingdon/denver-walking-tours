import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import Next from '../containers/next';
import BlueDot from '../assets/bluedot.png';
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';
import Five from '../assets/5.png';
import Six from '../assets/6.png';
import Seven from '../assets/7.png';
import FirstDraft from '../assets/firstdraft.jpg';
import OurMutual from '../assets/ourmutualfriend.jpg';
import Ratio from '../assets/ratio.jpg';
import Epic from '../assets/epic.jpg';
import Fourteener from '../assets/14er.jpg';
import TenBarrel from '../assets/10barrel.jpg';
import Capital from '../assets/capital.jpg';
import MollyBrown from '../assets/mollybrown.jpg';
import Peabody from '../assets/peabody.jpg';
import Grant from '../assets/grant.jpg';
import Governors from '../assets/govenors.jpg';
import GrantHumphries from '../assets/granthumphries.jpg';
import Molecule from '../assets/molecule.jpg';
import Ballet from '../assets/ballet.jpg';
import Cva from '../assets/cva.jpg';
import Core from '../assets/core.jpg';
import Artists from '../assets/artists.jpg';
import Santiagos from '../assets/santiagos.jpg';
import REI from '../assets/rei.jpg';
import Larimer from '../assets/larimer.jpg';
import Dcpa from '../assets/dcpa.jpg';
import CivicCenter from '../assets/civiccenter.jpg';
import Tower from '../assets/tower.jpg';
import UnionStation from '../assets/unionstation.jpg';

const CurrentLocation = () => <Current src={BlueDot} />;

class Start extends Component {
  constructor(props) {
    super(props)
    this.state= {
      center: {lat: 39.748099, lng: -104.995687}
    }
  }

  componentDidMount() {

    let newCenter = {lat:'', lng: ''};
    this.props.tours.tours.forEach(tour => {
      if(tour.id === this.props.selectedTour){
        newCenter.lat = parseFloat(tour.firstLatitude);
        newCenter.lng = parseFloat(tour.firstLongitude);
        this.setState({center: newCenter});
      }
    })

    this.props.getLocation();
    this.props.getStops();
  }

  nextStopStart= () => {
    this.findCenter();
    this.props.nextStop();
  }

  findCenter() {
    let tourStops = this.props.stops.stops.filter(stops => stops.tours_id === this.props.selectedTour)
    let currentStop = tourStops.filter(stops => stops.stopNumber === this.props.stopNumber)[0];
    let newCenter = {lat:'', lng: ''};
    if(currentStop !== undefined) {

      newCenter.lat = currentStop.latitude;
      newCenter.lng = currentStop.longitude;
      this.setState({center: newCenter});
    }
  }

  get Title() {
    let tourName;
    this.props.tours.tours.forEach(tour => {
      if(tour.id === this.props.selectedTour){
        tourName = tour.name;
      }
    })
    return tourName;
  }

  get Pin() {
      let tourStops = this.props.stops.stops.filter(stops => stops.tours_id === this.props.selectedTour)
      let currentStop = tourStops.filter(stops => stops.stopNumber === this.props.stopNumber)[0];
      if(currentStop !== undefined) {
        switch (this.props.stopNumber) {
            case 1:
              return   <Tours key={currentStop.id} src={One} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 2:
              return   <Tours key={currentStop.id} src={Two} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 3:
              return   <Tours key={currentStop.id} src={Three} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 4:
              return   <Tours key={currentStop.id} src={Four} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 5:
              return   <Tours key={currentStop.id} src={Five} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 6:
              return   <Tours key={currentStop.id} src={Six} lat={currentStop.latitude} lng={currentStop.longitude}/>
            case 7:
              return   <Tours key={currentStop.id} src={Seven} lat={currentStop.latitude} lng={currentStop[0].longitude}/>
            default:
          }
      }
  }

  get StopInfo() {
    let tourStops = this.props.stops.stops.filter(stops => stops.tours_id === this.props.selectedTour)
    let currentStop = tourStops.filter(stops => stops.stopNumber === this.props.stopNumber)[0];

    if(currentStop !== undefined) {
      return (
      <StopInfo>
        <StopTitle>{currentStop.name}</StopTitle>
        <Address>{currentStop.address} </Address>
        <MoreInfo href={currentStop.link} target="_blank">More Info</MoreInfo>
        <Description>{currentStop.description}</Description>
        <Next/>
      </StopInfo>
    )}
  }

  get Background() {
    let tourStops = this.props.stops.stops.filter(stops => stops.tours_id === this.props.selectedTour)
    let currentStop = tourStops.filter(stops => stops.stopNumber === this.props.stopNumber)[0];

    if(currentStop !== undefined) {
        switch (currentStop.id) {
          case 1:
            return   <Background src={FirstDraft}/>
          case 2:
            return   <Background src={OurMutual}/>
          case 3:
            return   <Background src={Ratio}/>
          case 4:
            return   <Background src={Epic}/>
          case 5:
            return   <Background src={Fourteener}/>
          case 6:
            return   <Background src={TenBarrel}/>
          case 7:
            return   <Background src={Capital}/>
          case 8:
            return   <Background src={MollyBrown}/>
          case 9:
            return   <Background src={Peabody}/>
          case 10:
            return   <Background src={Grant}/>
          case 11:
            return   <Background src={Governors}/>
          case 12:
            return   <Background src={GrantHumphries}/>
          case 13:
            return   <Background src={Molecule}/>
          case 14:
            return   <Background src={Ballet}/>
          case 15:
            return   <Background src={Cva}/>
          case 16:
            return   <Background src={Core}/>
          case 17:
            return   <Background src={Artists}/>
          case 18:
              return   <Background src={Santiagos}/>
          case 19:
            return   <Background src={REI}/>
          case 20:
            return   <Background src={Larimer}/>
          case 21:
            return   <Background src={Dcpa}/>
          case 22:
            return   <Background src={CivicCenter}/>
          case 23:
            return   <Background src={Tower}/>
          case 24:
            return   <Background src={UnionStation}/>
          default:
        }
      }
  }

  static defaultProps = {
    zoom: 15
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Title> {this.Title} </Title>

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
            {this.Pin}
            </GoogleMapReact>
          </MapContainer>
          {this.StopInfo}
          {this.Background}
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
  background-color: transparent;
  display: grid;
  grid-template-rows: 8vh 30vh 38vh;
  grid-template-columns: 100vw;
`


const Title = styled.h1 `
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  text-align: center;
  font-size: 1.8rem;
  background-color: hsl(0, 0%, 80%);
  font-family: 'Playfair Display', serif;
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
const Tours = styled.img `
  width: 30px;
  height: 30px;
`

const StopInfo = styled.div `
  grid-row: 3/4;
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 4vh 4vh 24vh 6vh;
  grid-template-columns: 65vw 35vw;
`

const Background = styled.img `
  grid-row: 3/4;
  grid-column: 1/2;
  height: 38vh;
  width: 100vw;
  opacity: .4;
  position: relative;
  z-index: -1;
`

const StopTitle = styled.h1 `
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Playfair Display', serif;
`
const Address = styled.h2 `
  grid-row: 2/3;
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: .8rem;
`
const MoreInfo = styled.a `
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: .9rem;
  text-decoration: none;
  color: navy;
`

const Description = styled.p `
  grid-row: 3/4;
  grid-column: 1/3;
  height: 90%;
  width: 90%;
  background-color: white;
  opacity: .8;
  padding: .5rem;
  justify-self: center;
  align-self: start;
  text-align: center;
  font-size: .9rem;
`

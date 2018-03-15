import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../containers/header';
import Footer from '../containers/footer';
import DashboardBackground from '../assets/dashboard.jpg';

class Dashboard extends Component {

  permission= (event) => {
    this.props.savePermission(event.target.checked);
    this.props.getLocation();
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Title> Welcome to Denver Walking Tours </Title>
          <Button1 onClick={this.props.find}>Find A Tour</Button1>
          <Button2 onClick={this.props.about}>About</Button2>
          <UserRequest>
            <Label> Can Denver Walking Tours use your current location?</Label>
            <Check onClick={this.permission} type="checkbox" />
          </UserRequest>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Dashboard;

const Container = styled.div `
  height: 75vh;
  width: 100vw;
  background-color: hsl(0, 0%, 80%);
  background-image: url(${DashboardBackground });
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: grid;
  grid-template-rows: 17vh 20vh 20vh 18vh;
  grid-template-columns: 100vw;
`

const Title = styled.h1 `
  grid-row: 1/2;
  grid-template: 1/2;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 2.3rem;
  padding: .5rem 1rem;
  font-family: 'Playfair Display', serif;
`

const Button1 = styled.button `
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  width: 50%;
  height: 40%;
  border: solid black 1px;
  background-color: white;
  font-size: 1.3rem;
  color: black;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
`

const Button2 = styled.button `
  grid-column: 1/2;
  grid-row: 3/4;
  justify-self: center;
  align-self: center;
  width: 50%;
  height: 40%;
  border: solid black 1px;
  background-color: white;
  font-size: 1.3rem;
  color: black;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
`

const UserRequest = styled.form `
  grid-column: 1/2;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const Label = styled.label `
  font-size: 1rem;
  width:60%;
  text-align: center;
`
const Check = styled.input `
  width: 2rem;
  height: 2rem;
`

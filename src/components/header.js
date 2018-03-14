import React, { Component } from 'react';
import styled from 'styled-components';
import header from '../assets/header.jpg';

class Header extends Component {

  homeReset= () => {
    this.props.home();
    this.props.resetTour();
  }

  render() {
    return (
      <Container >
        <Title> Denver Walking Tours </Title>
        <Button onClick={this.homeReset}> Home </Button>
      </Container>
    )
  }
}

export default Header;

const Container = styled.div `
  height: 20vh;
  width: 100vw;
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 20vh;
`

const Title = styled.h1 `
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  text-align: left;
  margin-left: 1rem;
  font-size: 2rem;
  color: white;
  font-family: 'Playfair Display', serif;
`

const Button = styled.button `
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  width: 70%;
  height: 30%;
  border: solid black 1px;
  background-color: white;
  font-size: 1rem;
  color: black;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
`

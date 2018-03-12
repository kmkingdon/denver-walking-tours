import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../containers/header';
import Footer from '../containers/footer';

class Dashboard extends Component {


  render() {
    return (
      <div>
        <Header />
        <Container>
          <Title> Welcome to Denver Walking Tours </Title>
          <Button1 onClick={this.props.find}>Find A Tour</Button1>
          <Button2 onClick={this.props.add}>Add A Tour</Button2>
          <Button3>About</Button3>
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
  background-color: hsl(0 ,0%, 80%);
  display: grid;
  grid-template-rows: 10vh 20vh 20vh 20vh 5vh;
  grid-template-columns: 100vw;
`

const Title = styled.h1 `
  grid-row: 1/2;
  grid-template: 1/2;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.5rem;
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
`

const Button3 = styled.button `
  grid-column: 1/2;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
  width: 50%;
  height: 40%;
  border: solid black 1px;
  background-color: white;
  font-size: 1.3rem;
  color: black;
  border-radius: 10px;
`

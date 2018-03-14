import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../containers/header';
import Footer from '../containers/footer';

class Auth extends Component {


  render() {
    return (
      <div>
        <Header />
        <Container>
          <Button onClick={this.props.login}>Login</Button>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Auth;

const Container = styled.div `
  height: 75vh;
  width: 100vw;
  background-color: hsl(0 ,0%, 80%);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button `
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  width: 50%;
  height: 10%;
  border: solid black 1px;
  background-color: white;
  font-size: 1rem;
  color: black;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
`

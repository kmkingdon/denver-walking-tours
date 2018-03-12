import React, { Component } from 'react';
import styled from 'styled-components';
import footer from '../assets/footer.png';

class Footer extends Component {

  render() {
    return (
      <Container >
        <Span>Kmkingdon Productions 2018</Span>
      </Container>
    )
  }
}

export default Footer;

const Container = styled.div `
  box-sizing: border-box;
  height: 5vh;
  width: 100vw;
  background-color: hsl(0 ,0%, 80%);
  background-image: url(${footer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: solid hsl(0 ,0%, 20%) 5px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`

const Span = styled.span `
  font-size: .5rem;
  margin-left: 1rem;
`

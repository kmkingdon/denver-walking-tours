import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../containers/header';
import Footer from '../containers/footer';
import DashboardBackground from '../assets/dashboard.jpg';
import architecture from '../assets/architecture.png';
import drinks from '../assets/drinks.png';
import history from '../assets/history.png';
import running from '../assets/running.png';


class About extends Component {

    render() {
      return (
        <div>
          <Header />
          <Container>
            <Title> About Denver Walking Tours </Title>
            <Explanation>
              <Text> 1. Pick a tour </Text>
              <Text> 2. Follow along </Text>
              <Text> 3. Enjoy </Text>
            </Explanation>
            <KeyContainer>
              <Drinks src={drinks}/>
              <DrinksKey> Drinks and Food </DrinksKey>
              <History src={history}/>
              <HistoryKey> Culture and History</HistoryKey>
              <Architecture src={architecture}/>
              <ArchitectureKey> Architecture </ArchitectureKey>
              <Running src={running}/>
              <RunningKey> Running Tours </RunningKey>
            </KeyContainer>
          </Container>
          <Footer />
        </div>
      )
    }
  }

export default About;

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

  const Explanation = styled.div `
    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    background-color: white;
    height: 20vh;
    width: 80vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `

  const Text = styled.h2 `
    font-size: 1.7rem;
    margin: .5rem 0rem;
    color: hsl(0, 0%, 70%);
  `

  const KeyContainer = styled.div `
    grid-row: 3/4;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    background-color: white;
    height: 20vh;
    width: 80vw;
    display: grid;
    grid-template-rows: 10vh 10vh ;
    grid-template-columns: 10vw 30vw 10vw 30vw;
  `

  const Drinks = styled.img `
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    width: 40px;
    height: 40px;
  `
  const DrinksKey = styled.h2`
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    font-size: 1rem;
  `
  const History = styled.img `
    grid-row: 1/2;
    grid-column: 3/4;
    justify-self: center;
    align-self: center;
    width: 40px;
    height: 40px;
  `
  const HistoryKey = styled.h2`
    grid-row: 1/2;
    grid-column: 4/5;
    justify-self: center;
    align-self: center;
    text-align: center;
    font-size: 1rem;
  `

  const Architecture = styled.img `
    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    width: 40px;
    height: 40px;
  `
  const ArchitectureKey = styled.h2`
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    font-size: 1rem;
  `
  const Running = styled.img `
    grid-row: 2/3;
    grid-column: 3/4;
    justify-self: center;
    align-self: center;
    width: 40px;
    height: 40px;
  `
  const RunningKey = styled.h2`
    grid-row: 2/3;
    grid-column: 4/5;
    justify-self: center;
    align-self: center;
    font-size: 1rem;
  `

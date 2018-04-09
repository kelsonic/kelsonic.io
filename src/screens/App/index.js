// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
// Externals
import Stars from '../../components/Stars';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>Kelsonic</HeaderText>
        <Stars movementRate={1} />
        <Stars movementRate={1.5} />
        <Stars movementRate={2} />
      </Wrapper>
    );
  }
}

const HeaderText = styled.h1`
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  color: #ffffff;
  z-index: 1;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

export default App;

// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
// Externals
import Particles from '../../components/Particles';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Particles />
        <HeaderText>Kelsonic</HeaderText>
      </Wrapper>
    );
  }
}

const HeaderText = styled.h1`
  color: #ffffff;
  z-index: 1;
`;

const Wrapper = styled.div`
  align-items: center;
  background-image: linear-gradient(135deg, #444 0%, #333 25%, #222 50%, #111 75%, #000 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

export default App;

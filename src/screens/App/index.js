// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
// Externals
import gitHub from '../../assets/images/github.svg';
import linkedIn from '../../assets/images/linkedin.svg';
import Particles from '../../components/Particles';


class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <Particles max={25} />
        <SectionOne>
          <HeaderText>Kelson Adams</HeaderText>
          <HeaderSubtext>Full-Stack JavaScript Engineer</HeaderSubtext>
          <HeaderSubtext>Specialized in React.js</HeaderSubtext>
          <Logos>
            <LogoLink href="https://github.com/kelsonic"><Logo alt="github" src={gitHub} /></LogoLink>
            <LogoLink href="https://www.linkedin.com/in/kelsonic"><Logo alt="linkedin" src={linkedIn} /></LogoLink>
          </Logos>
        </SectionOne>
        <SectionTwo>
          <Planet>

          </Planet>
        </SectionTwo>
      </Wrapper>
    );
  }
}

const HeaderText = styled.h1`
  color: #ffffff;
  margin: 0 0 20px;
  z-index: 1;
`;

const HeaderSubtext = styled.p`
  color: #eaeaea;
  z-index: 1;
`;

const Logos = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  width: 100px;
  z-index: 1;
`;

const LogoLink = styled.a``;

const Logo = styled.img`
  height: 35px;
  width: 35px;
`;

const Planet = styled.div`
  background: #005e92;
  border-radius: 100%;
  height: 250px;
  top: -50px;
  position: relative;
  width: 150%;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SectionOne = Section.extend`
  height: 100vh;
`;

const SectionTwo = Section.extend`
  background: linear-gradient(0deg, #28698c 30%, #1d4a63 100%);
  justify-content: flex-start;
  height: 100vh;
`;

const Wrapper = styled.div`
  background: linear-gradient(0deg, #28698c 30%, #000 100%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

export default App;

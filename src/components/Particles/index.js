// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import concat from 'lodash/concat';
import map from 'lodash/map';
import random from 'lodash/random';
import filter from 'lodash/filter';
import times from 'lodash/times';
// Externals
import Particle from '../Particle';


class Particles extends Component {
  static propTypes = {
    maxParticles: PropTypes.number,
  };

  static defaultProps = {
    maxParticles: 50,
  };

  constructor(props) {
    super(props);
    const maxPositionY = window.innerHeight || 500;
    this.state = {
      maxPositionY,
      particles: [],
      particlesReadyForRemoval: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.emitParticleLine, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  emitParticleLine = () => {
    const { particles } = this.state;
    if (particles.length >= this.props.maxParticles) {
      return;
    }

    times(random(0, 3), () => {
      particles.push({
        id: uuidv4(),
        positionX: random(1, 100),
      });
    });
    this.setState({ particles });
  }

  removeParticle = (id) => {
    const { particles } = this.state;
    const trimmedParticles = filter(this.state.particles, (particle) => particle.id !== id);
    this.setState({ particles: trimmedParticles });
  }

  render() {
    const { maxPositionY, particles } = this.state;

    return (
      <Wrapper>
        {map(particles, ({ id, positionX }) => (
          <Particle
            key={id}
            id={id}
            positionX={positionX}
            maxPositionY={maxPositionY}
            removeSelfFromDOM={this.removeParticle}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  right: 0;
  bgPositionY: 0;
  width: 100%;
  height: 100vh;
`;

export default Particles;

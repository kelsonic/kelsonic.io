// Depenencies
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import random from 'lodash/random';


const Star = ({ positionX, positionY, sizeMultiplier }) => (
  <Wrapper sizeMultiplier={sizeMultiplier} style={{ left: `${positionX}%`, top: `${positionY}px` }} />
);

Star.propTypes = {
  sizeMultiplier: PropTypes.number,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
};

Star.defaultProps = {
  sizeMultiplier: 1,
};

const twinkle = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  ${() => random(0, 3) ? '' : `animation: ${twinkle} 1s infinite;`}
  background: #ffffff;
  border-radius: 100%;
  position: absolute;
  height: ${({ sizeMultiplier }) => sizeMultiplier}px;
  width: ${({ sizeMultiplier }) => sizeMultiplier}px;
`;

export default Star;

// Depenencies
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import random from 'lodash/random';
import sample from 'lodash/sample';


const colors = ['#ddd', '#ccc', '#eee', '#ff6060', '#45bb50', '#b7bb45'];

const Star = ({ positionX, positionY, sizeMultiplier }) => (
  <Wrapper
    color={sample(colors)}
    sizeMultiplier={sizeMultiplier}
    style={{ left: `${positionX}%`, top: `${positionY}px` }}
  />
);

Star.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  sizeMultiplier: PropTypes.number,
};

Star.defaultProps = {
  sizeMultiplier: 1,
};

const Wrapper = styled.div`
  background: ${({ color }) => color};
  border-radius: 100%;
  position: absolute;
  height: ${({ sizeMultiplier }) => sizeMultiplier}px;
  width: ${({ sizeMultiplier }) => sizeMultiplier}px;
`;

export default Star;

// Depenencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Star = ({ positionX, positionY }) => (
  <Wrapper style={{ left: `${positionX}%`, top: `${positionY}px` }} />
);

Star.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 100%;
  position: absolute;
  height: 2px;
  width: 2px;
`;

export default Star;

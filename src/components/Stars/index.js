// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import range from 'lodash/range';
import sampleSize from 'lodash/sampleSize';
import random from 'lodash/random';
// Externals
import Star from '../Star';


class Stars extends Component {
  static propTypes = {
    amount: PropTypes.number,
    movementRate: PropTypes.number.isRequired,
  };

  static defaultProps = {
    amount: 50,
  };

  constructor(props) {
    super(props);
    const maxPositionY = window.innerHeight || 300;
    const positionXs = sampleSize(range(1, 101), props.amount);

    this.state = {
      bgPositionY: -maxPositionY,
      maxPositionY,
      positionXs,
      stars: this.createStars(positionXs, maxPositionY),
    };
  }

  componentDidMount() {
    const maxPositionY = window.innerHeight;
    if (maxPositionY !== this.state.maxPositionY) {
      this.setState({
        maxPositionY,
        stars: this.createStars(this.state.positionXs, maxPositionY),
      });
    }
    this.moveBackground();
  }

  componentDidUpdate() {
    const { bgPositionY, maxPositionY } = this.state;
    if (bgPositionY > 0) {
      this.setState({ bgPositionY: -maxPositionY });
      return;
    }
    this.moveBackground();
  }

  createStars = (positionXs, maxPositionY) => (
    map(positionXs, (positionX, index) => ({
      id: `star-${index}`,
      positionX,
      positionY: random(-maxPositionY, maxPositionY),
    }))
  )

  moveBackground = () => {
    const { bgPositionY } = this.state;
    const { movementRate } = this.props;
    setTimeout(() => this.setState({ bgPositionY: bgPositionY + movementRate }), 0);
  }

  render() {
    const { bgPositionY, stars } = this.state;

    return (
      <Wrapper>
        {map(stars, ({ id, positionX, positionY }) => (
          <Star key={id} positionX={positionX} positionY={positionY + bgPositionY} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  bgPositionY: 0;
`;

export default Stars;

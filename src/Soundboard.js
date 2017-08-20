import React, { Component } from 'react';
import styled from 'styled-components';

const Sound = styled.div`
  font-size: 16px;
`

class Soundboard extends Component {
  render() {
    return (
      <div>
        <Sound>Hi</Sound>
      </div>
    );
  }
};

export default Soundboard;
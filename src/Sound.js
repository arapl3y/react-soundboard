import React, {Component} from "react";
import styled from "styled-components";

const SoundBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: salmon;
  border-radius: 25px;
`;

class Sound extends Component {
  render() {
    return (
      <SoundBox>
        {this.props.name}
      </SoundBox>
    );
  }
}

// const Sound = props =>
//   <SoundWrapper>
//     <p>
//       {props.url}
//     </p>
//   </SoundWrapper>;

export default Sound;

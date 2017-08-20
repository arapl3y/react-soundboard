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
 
  play = (e) => {
    const audio = e.target.querySelector('audio');
    if (audio) {
      audio.play();
    }
  }
 
  render() {
    return (
      <SoundBox onClick={this.play}>
        <span>{this.props.name}</span>
        <audio src={this.props.url}></audio>
      </SoundBox>
    );
  }
}

export default Sound;

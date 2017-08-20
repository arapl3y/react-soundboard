import React, {Component} from "react";
import styled from "styled-components";

const SoundBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: salmon;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Sound extends Component {
  play = () => {
    const audio = document.querySelector(`#${this.props.name}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  componentDidMount() {
    document.body.addEventListener("keypress", e => {
      if (e.key === this.props.letter) {
        this.play();
      }
    });
  }

  render() {
    return (
      <SoundBox
        tabindex="0"
        onClick={this.play}
        onKeyPressCapture={this.keyPress}
      >
        <span>
          {this.props.name}
        </span>
        <audio id={this.props.name} src={this.props.url} />
      </SoundBox>
    );
  }
}

export default Sound;

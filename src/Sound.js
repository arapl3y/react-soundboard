import React, { Component } from "react";
import styled from "styled-components";

const SoundBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: SpringGreen;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

class Sound extends Component {
  play = () => {
    const audio = document.querySelector(`#${this.props.name}`);
    if (audio) {
      audio.currentTime = this.props.delay;
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
        {this.props.name}
        <br />
        <br />
        ({this.props.letter})
        <audio id={this.props.name} src={this.props.url} />
      </SoundBox>
    );
  }
}

export default Sound;

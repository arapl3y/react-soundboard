import React, {Component} from "react";
import Sound from "./Sound";
import styled from "styled-components";

const SoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

class Soundboard extends Component {
  constructor() {
    super();
    this.state = {
      sounds: [
        {name: "Air Horn", url: "sounds/air-horn.mp3", letter: "q"},
        {name: "MAD DOG", url: "sounds/MAD-DOG.mp3", letter: "w"},
        {name: "Hihat", url: "sounds/hihat.wav", letter: "e"},
        {name: "Kick", url: "sounds/kick.wav", letter: "r"},
        {name: "Openhat", url: "sounds/openhat.wav", letter: "t"},
        {name: "Ride", url: "sounds/ride.wav", letter: "a"},
        {name: "Snare", url: "sounds/snare.wav", letter: "s"},
        {name: "Tink", url: "sounds/tink.wav", letter: "d"},
        {name: "Tom", url: "sounds/tom.wav", letter: "f"}
      ]
    };
  }

  render() {
    return (
      <SoundContainer>
        {this.state.sounds.map(s => {
          return (
            <Sound key={s.name} name={s.name} url={s.url} letter={s.letter} />
          );
        })}
      </SoundContainer>
    );
  }
}

export default Soundboard;

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
        {name: "Boom", url: "sounds/boom.wav"},
        {name: "Clap", url: "sounds/clap.wav"},
        {name: "Hihat", url: "sounds/hihat.wav"},
        {name: "Kick", url: "sounds/kick.wav"},
        {name: "Openhat", url: "sounds/openhat.wav"},
        {name: "Ride", url: "sounds/ride.wav"},
        {name: "Snare", url: "sounds/snare.wav"},
        {name: "Tink", url: "sounds/tink.wav"},
        {name: "Tom", url: "sounds/tom.wav"}
      ]
    };
  }

  render() {
    return (
      <SoundContainer>
        {this.state.sounds.map(s => {
          return <Sound key={s.name} name={s.name} url={s.url} />;
        })}
      </SoundContainer>
    );
  }
}

export default Soundboard;

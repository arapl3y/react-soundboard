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
  font-family: 'Menlo'
`;

const Heading = styled.h1`
  width: 100%;
  margin-left: 20px;
`

class Soundboard extends Component {
  constructor() {
    super();
    this.state = {
      sounds: [
        {name: "Air-Horn", url: "sounds/airhorn.mp3", letter: "q"},
        {name: "MAD-DOG", url: "sounds/MAD-DOG.mp3", letter: "w"},
        {name: "Badum-Ttss", url: "sounds/badumttss.mp3", letter: "e"},
        {name: "Clapping", url: "sounds/clapping.mp3", letter: "r"},
        {name: "Fetch", url: "sounds/Fetch.mp3", letter: "t"},
        {name: "Bill-React", url: "sounds/Bill-react.mp3", letter: "y"},
        {name: "Yeah-Boy", url: "sounds/yeah-boy.mp3", letter: "u"},
        {name: "Oi-Oi", url: "sounds/Oi Oi.m4a", letter: "i"},
        {name: "Pickle-Rick", url: "sounds/pickle-rick.mp3", letter: "o"},
        {name: "Paris-thankyou", url: "sounds/paris-thankyou.mp3", letter: "p"},
        {name: "Peter-Laugh", url: "sounds/Peter-Laugh.mp3", letter: "a"},
        {name: "Dude", url: "sounds/dude.mp3", letter: "s"},
        {name: "Seth-Laugh", url: "sounds/Seth-Laugh.mp3", letter: "d"},
        {name: "The-Market", url: "sounds/The Market.m4a", letter: "f"},
        {name: "Tiny-Rick", url: "sounds/Tiny Rick.mp3", letter: "g"},
        {name: "YASSSSS", url: "sounds/YAS.m4a", letter: "h"},
        {name: "Wow", url: "sounds/Wow.mp3", letter: "j"},
      ]
    };
  }

  render() {
    return (
      <SoundContainer>
        <Heading>Praises Soundboard <span role="img" aria-label="emoji">🎉</span></Heading>
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

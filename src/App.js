import React, { Component } from 'react';
import styled from 'styled-components';

const HeroHeadline = styled.h1`
  font-size: 3em;
  font-weight: 700;
  max-width: 750px;
`;
const HeroText = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  max-width: 750px;
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <HeroHeadline>
              Hey there, my name is Dominic, developer, I love music and video games.
            </HeroHeadline>
            <HeroText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </HeroText>
            <a href="mailto:hi@dominickolbe.dk">hi@dominickolbe.dk</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

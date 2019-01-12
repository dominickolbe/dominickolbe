import React, { Component } from 'react';
import styled from 'styled-components';
import data from './data.json';

const HeroHeadline = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: .03em;
  line-height: 1.2;
  max-width: 750px;
`;
const HeroText = styled.p`
  font-size: 1.5em;
  max-width: 660px;
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <HeroHeadline dangerouslySetInnerHTML={{ __html: data.heroheadline }} />
            <HeroText dangerouslySetInnerHTML={{ __html: data.herosubline }} />
            <a href="mailto:hi@dominickolbe.dk">hi@dominickolbe.dk</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

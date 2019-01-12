import React, { Component } from 'react';
import styled from 'styled-components';
import content from './content.json';

const Container = styled.div`
  padding: 3em;
`;

const HeroHeadline = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: .03rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 680px;
`;

const HeroText = styled.p`
  font-size: 1.5em;
  max-width: 630px;
  margin-bottom: 1.5rem;
`;

const Email = styled.a`
  font-size: 1.5em;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <HeroHeadline dangerouslySetInnerHTML={{ __html: content.heroheadline }} />
        <HeroText dangerouslySetInnerHTML={{ __html: content.herosubline }} />
        <Email href={content.email}>{content.email}</Email>
      </Container>
    );
  }
}

export default App;

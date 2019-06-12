import React from "react";
import styled from "styled-components";
import content from "./content.json";

const Container = styled.div`
  padding: 3em;

  a {
    color: inherit;
    display: inline-flex;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &:after,
    &:before {
      content: "";
      background: #1d1d1d;
      bottom: 0;
      height: 3px;
      left: 0;
      position: absolute;
      width: 100%;
    }
    &:before {
      transform: translate3d(-100%, 0, 0);
      transition: all 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
      transition-delay: 0ms;
    }
    &:after {
      transform: translate3d(0%, 0, 0);
      transition: all 230ms cubic-bezier(0.65, 0.05, 0.36, 1);
      transition-delay: 100ms;
    }
    &:hover {
      &:before {
        transform: translate3d(-25%, 0, 0);
        transition-delay: 100ms;
      }
      &:after {
        transform: translate3d(100%, 0, 0);
        transition-delay: 0ms;
      }
    }
  }
`;

const HeroHeadline = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 0.03rem;
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

const App = () => (
  <Container>
    <HeroHeadline dangerouslySetInnerHTML={{ __html: content.heroheadline }} />
    <HeroText dangerouslySetInnerHTML={{ __html: content.herosubline }} />
    <Email href={`mailto:${content.email}?subject=Hello.`}>
      {content.email}
    </Email>
  </Container>
);

export default App;

import React, { Component } from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import media from "styled-media-query";

const Image1 = "https://annaportfoliopictures.s3.amazonaws.com/BlackTech4.jpg";

const Container = styled.div`
  grid-area: 2 / 2 / 3 / -1;
  display: grid;
  grid: 1fr 4fr / 1fr;
`;

const ParallaxContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  z-index: -1;
`;

const TitleContainer = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h3`
  font-family: "Harrington";
  font-size: 4em;
  z-index: 1;
  color: blue;
  text-shadow: 1px 1px 3px purple;
  ${media.lessThan("medium")`
  font-size: 2.5em;
  `}

  ${media.between("medium", "large")`
  font-size: 3.5em;
  `}
`;

const AboutContainer = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  display: flex;
  align-items: center;
  justify-self: center;
  width: 80%;
`;

const AboutText = styled(Title)`
  text-shadow: 0px 0px blue;
  font-size: 1.7em;
  font-family: "Papyrus";
  text-align: center;
  line-height: 50px;
  color: white;
  text-shadow: 1px 1px blue;
  ${media.lessThan("medium")`
  font-size: 1.1em;
  `}

  ${media.between("medium", "large")`
  font-size: 1.5em;

  `}
`;

class About extends Component {
  render() {
    return (
      <Container id="About">
        <TitleContainer>
          <Title>Anna Johnson</Title>
        </TitleContainer>
        <AboutContainer>
          <AboutText>
            I am a UI / UX Designer & Content Creator, designing web & mobile
            apps while creating music and visual imagery. Adobe Photoshop & XD
            are used to visually design the front end components that I build
            out using JSX, CSS, & React. I enjoy taking pictures to use as
            source material for future creations and orchestrating music for
            them with Ableton Live
          </AboutText>
        </AboutContainer>
        <ParallaxContainer>
          <Parallax bgImage={Image1} strength={550}>
            <div style={{ height: 900 }} />
          </Parallax>
        </ParallaxContainer>
      </Container>
    );
  }
}

export default About;

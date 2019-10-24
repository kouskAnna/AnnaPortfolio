import React, { Component } from "react";
import { Parallax } from "react-parallax";
// import Image1 from "../images/BlackTech4.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
// import { purple } from "../utilities/Colors";
import styled from "styled-components";
import media from "styled-media-query";

// import { Title } from "../elements";

const Image1 = "https://annaportfoliopictures.s3.amazonaws.com/BlackTech4.jpg";

const Container = styled.div`
  grid-area: 2 / 2 / 3 / -1;
  /* background-image: url("https://annaportfoliopictures.s3.amazonaws.com/BlackTech4.jpg"); */
  display: grid;
  grid: 1fr 4fr / 1fr;
  /* width: 100%; */
  /* height: 100%; */
  /* border: dashed 1px red; */
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
  /* border: dashed 1px yellow; */
  padding-top: 20px;
  padding-bottom: 20px;
  /* justify-self: center; */
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  `}
  
  ${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  /* font-size: 2em; */

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

export const Title = styled.h3`
  font-family: "Harrington";
  font-size: 4em;
  z-index: 1;
  color: blue;
  text-shadow: 1px 1px 3px turquoise;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  font-size: 3.5em;
  `}
  
  ${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  font-size: 3.5em;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const AboutContainer = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  display: flex;
  align-items: center;
  justify-self: center;
  width: 80%;
  border: dashed 1px red;
`;

const AboutText = styled(Title)`
  text-shadow: 0px 0px blue;
  font-size: 1.7em;
  text-align: center;
  line-height: 50px;
  color: white;
  text-shadow: 1px 1px blue;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  font-size: 1em;
  `}
  
  ${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  font-size: 1.5em;

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
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

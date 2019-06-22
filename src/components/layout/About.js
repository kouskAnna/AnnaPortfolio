import React, { Component } from "react";
import { Parallax } from "react-parallax";
// import Image1 from "../images/BlackTech4.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
// import { purple } from "../utilities/Colors";
import styled from "styled-components";
// import { Title } from "../elements";

const Image1 = "https://annaportfoliopictures.s3.amazonaws.com/BlackTech4.jpg";

const Container = styled.div`
  grid-area: 2 / 2 / 3 / -1;
  /* background-image: url("https://annaportfoliopictures.s3.amazonaws.com/BlackTech4.jpg"); */
  display: grid;
  grid: 1fr 1fr / 1fr;
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
  /* border: dashed 1px yellow; */
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  /* font-family: "Harrington"; */
  /* margin: 0 4em; */
  font-size: 3em;
  z-index: 1;
  color: white;
  text-shadow: 1px 1px blue;
  align-self: center;
  /* justify-self: center; */
  /* padding-top: 20px; */
`;

const AboutContainer = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  /* border: dashed 1px red; */
  width: 800px;
  display: flex;
  justify-self: center;
  align-self: center;
  padding-bottom: 180px;
`;

const AboutText = styled(Title)`
  text-shadow: 0px 0px blue;
  font-size: 1.2em;
  text-align: center;
  line-height: 50px;
  /* padding-top: 20px; */
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
            Here are a bunch of words explaining what I do for web design.
            Mostly I am making websites for awesome people that need them. I
            understand html, css, styled components, React, Adobe XD, Photoshop.
            Here are a bunch of words explaining what I do for web design.
            Mostly I am making websites for awesome people that need them. I
            understand html, css, styled components, React, Adobe XD, Photoshop.
          </AboutText>
        </AboutContainer>
        <ParallaxContainer>
          <Parallax bgImage={Image1} strength={500}>
            <div style={{ height: 900 }} />
          </Parallax>
        </ParallaxContainer>
      </Container>
    );
  }
}

export default About;

import React, { Component } from "react";
import styled from "styled-components";
import Image1 from "../images/MoriaCave.jpg";
import Image2 from "../images/KousKHomePage.png";
import Image3 from "../images/Truth.jpg";

const ProjectsContainer = styled.div`
  grid-area: 3 / 2 / 4 / -1;
  display: grid;
  grid: 100px 1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
  background-color: black;
  grid-gap: 60px 20px;
  border: dashed 2px blue;
`;

const TitleContainer = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  /* font-family: "Harrington"; */
  /* margin: 0 4em; */
  font-size: 4em;
  z-index: 1;
  color: white;
  text-shadow: 1px 1px blue;
  align-self: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TopCard = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  border: solid 1px red;
  /* margin-left: 10%; */
  /* margin-right: 10%; */
`;

const Card2 = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  border: solid 1px red;
  /* background: yellow; */
  /* margin-left: 10%; */
`;
const Card3 = styled.div`
  grid-area: 3 / 3 / 4 / -1;
  border: solid 1px green;
  /* background: yellow; */
  /* margin-right: 10%; */
`;

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <TitleContainer>
          <Title>Projects</Title>
        </TitleContainer>
        <TopCard>{/* <Image src={Image1} /> */}</TopCard>
        <Card2>{/* <Image src={Image2} /> */}</Card2>
        <Card3>{/* <Image src={Image3} /> */}</Card3>
      </ProjectsContainer>
    );
  }
}

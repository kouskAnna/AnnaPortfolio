import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const VideoContainer = styled.div`
  grid-area: 1 / 2 / 2 / -1;
  display: grid;
  grid: 1fr 1fr 1fr / 2fr 1fr;
`;

const StyledVideo = styled.video`
  grid-area: 1 / 1 / -1 / -1;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TitleTextContainer = styled.div`
  grid-area: 2 / 2 / 3 / -1;
  /* border: dashed 1px yellow; */
  width: 400px;
  margin-right: 60px;
  display: grid;
  align-self: center;
  grid: 70px 70px 70px 70px / 1fr;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  `}
  
  ${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const TitleTextLine1 = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  justify-content: center;
`;
const TitleTextLine2 = styled(TitleTextLine1)`
  grid-area: 2 / 1 / 3 / -1;
`;
const TitleTextLine3 = styled(TitleTextLine1)`
  grid-area: 3 / 1 / 4 / -1;
`;
const TitleTextLine4 = styled(TitleTextLine1)`
  grid-area: 4 / 1 / 5 / -1;
`;

const TitleText = styled.h3`
  font-family: "Harrington";
  color: white;
  font-size: 2.8em;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 2.5em;

  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size: 2.5em;
    overflow: hidden;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const SeeMyWorkButton = styled.button`
  background: transparent;
  font-size: 1.5rem;
  font-family: Harrington;
  color: blue;
  text-align: center;
  padding: 5px 12px;
  border-radius: 10px;
  border: solid 1px blue;
  width: 200px;
  /* margin-top: 40px; */
`;

function BackgroundVideo2() {
  return (
    <VideoContainer id="Home">
      <TitleTextContainer>
        <TitleTextLine1>
          <TitleText>Hi,</TitleText>
        </TitleTextLine1>
        <TitleTextLine2>
          <TitleText>I'm Anna,</TitleText>
        </TitleTextLine2>
        <TitleTextLine3>
          <TitleText>UI/UX Designer</TitleText>
        </TitleTextLine3>
        <TitleTextLine4>
          <a href="#Projects">
            <SeeMyWorkButton>See My Work</SeeMyWorkButton>
          </a>
        </TitleTextLine4>
      </TitleTextContainer>
      <StyledVideo
        autoPlay
        loop
        muted
        src="https://kouskpublic.s3.us-east-2.amazonaws.com/HomeCodeNew.MOV"
      />
    </VideoContainer>
  );
}

export default BackgroundVideo2;

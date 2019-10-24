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
  margin-right: 60px;
  display: grid;
  align-self: center;
  grid: 70px 70px 100px 70px / 1fr;
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
  justify-content: center;
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
    font-size: 2.5em;

  `}

  ${media.between("medium", "large")`
    font-size: 2.5em;
    overflow: hidden;
  `}
`;

const SeeMyWorkButton = styled.button`
  background: #010001;
  font-size: 1.8rem;
  font-family: Harrington;
  color: blue;
  text-shadow: 1px 1px 1px purple;
  text-align: center;
  padding: 5px 12px;
  border-radius: 10px;
  border: solid 4px blue;
  width: 200px;
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

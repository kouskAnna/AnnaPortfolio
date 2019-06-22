import React, { Component } from "react";
import styled from "styled-components";
import Video from "./BackgroundVideo2";
import { FaUserAlt, FaHome, FaProjectDiagram } from "react-icons/fa";
import About from "./About";
import ImageGrid from "./Projects2";
import ScrollspyNav from "react-scrollspy-nav";

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 100vh 700px 3400px / 75px 1fr;
`;

const NavContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  border: dashed 1px red;
  background-color: black;
  display: flex;
  align-content: center;
  justify-content: center;
  /* grid: 100vh / 1fr; */
  height: 100%;
  width: 75px;
  z-index: 1;
  position: fixed;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const IconButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  /* border: dashed 1px green; */
`;

class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <NavContainer>
          <ScrollspyNav
            scrollTargetIds={["Home", "About", "Projects"]}
            activeNavClass="is-active"
            scrollDuration="600"
          >
            <IconButtonContainer>
              <IconButton>
                <a href="#Home">
                  <FaHome style={{ color: "blue" }} size="3em" />
                </a>
              </IconButton>
              <IconButton>
                <a href="#About">
                  <FaUserAlt style={{ color: "blue" }} size="3em" />
                </a>
              </IconButton>
              <IconButton>
                <a href="#Projects">
                  <FaProjectDiagram style={{ color: "blue" }} size="3em" />
                </a>
              </IconButton>
            </IconButtonContainer>
          </ScrollspyNav>
        </NavContainer>
        <Video />
        <About />
        <ImageGrid />
      </Grid>
    );
  }
}

export default GridLayout;

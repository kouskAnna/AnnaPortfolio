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
  grid-template: 100vh 700px 3400px / 80px 1fr;
`;

const NavContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  /* border: dashed 1px red; */
  background-color: black;
  display: grid;
  grid: 100vh / 1fr;
  z-index: 1;
  position: fixed;
  padding-left: 10px;
  padding-right: 14px;
`;

const NavContainerMiddle = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* border: dashed 1px green; */
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  /* text-decoration: none;
  &:hover {
    text-shadow: 1px 1px 3px purple;
  } */
`;

class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <NavContainer>
          <NavContainerMiddle>
            <ScrollspyNav
              scrollTargetIds={["Home", "About", "Projects"]}
              activeNavClass="is-active"
              scrollDuration="600"
            >
              <li>
                <IconButton>
                  <a href="#Home">
                    <FaHome style={{ color: "blue" }} size="3em" />
                  </a>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <a href="#About">
                    <FaUserAlt style={{ color: "blue" }} size="3em" />
                  </a>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <a href="#Projects">
                    <FaProjectDiagram style={{ color: "blue" }} size="3em" />
                  </a>
                </IconButton>
              </li>
            </ScrollspyNav>
          </NavContainerMiddle>
        </NavContainer>
        <Video />
        <About />
        <ImageGrid />
      </Grid>
    );
  }
}

export default GridLayout;

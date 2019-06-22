import React, { Component } from "react";
import styled from "styled-components";
import Video from "./BackgroundVideo2";
import { FaUserAlt, FaHome, FaProjectDiagram } from "react-icons/fa";
import About from "./About";
import Nav from "./Nav";
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
  padding-left: 24px;
  padding-right: 24px;
`;

const NavContainerMiddle = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: dashed 1px green;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  z-index: 2;
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
        {/* <NavContainer>
          <NavContainerMiddle>
            <ScrollspyNav
              scrollTargetIds={["About", "Releases", "Contact"]}
              activeNavClass="is-active"
              scrollDuration="600"
            >
              <Link href="#About">
                <IconButton>
                  <FaHome style={{ color: "blue" }} size="3em" />
                </IconButton>
              </Link>
              <IconButton>
                <FaUserAlt style={{ color: "blue" }} size="3em" />
              </IconButton>
              <IconButton>
                <FaProjectDiagram style={{ color: "blue" }} size="3em" />
              </IconButton>
            </ScrollspyNav>
          </NavContainerMiddle>
        </NavContainer> */}
        <Nav />
        <Video />
        <About id="About" />
        <ImageGrid />
      </Grid>
    );
  }
}

export default GridLayout;

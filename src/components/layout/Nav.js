import React, { Component } from "react";
import styled from "styled-components";
import { FaUserAlt, FaHome, FaProjectDiagram } from "react-icons/fa";
import ScrollspyNav from "react-scrollspy-nav";

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
  /* border: dashed 1px green; */
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

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <NavContainerMiddle>
          <IconButton>
            <FaHome style={{ color: "blue" }} size="3em" />
          </IconButton>
          <IconButton>
            <FaUserAlt style={{ color: "blue" }} size="3em" />
          </IconButton>

          <IconButton>
            <FaProjectDiagram style={{ color: "blue" }} size="3em" />
          </IconButton>
        </NavContainerMiddle>
      </NavContainer>
    );
  }
}

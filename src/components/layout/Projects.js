import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const GalleryContainer = styled.div`
  grid-area: 3 / 2 / 4 / -1;
  background-color: black;
`;

export default class ImageGrid extends Component {
  click = e => {
    console.log("I got clicked", e.target.alt);
    const varb = e.target.alt;
    window.location.href = varb;
  };

  render() {
    return (
      <GalleryContainer id="Projects">
        <Gallery photos={photos} margin={4} onClick={this.click} />;
      </GalleryContainer>
    );
  }
}

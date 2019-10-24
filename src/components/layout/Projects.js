import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const GalleryContainer = styled.div`
  grid-area: 3 / 2 / 4 / -1;
  background-color: black;
  /* border: dashed 1px yellow; */
  /* padding-left: 50px; */
  /* padding-right: 50px; */
`;

export default class ImageGrid extends Component {
  click = e => {
    console.log("I got clicked", e.target.alt);
    const varb = e.target.alt;
    // console.log("varb", varb);
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

// const photos = [
//   {
//     src: "https://annaportfoliopictures.s3.amazonaws.com/MoriaCave.jpg",
//     width: 4927,
//     height: 1500
//   },
//     {
//       src: "https://annaportfoliopictures.s3.amazonaws.com/KousKHomePage.png",
//       width: 2,
//       height: 1
//     },
//   {
//     src: "https://annaportfoliopictures.s3.amazonaws.com/Truth.jpg",
//     width: 1,
//     height: 1
//   },
//     {
//       src:
//         "https://annaportfoliopictures.s3.amazonaws.com/TunnelVisions_final.jpg",
//       width: 1,
//       height: 1
//     },

//     {
//       src: "https://annaportfoliopictures.s3.amazonaws.com/EsylusHomePage.png",
//       width: 4,
//       height: 2
//     },

//     {
//       src: "https://annaportfoliopictures.s3.amazonaws.com/LetThemGrow.png",
//       width: 4,
//       height: 2
//     },
//   {
//     src:
//       "https://annaportfoliopictures.s3.amazonaws.com/Spheres_logo_forest.jpg",
//     width: 1,
//     height: 1
//   },

//   {
//     src:
//       "https://annaportfoliopictures.s3.amazonaws.com/waterbottle_holder_forest.jpg",
//     width: 1,
//     height: 1
//   },
//     {
//       src: "https://annaportfoliopictures.s3.amazonaws.com/JonnyRingo.png",
//       width: 4,
//       height: 2
//     },
//   {
//     src: "https://annaportfoliopictures.s3.amazonaws.com/FreeAssange.png",
//     width: 4,
//     height: 2
//   },
//   {
//     src: "https://annaportfoliopictures.s3.amazonaws.com/TrueMoon.jpg",
//     width: 1.1,
//     height: 1
//   }
// ];

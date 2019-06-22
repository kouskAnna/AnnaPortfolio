import React, { Component } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const GalleryContainer = styled.div`
  grid-area: 3 / 2 / -1 / -1;
  background-color: black;
  padding-left: 50px;
  padding-right: 50px;
`;

export default class ImageGrid extends Component {
  render() {
    return (
      <GalleryContainer id="Projects">
        <Gallery photos={photos} margin={30} />;
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

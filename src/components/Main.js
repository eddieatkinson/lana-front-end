import React from "react";
import styled, { css } from "styled-components";

import { top, topMobile, logo } from "../assets";
import Lana from "./Lana";
import About from "./About";
import Testimonials from "./Testimonials";
import Barre from "./Barre";
import PopPilates from "./PopPilates";
import CardioYoga from "./CardioYoga";
import ButiYoga from "./ButiYoga";
import Paddleboard from "./Paddleboard";
import { largeBreakpoint, mediumBreakpoint } from "../utilities";

export default () => {
  return (
    <MainWrapper>
      <Heading src={logo} />
      <MobileImage src={topMobile} />
      <DesktopImage src={top} />
      <Lana />
      <About />
      <Testimonials />
      <Barre />
      <PopPilates />
      <CardioYoga />
      <ButiYoga />
      <Paddleboard />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  font-family: Main;
  width: 75vw;
  margin: auto;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    width: 90vw;
  }
`;

const Heading = styled.img`
  display: none;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    display: block;
  }
`;

const ImageCss = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: ${largeBreakpoint}px) {
    margin-top: 5rem;
  }
`;

const MobileImage = styled.img`
  ${ImageCss}
  display: none;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    display: block;
  }
`;

const DesktopImage = styled.img`
  ${ImageCss}
  @media screen and (max-width: ${mediumBreakpoint}px) {
    display: none;
  }
`;

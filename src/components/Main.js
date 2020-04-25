import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { top } from "../assets";
import Lana from "./Lana";
import About from "./About";
import Testimonials from "./Testimonials";
import Barre from "./Barre";
import PopPilates from "./PopPilates";
import CardioYoga from "./CardioYoga";
import ButiYoga from "./ButiYoga";
import Paddleboard from "./Paddleboard";

export default () => {
  return (
    <MainWrapper>
      <Image src={top} />
      <Lana />
      <About />
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="barre">
        <Barre />
      </Element>
      <Element name="popPilates">
        <PopPilates />
      </Element>
      <Element name="cardioYoga">
        <CardioYoga />
      </Element>
      <Element name="butiYoga">
        <ButiYoga />
      </Element>
      <Element name="paddleboard">
        <Paddleboard />
      </Element>
    </MainWrapper>
  );
};

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 2rem;
`;

const MainWrapper = styled.div`
  font-family: Nunito;
  width: 75vw;
  margin: auto;
`;

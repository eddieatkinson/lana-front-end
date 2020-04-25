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
      <Testimonials />
      <Barre />
      <PopPilates />
      <CardioYoga />
      <ButiYoga />
      <Paddleboard />
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

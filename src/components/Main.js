import React from "react";
import { Element } from "react-scroll";
import Lana from "./Lana";
import About from "./About";
import Testimonials from "./Testimonials";
import Barre from "./Barre";
import PopPilates from "./PopPilates";
import CardioYoga from "./CardioYoga";
import ButiYoga from "./ButiYoga";
import Paddleboard from "./Paddleboard";

function Main() {
  return (
    <div>
      <Element name="lana">
        <Lana />
      </Element>
      <Element name="about">
        <About />
      </Element>
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
    </div>
  );
}

export default Main;

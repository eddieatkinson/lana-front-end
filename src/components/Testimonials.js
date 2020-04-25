import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { teal, mediumBreakpoint, largeBreakpoint } from "../utilities";

export default () => {
  return (
    <Element name="testimonials">
      <Header>What the Babes Say</Header>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={window.innerWidth > largeBreakpoint ? 20 : 40}
        totalSlides={5}
        isPlaying
        interval={3000}
      >
        <Slider>
          <Slide index={0}>
            <SlideContent>
              <SlideQuote>
                Deserunt ut laborum exercitation et eiusmod minim excepteur enim
                deserunt aute.
              </SlideQuote>
              <SlideCitation>-Eddie</SlideCitation>
            </SlideContent>
          </Slide>
          <Slide index={1}>
            <SlideContent>
              <SlideQuote>
                Reprehenderit officia exercitation id tempor tempor.
              </SlideQuote>
              <SlideCitation>-Crystal</SlideCitation>
            </SlideContent>
          </Slide>
          <Slide index={2}>
            <SlideContent>
              <SlideQuote>Commodo pariatur irure mollit minim.</SlideQuote>
              <SlideCitation>-Flynn Rider</SlideCitation>
            </SlideContent>
          </Slide>
          <Slide index={3}>
            <SlideContent>
              <SlideQuote>
                Ullamco voluptate sunt nostrud magna ullamco consequat nostrud
                exercitation in officia consequat non.
              </SlideQuote>
              <SlideCitation>-Anonomous</SlideCitation>
            </SlideContent>
          </Slide>
          <Slide index={4}>
            <SlideContent>
              <SlideQuote>
                Adipisicing cupidatat voluptate nulla Lorem consequat est enim
                est ipsum ex exercitation non ea Lorem.
              </SlideQuote>
              <SlideCitation>-You know</SlideCitation>
            </SlideContent>
          </Slide>
        </Slider>
      </CarouselProvider>
    </Element>
  );
};
const Header = styled.h1`
  font-family: DancingScript;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    font-size: 2rem;
  }
`;
const SlideContent = styled.div`
  text-align: center;
`;
const SlideQuote = styled.h1`
  color: #${teal};
  font-family: Nunito;
  font-size: 2.3rem;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    font-size: 1.2rem;
  }
`;
const SlideCitation = styled.p`
  font-family: DancingScript;
  font-size: 2rem;
  @media screen and (max-width: ${mediumBreakpoint}px) {
    font-size: 1.1rem;
  }
`;

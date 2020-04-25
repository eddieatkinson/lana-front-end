import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { pageOffset, teal } from "./utilities";

export default () => {
  const [isArrowVisible, setIsArrorVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", toggleArrowVisibility);
  }, []);
  function toggleArrowVisibility() {
    const shouldBeVisible = window.pageYOffset > pageOffset ? true : false;
    setIsArrorVisible(shouldBeVisible);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function renderArrow() {
    return (
      <ArrowWrapper onClick={scrollToTop}>
        <FaAngleUp size={"3rem"} color={`${teal}`} />
      </ArrowWrapper>
    );
  }
  return (
    <div>
      {isArrowVisible && renderArrow()}
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

const ArrowWrapper = styled.div`
  background-color: #ffffffdd;
  border-radius: 50%;
  margin: 1rem;
  position: fixed;
  bottom: 0;
  right: 0;
`;

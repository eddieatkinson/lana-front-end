import React from "react";
import styled from "styled-components";
import { teal } from "../utilities";

function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Breathe Pilates and Barre
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #${teal};
  padding: 5rem;
  color: white;
  text-align: center;
  font-family: Nunito;
  font-size: 1rem;
`;

export default Footer;

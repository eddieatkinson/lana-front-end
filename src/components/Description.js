import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { largeBreakpoint } from "../utilities";

export default (props) => {
  const { children, name, src, textPlacement: order, title } = props;
  return (
    <Element style={{ margin: "10rem 0" }} name={name}>
      <Header>{title}</Header>
      <Content>
        <Text order={order}>{children}</Text>
        {src && (
          <ImageWrapper>
            <Image src={src} alt={title}></Image>
          </ImageWrapper>
        )}
      </Content>
    </Element>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${largeBreakpoint}px) {
    flex-direction: column;
    margin: 3rem 0;
  }
`;
const Header = styled.h1`
  font-family: DancingScript;
  text-align: center;
  font-size: 3rem;
`;
const Text = styled.div`
  margin: 0 1rem;
  flex: 4;
  font-size: 1.5rem;
  order: ${(props) => props.order};
  @media screen and (max-width: ${largeBreakpoint}px) {
    font-size: 1rem;
    order: 1;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const ImageWrapper = styled.div`
  flex: 3;
`;

import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { largeBreakpoint } from "../utilities";

export default (props) => {
  const { children, name, src, textPlacement: order } = props;
  return (
    <Element name={name}>
      <Content>
        <Text style={{ order }}>{children}</Text>
        {src && (
          <ImageWrapper>
            <Image src={src} alt="test"></Image>
          </ImageWrapper>
        )}
      </Content>
    </Element>
  );
};

const Content = styled.div`
  display: flex;
  @media screen and (max-width: ${largeBreakpoint}px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  flex: 4;
`;
const Image = styled.img`
  /* flex: 1; */
  /* object-fit: contain;*/
  max-width: 100%;
`;
const ImageWrapper = styled.div`
  flex: 3;
`;

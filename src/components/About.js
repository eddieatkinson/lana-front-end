import React from "react";

import Description from "./Description";
import { about } from "../assets";

export default () => {
  return (
    <Description title="About" name="about" src={about} textPlacement={1}>
      Ullamco est esse incididunt dolore est minim ex anim est id. Laborum
      officia esse exercitation ipsum eiusmod pariatur mollit pariatur magna
      anim aliqua. Proident magna do laboris cillum reprehenderit ipsum
      reprehenderit ea ad nostrud labore. Culpa cillum incididunt deserunt sint
      elit aliquip cupidatat dolore cupidatat. Ullamco officia et labore
      proident voluptate ut consequat eiusmod esse qui anim.
    </Description>
  );
};

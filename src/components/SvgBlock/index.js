import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  border-radius: 20px;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`);
  //console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;

import React, { useState } from "react";
import styled, { css } from "styled-components";
import { logo } from "../assets";
import HamburgerMenu from "react-hamburger-menu";
import { largeBreakpoint, teal } from "../utilities";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function hey() {
    console.log("Hi!");
  }

  function renderDesktopMenu() {
    return (
      <DesktopMenu>
        <MenuItem href="#">
          <Logo src={logo}></Logo>
        </MenuItem>
        <MenuItem onClick={hey}>Meet Lana</MenuItem>
        <MenuItem>Welcome to the Studio</MenuItem>
        <MenuItem>What the Babes Say</MenuItem>
      </DesktopMenu>
    );
  }

  function displayDropdown() {
    return (
      <HamburgerDropdown>
        <li>
          <MenuItem onClick={hey}>Meet Lana</MenuItem>
        </li>
        <li>
          <MenuItem onClick={hey}>Welcome to the Studio</MenuItem>
        </li>
        <li>
          <MenuItem onClick={hey}>What the Babes Say</MenuItem>
        </li>
      </HamburgerDropdown>
    );
  }

  function renderMobileMenu() {
    return (
      <MobileMenu>
        <HamburgerMenu
          isOpen={isMenuOpen}
          menuClicked={() => setIsMenuOpen(!isMenuOpen)}
          color={`#${teal}`}
        />
      </MobileMenu>
    );
  }

  function renderClassList() {
    return (
      <DesktopMenu>
        <ClassItem>Barre</ClassItem>
        <ClassItem>Pop Pilates</ClassItem>
        <ClassItem>Cardio Yoga</ClassItem>
        <ClassItem>Buti Yoga</ClassItem>
        <ClassItem>Paddleboard</ClassItem>
      </DesktopMenu>
    );
  }
  return (
    <Header>
      {isMenuOpen ? displayDropdown() : null}
      {renderDesktopMenu()}
      {renderMobileMenu()}
      {renderClassList()}
    </Header>
  );
}

const Header = styled.header`
  @media screen and (max-width: ${largeBreakpoint}px) {
    padding: 1rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: ${largeBreakpoint}px) {
    display: none;
  }
  padding: 1rem 3rem;
`;

const MobileMenu = styled.div`
  @media screen and (min-width: ${largeBreakpoint - 1}px) {
    display: none;
  }
`;

const MenuItemCss = css`
  display: block;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  font-family: DancingScript;
  color: #${teal};
  font-size: 1.2rem;
  &:hover {
    color: #${teal};
    opacity: 0.7;
  }
`;

const MenuItem = styled.a`
  ${MenuItemCss}
`;

const ClassItem = styled.a`
  ${MenuItemCss}
  font-family: Nunito;
  padding: 1rem;
`;

const Logo = styled.img`
  width: 9rem;
`;

const HamburgerDropdown = styled.ul`
  position: absolute;
  list-style-type: none;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default Navbar;

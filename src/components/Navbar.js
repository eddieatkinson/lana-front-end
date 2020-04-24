import React, { useState } from "react";
import styled, { css } from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";
import { logo } from "../assets";
import { largeBreakpoint, teal } from "../utilities";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function linkClicked() {
    setIsMenuOpen(!isMenuOpen);
  }

  function renderDesktopMenu() {
    return (
      <DesktopMenu>
        <MenuItem href="#lana">
          <Logo src={logo}></Logo>
        </MenuItem>
        <MenuItem>
          <Link style={styles.scrollLink} to="lana" spy={true} smooth={true}>
            Meet Lana
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={styles.scrollLink} to="about" spy={true} smooth={true}>
            Welcome to the Studio
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={styles.scrollLink}
            to="testimonials"
            spy={true}
            smooth={true}
          >
            What the Babes Say
          </Link>
        </MenuItem>
      </DesktopMenu>
    );
  }

  function displayDropdown() {
    return (
      <HamburgerDropdown>
        <li>
          <MenuItem>
            <Link
              onClick={linkClicked}
              style={styles.scrollLink}
              to="lana"
              spy={true}
              smooth={true}
            >
              Meet Lana
            </Link>
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Link
              onClick={linkClicked}
              style={styles.scrollLink}
              to="about"
              spy={true}
              smooth={true}
            >
              Welcome to the Studio
            </Link>
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Link
              onClick={linkClicked}
              style={styles.scrollLink}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              What the Babes Say
            </Link>
          </MenuItem>
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
        <ClassItem>
          <Link style={styles.scrollLink} to="barre" spy={true} smooth={true}>
            Barre
          </Link>
        </ClassItem>
        <ClassItem>
          <Link
            style={styles.scrollLink}
            to="popPilates"
            spy={true}
            smooth={true}
          >
            Pop Pilates
          </Link>
        </ClassItem>
        <ClassItem>
          <Link
            style={styles.scrollLink}
            to="cardioYoga"
            spy={true}
            smooth={true}
          >
            Cardio Yoga
          </Link>
        </ClassItem>
        <ClassItem>
          <Link
            style={styles.scrollLink}
            to="butiYoga"
            spy={true}
            smooth={true}
          >
            Buti Yoga
          </Link>
        </ClassItem>
        <ClassItem>
          <Link
            style={styles.scrollLink}
            to="paddleboard"
            spy={true}
            smooth={true}
          >
            Paddleboard
          </Link>
        </ClassItem>
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

const styles = {
  scrollLink: {
    color: `#${teal}`,
  },
};

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
  font-family: DancingScript;
  font-size: 1.2rem;
  &:hover {
    color: #${teal};
    opacity: 0.7;
  }
`;

const MenuItem = styled.div`
  ${MenuItemCss}
`;

const ClassItem = styled.div`
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

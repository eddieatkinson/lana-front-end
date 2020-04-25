import React, { useState } from "react";
import styled, { css } from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";
import { logo } from "../assets";
import { largeBreakpoint, teal } from "../utilities";

export default () => {
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
        <MenuItem>
          <BookNowItem
            href="https://www.schedulicity.com/scheduling/bpanzq"
            target="_blank"
          >
            Book Now
          </BookNowItem>
        </MenuItem>
      </DesktopMenu>
    );
  }

  function displayDropdown() {
    return (
      <HamburgerDropdown>
        <DropdownMenuItem>
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
        </DropdownMenuItem>
        <DropdownMenuItem>
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
        </DropdownMenuItem>
        <DropdownMenuItem>
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
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuItem>
            <Link
              onClick={linkClicked}
              style={styles.scrollLink}
              to="barre"
              spy={true}
              smooth={true}
            >
              Classes
            </Link>
          </MenuItem>
        </DropdownMenuItem>
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
        <MenuItem>
          <BookNowItem
            href="https://www.schedulicity.com/scheduling/bpanzq"
            target="_blank"
          >
            Book Now
          </BookNowItem>
        </MenuItem>
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
};

const styles = {
  scrollLink: {
    color: `#${teal}`,
  },
};

const Header = styled.header`
  @media screen and (max-width: ${largeBreakpoint}px) {
    margin: 1.5rem 1rem;
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
  display: flex;
  justify-content: space-between;
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

const DropdownMenuItem = styled.li`
  margin: 0.5rem 0 0.5rem 0.5rem;
`;

const ClassItem = styled.div`
  ${MenuItemCss}
  font-family: Nunito;
  padding: 1rem;
`;

const BookNowItem = styled.a`
  font-family: Nunito;
  padding: 1rem;
  color: white;
  border-radius: 10%;
  &:hover {
    color: white;
  }
  background-color: #${teal};
`;

const Logo = styled.img`
  width: 9rem;
`;

const HamburgerDropdown = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: #ffffffdd;
  border-radius: 5%;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

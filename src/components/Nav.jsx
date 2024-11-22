import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MobileNav } from "./MobileNav";
import { useWindowSize } from "utils/useWindowsize";
import { theme } from "utils/style";

import logo from "assets/shared/logo.svg";

import home from "assets/home/background-home-desktop.jpg";
import home_tablet from "assets/home/background-home-tablet.jpg";
import home_mobile from "assets/home/background-home-mobile.jpg";

import destination from "assets/destination/background-destination-desktop.jpg";
import destination_tablet from "assets/destination/background-destination-tablet.jpg";
import destination_mobile from "assets/destination/background-destination-mobile.jpg";

import crew from "assets/crew/background-crew-desktop.jpg";
import crew_tablet from "assets/crew/background-crew-tablet.jpg";
import crew_mobile from "assets/crew/background-crew-mobile.jpg";

import tech from "assets/technology/background-technology-desktop.jpg";
import tech_tablet from "assets/technology/background-technology-tablet.jpg";
import tech_mobile from "assets/technology/background-technology-mobile.jpg";

export const Nav = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(false);
  const lists = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "DESTINATION",
      link: "/destination",
    },
    { name: "CREW", link: "/crew" },
    { name: "TECHNOLOGY", link: "/tech" },
  ];

  const bgImg = {
    "/": {
      desktop: home,
      tablet: home_tablet,
      mobile: home_mobile,
    },
    "/destination": {
      desktop: destination,
      tablet: destination_tablet,
      mobile: destination_mobile,
    },
    "/crew": {
      desktop: crew,
      tablet: crew_tablet,
      mobile: crew_mobile,
    },
    "/tech": {
      desktop: tech,
      tablet: tech_tablet,
      mobile: tech_mobile,
    },
  };

  const ListItems = () => {
    return (
      <>
        {lists.map((i, idx) => (
          <Items
            key={idx}
            $match={i.link === location.pathname ? true : false}
            onClick={() => {
              navigate(i.link);
              setActive(!active);
            }}
          >
            <strong>{`0${idx}`}</strong>
            {i.name}
          </Items>
        ))}
      </>
    );
  };

  return (
    <Layout
      width={windowSize}
      pathname={location.pathname}
      $bgImg={
        windowSize <= 768
          ? bgImg[location.pathname].mobile
          : windowSize <= 1280
          ? bgImg[location.pathname].tablet
          : bgImg[location.pathname].desktop
      }
    >
      <Header>
        <Img src={logo} alt="logo" onClick={() => navigate("/")} />
        {windowSize > 768 ? (
          <>
            <Bar />
            <NavBox>
              <ListItems />
            </NavBox>
          </>
        ) : (
          <>
            <MobileNav active={active} setActive={setActive}>
              <ListItems />
            </MobileNav>
          </>
        )}
      </Header>
      <Outlet />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  @media ${({ theme: { devices } }) => devices.desktop} {
    height: 100vh;
  }
  @media ${({ theme: { devices } }) => devices.mobile} {
    position: relative;
    height: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    padding: 0px;
  }
  @media ${({ theme: { devices } }) => devices.mobile} {
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Img = styled.img`
  margin: 0px 4rem;
  cursor: pointer;
  @media ${({ theme: { devices } }) => devices.tablet} {
    margin: 0px 2rem;
  }
  @media ${({ theme: { devices } }) => devices.mobile} {
    margin: 0px;
  }
`;
const Bar = styled.div`
  width: 30%;
  height: 1px;
  background-color: gray;
  flex-grow: 1;
  position: relative;
  left: 2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
    display: none;
  }
`;
const NavBox = styled.div`
  height: 96px;
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 0px 64px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.1);
  @media ${({ theme: { devices } }) => devices.tablet} {
    padding: 0px 62px;
  }
`;
const Items = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-bottom: ${({ $match }) => $match && `3px solid white`};
  ${theme.baseStyles.text8}
  strong {
    margin-right: 10px;
    font-weight: bold;
  }
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
  @media ${({ theme: { devices } }) => devices.mobile} {
    height: 20px;
    border-bottom: 0px;
    border-right: ${({ $match }) => $match && `3px solid white`};
    &:hover {
      border-bottom: 0px;
    }
  }
`;

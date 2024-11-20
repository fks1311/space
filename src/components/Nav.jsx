import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useWindowSize } from "utils/useWindowsize";
import logo from "assets/shared/logo.svg";
import home from "assets/home/background-home-desktop.jpg";
import destination from "assets/destination/background-destination-desktop.jpg";
import crew from "assets/crew/background-crew-desktop.jpg";
import tech from "assets/technology/background-technology-desktop.jpg";

export const Nav = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();
  const lists = [
    {
      name: "00 HOME",
      link: "/",
    },
    {
      name: "01 DESTINATION",
      link: "/destination",
    },
    { name: "02 CREW", link: "/crew" },
    { name: "03 TECHNOLOGY", link: "/tech" },
  ];

  const bgImg = {
    "/": home,
    "/destination": destination,
    "/crew": crew,
    "/tech": tech,
  };

  return (
    <Layout width={windowSize} $bgImg={bgImg[location.pathname]}>
      <Header>
        <Img src={logo} alt="logo" />
        <Bar />
        <NavBox>
          {lists.map((i, idx) => (
            <Items key={idx} $match={i.link === location.pathname ? true : false} onClick={() => navigate(i.link)}>
              {i.name}
            </Items>
          ))}
        </NavBox>
      </Header>
      <Outlet />
    </Layout>
  );
};

const Layout = styled.div`
  width: ${({ width }) => width}px;
  height: 100vh;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`;

const Img = styled.img`
  margin: 0px 4rem;
`;
const Bar = styled.div`
  width: 30%;
  height: 1px;
  background-color: gray;
  flex-grow: 1;
  position: relative;
  left: 2rem;
`;
const NavBox = styled.div`
  height: 96px;
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 0px 64px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.1);
`;
const Items = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-bottom: ${({ $match }) => $match && `3px solid white`};
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`;

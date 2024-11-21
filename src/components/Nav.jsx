import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useWindowSize } from "utils/useWindowsize";
import logo from "assets/shared/logo.svg";
import home from "assets/home/background-home-desktop.jpg";
import destination from "assets/destination/background-destination-desktop.jpg";
import crew from "assets/crew/background-crew-desktop.jpg";
import tech from "assets/technology/background-technology-desktop.jpg";
import { theme } from "utils/style";

export const Nav = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();
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
    "/": home,
    "/destination": destination,
    "/crew": crew,
    "/tech": tech,
  };

  return (
    <Layout width={windowSize} $bgImg={bgImg[location.pathname]}>
      <Header>
        <Img src={logo} alt="logo" />
        <Bar className="bar" />
        <NavBox>
          {lists.map((i, idx) => (
            <Items key={idx} $match={i.link === location.pathname ? true : false} onClick={() => navigate(i.link)}>
              <strong>{`0${idx}`}</strong>
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
  display: flex;
  flex-direction: column;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding: 0px;
  }
`;

const Img = styled.img`
  margin: 0px 4rem;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin: 0px 2rem;
  }
`;
const Bar = styled.div`
  width: 30%;
  height: 1px;
  background-color: gray;
  flex-grow: 1;
  position: relative;
  left: 2rem;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
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
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
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
`;

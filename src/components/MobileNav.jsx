import hamburger from "assets/shared/icon-hamburger.svg";
import close from "assets/shared/icon-close.svg";
import styled from "styled-components";

export const MobileNav = ({ active, setActive, children }) => {
  return (
    <>
      {active ? (
        <Layout>
          <ImgContainer>
            <Icon src={close} onClick={() => setActive(false)} />
          </ImgContainer>
          <NavList>{children}</NavList>
        </Layout>
      ) : (
        <Icon src={hamburger} onClick={() => setActive(true)} />
      )}
    </>
  );
};

const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  backdrop-filter: blur(30px);
  z-index: 1;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  padding-left: 2rem;
  color: ${({ theme: { color } }) => color.WHITE};
`;

const Icon = styled.img`
  cursor: pointer;
`;

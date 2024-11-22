import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const DefaultPage = forwardRef((props, ref) => {
  const { pathname } = useLocation();

  return <Layout pathname={pathname}>{props.children}</Layout>;
});
const Layout = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: ${({ pathname }) => (pathname === "/tech" ? `flex-end` : "center")};
  padding: 48px 0px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    height: ${({ pathname }) => pathname === "/" && "100%"};
    padding: ${({ pathname }) => (pathname === "/crew" ? `40px 0px 0px 0px` : `40px 0px`)};
    justify-content: center;
  }
`;

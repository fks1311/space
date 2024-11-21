import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const DefaultPage = forwardRef((props, ref) => {
  const { pathname } = useLocation();

  return (
    <Layout className="defaultpage" pathname={pathname}>
      {props.children}
    </Layout>
  );
});
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ pathname }) => (pathname === "/tech" ? `flex-end` : "center")};
  align-items: center;
  padding: 48px 0px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    padding: ${({ pathname }) => (pathname === "/crew" ? `40px 0px 0px 0px` : `40px 0px`)};
    justify-content: center;
  }
`;

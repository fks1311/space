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
  height: 100%;
  display: flex;
  justify-content: ${({ pathname }) => (pathname === "/tech" ? `flex-end` : "center")};
  align-items: center;
`;

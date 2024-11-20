import { forwardRef } from "react";
import styled from "styled-components";

export const DefaultPage = forwardRef((props, ref) => {
  return <Layout className="defaultpage">{props.children}</Layout>;
});
const Layout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

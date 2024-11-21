import { DefaultPage } from "components/DefaultPage";
import { useState } from "react";
import styled from "styled-components";
import { data } from "utils/data";
import { theme } from "utils/style";

export const Technology = () => {
  const { technology } = data;
  const [active, setActive] = useState(0);

  return (
    <DefaultPage>
      <Layout>
        <Title>
          <strong>03</strong> SPACE LAUNCH 101
        </Title>
        <Content>
          <Left>
            <IndexBtn>
              {technology.map((data, idx) => (
                <Index key={idx} active={active} idx={idx} onClick={() => setActive(idx)}>
                  {idx + 1}
                </Index>
              ))}
            </IndexBtn>
            <Destinations>
              <Intro>THE TERMINOLOGY...</Intro>
              <Name>{technology[active].name.toLocaleUpperCase()}</Name>
              <Destination>{technology[active].description}</Destination>
            </Destinations>
          </Left>
          <Right>
            <img src={technology[active].images.portrait} />
          </Right>
        </Content>
      </Layout>
    </DefaultPage>
  );
};

const Layout = styled.div`
  height: 100%;
  // width: 70%;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  strong {
    color: gray;
    font-family: ${({ theme: { font } }) => font.BarlowCondensed};
    font-size: 28px;
    font-weight: bold;
  }
  color: ${({ theme: { color } }) => color.WHITE};
  font-size: clamp(1.25rem, 0.679rem + 1.19vw, 1.75rem);
  ${theme.baseStyles.text5}
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  gap: 32px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 64px;
`;
const IndexBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Index = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.baseStyles.text4};
  color: ${({ active, idx, theme: { color } }) => (active === idx ? color.BLUE_900 : color.WHITE)};
  border-radius: 50%;
  border: ${({ active, idx, theme: { color } }) => active !== idx && `1px solid rgba(255, 255, 255, 0.5)`};
  background-color: ${({ active, idx, theme: { color } }) => (active === idx ? color.WHITE : `transparent`)};
  cursor: pointer;
`;
const Destinations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Intro = styled.div`
  ${theme.baseStyles.text4}
  color: ${({ theme: { color } }) => color.WHITE};
  opacity: 0.5;
`;
const Name = styled.div`
  ${theme.baseStyles.text3}
  color:${({ theme: { color } }) => color.WHITE};
`;
const Destination = styled.div`
  ${theme.baseStyles.text9}
  color:${({ theme: { color } }) => color.BLUE_300};
  line-height: 2rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    height: 80%;
  }
`;

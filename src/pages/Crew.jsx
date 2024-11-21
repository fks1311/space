import { DefaultPage } from "components/DefaultPage";
import styled from "styled-components";
import { theme } from "utils/style";
import { data } from "utils/data";
import { useState } from "react";

export const Crew = () => {
  const crew = data.crew;
  const [active, setActive] = useState(0);

  return (
    <DefaultPage>
      <Layout>
        <Title>
          <strong>02</strong> MEET YOUT CREW
        </Title>
        <Content>
          <Left className="left">
            <Explanation>
              <Role>{crew[active].role.toLocaleUpperCase()}</Role>
              <Name>{crew[active].name.toLocaleUpperCase()}</Name>
              <Bio>{crew[active].bio}</Bio>
            </Explanation>
            <Pagenation>
              {crew.map((data, idx) => (
                <Page key={idx} active={active} idx={idx} onClick={() => setActive(idx)} />
              ))}
            </Pagenation>
          </Left>
          <Right className="right">
            <img src={crew[active].images} />
          </Right>
        </Content>
      </Layout>
    </DefaultPage>
  );
};

const Layout = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    width: 90%;
  }
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
  height: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 32px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media ${({ theme: { devices } }) => devices.tablet} {
    align-items: center;
    gap: 24px;
    padding: 2rem;
  }
`;
const Explanation = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    align-items: center;
    text-align: center;
  }
`;
const Role = styled.div`
  ${theme.baseStyles.text4};
  color: ${({ theme: { color } }) => color.WHITE};
  opacity: 0.5;
`;
const Name = styled.div`
  ${theme.baseStyles.text3};
  color: ${({ theme: { color } }) => color.WHITE};
  line-height: 4rem;
`;
const Bio = styled.div`
  ${theme.baseStyles.text9};
  color: ${({ theme: { color } }) => color.BLUE_300};
  line-height: 2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
  }
`;
const Pagenation = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
    margin-top: 2rem;
    margin-bottom: 0px;
  }
`;
const Page = styled.div`
  background-color: ${({ active, idx }) => (active === idx ? "white" : "rgba(255, 255, 255, 0.5)")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  img {
    height: 600px;
  }
`;

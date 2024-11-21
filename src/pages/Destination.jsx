import { useState } from "react";
import styled from "styled-components";
import { DefaultPage } from "components/DefaultPage";
import { theme } from "utils/style";
import { data } from "utils/data";

export const Destination = () => {
  const destination = data.destinations;
  const [active, setActive] = useState(0);
  const selectItem = [
    { id: 0, platnet: "MOON" },
    { id: 1, platnet: "MARS" },
    { id: 2, platnet: "EUROPA" },
    { id: 3, platnet: "TITAN" },
  ];

  return (
    <DefaultPage>
      <Layout>
        <Title>
          <strong>01</strong> PICK YOUR DESTINATION
        </Title>
        <Content>
          <PlanetImg src={destination[active].images} />
          <Destinations>
            <List>
              {selectItem.map((p, i) => (
                <Items key={i} active={active} idx={i} onClick={() => setActive(i)}>
                  {p.platnet}
                </Items>
              ))}
            </List>
            <PlanetName>{destination[active].name.toLocaleUpperCase()}</PlanetName>
            <Description>{destination[active].description}</Description>
            <Bar />
            <Statistics>
              <div>
                <span>AVG. DISTANCE</span>
                <p>{destination[active].distance}</p>
              </div>
              <div>
                <span>EST. TRAVEL TIME</span>
                <p>{destination[active].travel}</p>
              </div>
            </Statistics>
          </Destinations>
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
  justify-content: space-evenly;
  align-items: center;
  @media ${({ theme: { devices } }) => devices.tablet} {
    flex-direction: column;
    gap: 32px;
  }
`;
const PlanetImg = styled.img`
  padding: 2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
    height: 300px;
    width: 300px;
  }
`;
const Destinations = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    width: 80%;
    align-items: center;
  }
`;
const List = styled.div`
  display: flex;
  gap: 2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
    gap: 3rem;
  }
`;
const Items = styled.div`
  font-size: clamp(0.875rem, 0.756rem + 0.509vw, 1rem);
  color: ${({ theme: { color } }) => color.BLUE_300};
  ${theme.baseStyles.text8}
  padding-bottom:5px;
  border-bottom: ${({ active, idx }) => active === idx && "2px solid white"};
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`;

const PlanetName = styled.div`
  color: ${({ theme: { color } }) => color.WHITE};
  ${theme.baseStyles.text2};
`;
const Description = styled.p`
  color: ${({ theme: { color } }) => color.BLUE_300};
  ${theme.baseStyles.text9}
  line-height:2rem;
  @media ${({ theme: { devices } }) => devices.tablet} {
    text-align: center;
  }
`;
const Bar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 2px;
  border: 0;
`;
const Statistics = styled.div`
  display: flex;
  div {
    flex: 1;
    line-height: 2rem;
  }
  span {
    ${theme.baseStyles.text7};
    color: ${({ theme: { color } }) => color.BLUE_300};
  }
  p {
    ${theme.baseStyles.text6};
    color: ${({ theme: { color } }) => color.WHITE};
  }
  @media ${({ theme: { devices } }) => devices.tablet} {
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media ${({ theme: { devices } }) => devices.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`;

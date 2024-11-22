import { DefaultPage } from "components/DefaultPage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "utils/style";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <DefaultPage>
      <Layout>
        <Message>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </Message>
        <ButtonContainer>
          <div style={{ flex: 1 }} />
          <ButtonLayout>
            <Button onClick={() => navigate("/destination")}>EXPLORE</Button>
          </ButtonLayout>
        </ButtonContainer>
      </Layout>
    </DefaultPage>
  );
};

const Layout = styled.div`
  display: flex;
  padding: 128px 0px;
  width: 1100px;
  @media ${({ theme: { devices } }) => devices.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  color: ${({ theme: { color } }) => color.BLUE_300};
  span {
    font-size: clamp(1rem, 0.284rem + 3.053vw, 1.75rem);
    ${theme.baseStyles.text5}
  }
  h1 {
    color: white;
    font-size: clamp(5rem, 1.183rem + 16.285vw, 9rem);
    ${theme.baseStyles.text1}
  }
  p {
    line-height: 2rem;
    ${theme.baseStyles.text9}
  }
  @media ${({ theme: { devices } }) => devices.tablet} {
    align-items: center;
    p {
      width: 80%;
      text-align: center;
    }
  }
`;
const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
`;
const ButtonLayout = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Button = styled.button`
  padding: 100px 30px;
  font-size: clamp(1.125rem, 0.29rem + 3.562vw, 2rem);
  color: ${({ theme: { color } }) => color.BLUE_900};
  ${theme.baseStyles.text4}
  border-radius: 50%;
  border: none;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

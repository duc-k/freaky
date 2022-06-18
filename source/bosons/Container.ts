import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  height: 100%;
  display: grid;
  grid-template-columns: 350px 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;

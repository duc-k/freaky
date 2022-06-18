import styled from "styled-components";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    border-radius: 16px;
  }

  .profile__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin-top: -80px;
    padding: 20px 0;
    background: #22252a;
    border-radius: 16px;
    strong {
      display: block;
    }

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0.5rem 2rem;
      margin-top: 20px;
      border-radius: 8px;
      color: #000;
      background: #ffe87f;
    }

    svg {
      width: 20px;
    }
  }
`;

export default Container;

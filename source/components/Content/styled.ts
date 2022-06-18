import styled from "styled-components";

const Container = styled.main`
  @media (min-width: 620px) {
    padding: 0 2rem;
  }
  @media (max-width: 600px) {
    margin-top: 2rem;
  }

  .repositories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-auto-rows: 150px;
    gap: 1rem;
    > li {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #26282e;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 500ms;
      &:hover {
        transform: translateY(-5px);
        border: 2px solid #fffda2;
      }
    }
    a {
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: 400ms;
      &:hover {
        color: #ffe87f !important;
      }
    }
    strong {
      display: block;
      margin-bottom: 5px;
      font-size: 1.3rem;
      font-family: "Jolly Lodger", cursive;
    }
    p {
      color: #768390;
      font-size: 14px;
      max-width: 290px;
    }
    &__topics {
      margin-top: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      li {
        color: #999;
        font: 0.6rem monospace;
        padding: 0.25rem 0.5rem;
        border: 1px solid #292d32;
        &:nth-child(odd) {
          background: #292d32;
        }
      }
    }
  }
`;

export default Container;
